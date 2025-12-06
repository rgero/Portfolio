import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = process.env.VITE_SUPABASE_KEY
const SUPABASE_URL = process.env.VITE_SUPABASE_URL

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;