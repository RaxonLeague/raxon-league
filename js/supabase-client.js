const SUPABASE_URL = 'https://dmapggqpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYXBnZ3Fwdm9nYWx1cmh0cXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTU0NjUsImV4cCI6MjA1NTc5MTQ2NX0.x_-577789_738590_EXAMPLE'; // Tu ANON_KEY actual

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
