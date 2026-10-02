// Sustituye con las llaves de tu proyecto en Supabase (Settings -> API)
// Sustituye con las llaves de tu proyecto en Supabase (Settings -> API)
const SUPABASE_URL = 'https://dmapggqpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_d5NbA72VpbjKJ9jIB8jIMg_mGpCJIB5';

const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
