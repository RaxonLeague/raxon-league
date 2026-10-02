// Sustituye con las llaves de tu proyecto en Supabase (Settings -> API)
const SUPABASE_URL = 'https://dmapggqpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'AQUÍ_PEGA_TU_CLAVE_ANON_DE_SUPABASE';

const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
