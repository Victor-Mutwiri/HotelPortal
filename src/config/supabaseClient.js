import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Ensure they are loaded before creating the client (optional, but good practice)
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing from environment variables!');
  // Or throw an error: throw new Error('Supabase environment variables not set.');
}

export const supabase = createClient(supabaseUrl, supabaseKey)