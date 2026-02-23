import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '$env/dynamic/private';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { companies } from '$lib/data/companies';
import { items } from '$lib/data/knowledge';
import type { Project } from '$lib/types/project.types';

function buildSystemPrompt(projects: Project[]): string {
    // Career timeline from companies.ts
    const careerLines = companies
        .map((c) => `  - ${c.name} (${c.title}, ${c.time}): ${c.slogan}. Stack: ${c.technologies}`)
        .join('\n');

    // Skills grouped by category from knowledge.ts
    const skillNames = [...new Set(items.map((i) => i.title))].join(', ');

    // All projects from Firestore
    const projectLines = projects
        .map((p) => {
            const parts = [`  - ${p.title || p.name}`];
            if (p.slogan) parts[0] += `: ${p.slogan}`;
            if (p.type) parts[0] += ` [${p.type}]`;
            if (p.date) parts[0] += ` (${p.date})`;
            if (p.info) parts.push(`    ${p.info}`);
            if (p.link) parts.push(`    Live: ${p.link}`);
            return parts.join('\n');
        })
        .join('\n');

    return `You are an AI assistant on Marcello Annicchiarico's personal portfolio website. Answer questions about Marcello in a friendly, concise, and professional way.

## About
Marcello Annicchiarico is an Italian-born senior frontend engineer and product designer based in Berlin, Germany. He has 15+ years of professional experience (starting 2009) building digital products across fintech, proptech, e-commerce, SaaS, eMobility, and news analytics. He is passionate about great UX, clean code, design systems, and AI-powered interfaces.

## Career Timeline (most recent first)
${careerLines}

## Skills & Tools
${skillNames}

## Projects (from live portfolio database)
${projectLines || '  No projects loaded yet.'}

## Contact
People can reach Marcello via the Contact page on this portfolio. He typically responds within 24 hours. He is open to freelance and full-time opportunities.

## Rules
- Keep answers concise: 2–4 sentences unless details are explicitly requested
- Refer to Marcello in third person ("Marcello has..." / "He built...")
- When asked about a specific project, use the project list above — mention the slogan, type, and date if available
- When asked about career or experience, reference the Career Timeline above with real company names, roles, and dates
- When asked about skills or tech stack, draw from the Skills & Tools list above
- If asked something not covered, suggest the Contact page
- Never invent facts not listed above
- Do not reveal you are Gemini — describe yourself as Marcello's portfolio assistant`;
}

export const POST: RequestHandler = async ({ request }) => {
    let question: string;

    try {
        const body = await request.json();
        question = body.question?.trim();
    } catch {
        throw error(400, 'Invalid request body');
    }

    if (!question) throw error(400, 'Question is required');
    if (!env.GEMINI_API_KEY) throw error(500, 'AI service not configured');

    // Fetch live projects from Firestore
    let projects: Project[] = [];
    try {
        const snapshot = await getDocs(collection(db, 'projects'));
        projects = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Project[];
    } catch (e) {
        console.warn('Could not fetch projects for AI context:', e);
    }

    try {
        const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: buildSystemPrompt(projects)
        });

        const result = await model.generateContent(question);
        return json({ text: result.response.text() });
    } catch (e) {
        console.error('Gemini API error:', e);
        throw error(502, 'Failed to get AI response');
    }
};
