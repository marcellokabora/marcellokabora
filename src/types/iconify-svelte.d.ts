declare module '@iconify/svelte' {
    import { SvelteComponentTyped } from 'svelte';

    interface IconProps {
        icon: string;
        class?: string;
    }

    export default class Icon extends SvelteComponentTyped<IconProps> { }
} 