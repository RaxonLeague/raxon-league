if (typeof SUPABASE_URL === 'undefined') {
  var SUPABASE_URL = 'https://dmapggpvogalurhtqpm.supabase.co';
}
if (typeof SUPABASE_ANON_KEY === 'undefined') {
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYXBnZ3B2b2dhbHVyaHRxcG0iLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc0MDIxNTQ2NSwiZXhwIjoyMDU1NzkxNDY1fQ.x_-577789_738590_EXAMPLE'; // Tu llave anon existente
}

if (typeof supabase === 'undefined') {
  var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
