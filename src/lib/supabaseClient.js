import { PUBLIC_SUPERBASE_KEY, PUBLIC_SUPERBASE_URL } from '$env/static/public'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PUBLIC_SUPERBASE_URL, PUBLIC_SUPERBASE_KEY)
