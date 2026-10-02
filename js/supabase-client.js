// Configuración de Supabase Client
const SUPABASE_URL = 'https://dmapggqpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYXBnZ3Fwdm9nYWx1cmh0cXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NTMyMTMsImV4cCI6MjEwNjUyOTIxM30.ZJG8t26xQaN4YpoOU1aZCh9kk_KIHni_I1HorYmrSak';

if (typeof window.supabaseClient === 'undefined') {
  window.supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
}
var supabase = window.supabaseClient;
