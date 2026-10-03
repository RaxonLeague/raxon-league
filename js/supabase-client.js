const SUPABASE_URL = 'https://dmapggqpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_d5NbA72VpbjKJ9jIB8jIMg_mGpCJIB5';

if (window.supabase && typeof window.supabase.createClient === 'function') {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
