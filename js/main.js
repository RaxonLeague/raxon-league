document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de funciones generales del sitio
  if (typeof loadSettings === 'function') loadSettings();
  if (typeof loadDynamicMedia === 'function') loadDynamicMedia();
  if (typeof renderDemoBracket === 'function') renderDemoBracket();

  // Listener para el formulario de inscripción
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Capturar inputs del formulario de inscripción
    const inputs = form.querySelectorAll('input');
    const nickname = inputs[0]?.value;
    const fullName = inputs[1]?.value;
    const birthDate = inputs[2]?.value;
    const discordTag = inputs[3]?.value;

    if (!supabase) {
      alert('Error: No se pudo conectar con Supabase.');
      return;
    }

    // Insertar en la tabla 'players'
    const { data, error } = await supabase
      .from('players')
      .insert([
        { 
          nickname: nickname, 
          full_name: fullName, 
          birth_date: birthDate, 
          discord_tag: discordTag,
          status: 'pending' 
        }
      ]);

    if (error) {
      console.error('Error de Supabase:', error);
      alert('Error al enviar la inscripción: ' + error.message);
    } else {
      alert('¡Inscripción enviada exitosamente!');
      form.reset();
      window.location.reload();
    }
  });
});
    }

    container.innerHTML = mediaItems.map(item => `
        <div class="media-card alt-bg" style="padding:1rem;">
            <img src="${item.file_url}" alt="${item.title}" style="width:100%; border-radius:4px;" />
            <h4>${item.title}</h4>
        </div>
    `).join('');
}

function renderDemoBracket() {
    const bracketView = document.getElementById('bracket-view');
    if (!bracketView || typeof DEMO_PLAYERS === 'undefined') return;

    bracketView.innerHTML = `
        <p>Demostración con 64 competidores repartidos en 16 grupos:</p>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            ${DEMO_PLAYERS.slice(0, 16).map(p => `<span class="badge-demo">${p.nickname}</span>`).join('')}
        </div>
    `;
}
// Manejo de Inscripción
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nickname = form.querySelector('input[type="text"]')?.value;
    const fullName = form.querySelectorAll('input[type="text"]')[1]?.value;
    const birthDate = form.querySelector('input[type="date"]')?.value;
    const discordTag = form.querySelectorAll('input[type="text"]')[2]?.value;

    if (!supabase) {
      alert('Error de conexión con Supabase');
      return;
    }

    const { data, error } = await supabase
      .from('players')
      .insert([
        { 
          nickname: nickname, 
          full_name: fullName, 
          birth_date: birthDate, 
          discord_tag: discordTag,
          status: 'pending' 
        }
      ]);

    if (error) {
      alert('Error al registrar: ' + error.message);
    } else {
      alert('¡Inscripción recibida con éxito!');
      form.reset();
      window.location.reload();
    }
  });
});
