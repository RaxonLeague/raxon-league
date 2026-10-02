document.addEventListener('DOMContentLoaded', () => {
  loadAdminStats();
});

async function loadAdminStats() {
  if (typeof supabase === 'undefined' || !supabase) {
    console.error('Supabase no está inicializado.');
    return;
  }

  try {
    // Consultar jugadores con estado pendiente
    const { count, error } = await supabase
      .from('players')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    if (error) {
      console.error('Error consultando Supabase:', error);
      return;
    }

    // Buscar el elemento donde se muestra el texto "Inscripciones Pendientes:"
    const pElements = document.querySelectorAll('p, div, span');
    pElements.forEach(el => {
      if (el.textContent.includes('Inscripciones Pendientes:')) {
        el.innerHTML = `<strong>Inscripciones Pendientes:</strong> ${count !== null ? count : 0}`;
      }
    });

  } catch (err) {
    console.error('Error al cargar datos del Dashboard:', err);
  }
}
