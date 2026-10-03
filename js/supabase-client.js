// Configuración de Supabase
const SUPABASE_URL = 'https://dmapggpvogalurhtqpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYXBnZ3B2b2dhbHVyaHRxcG0iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc0MDIxNTQ2NSwiZXhwIjoyMDU1NzkxNDY1fQ.x_-577789_738590_EXAMPLE'; // Reemplaza por tu ANON KEY real si difiere

// Inicializar el cliente asignándolo a window.supabaseClient
if (window.supabase && typeof window.supabase.createClient === 'function') {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
