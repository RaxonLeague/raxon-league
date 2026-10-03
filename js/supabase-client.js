const SUPABASE_URL = 'https://dmapggpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYXBnZ3B2b2dhbHVyaHRxcG0iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc0MDIxNTQ2NSwiZXhwIjoyMDU1NzkxNDY1fQ.x_-577789_738590_EXAMPLE'; // Pon tu ANON_KEY real si es distinta

// Creamos la instancia cliente con un nombre único
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
