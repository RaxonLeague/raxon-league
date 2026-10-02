document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    loadDynamicMedia();
    renderDemoBracket();
});

async function loadSettings() {
    if (!supabase) return;
    const { data } = await supabase.from('site_settings').select('*').single();
    if (data) {
        if (data.slogan) {
            const el = document.getElementById('hero-slogan');
            if (el) el.innerText = data.slogan;
        }
    }
}

async function loadDynamicMedia() {
    const container = document.getElementById('dynamic-media-container');
    if (!container || !supabase) return;

    const { data: mediaItems } = await supabase
        .from('media')
        .select(`id, title, file_url, media_locations!inner(location_tag)`)
        .eq('is_archived', false);

    if (!mediaItems || mediaItems.length === 0) {
        container.innerHTML = '<p class="pending">No hay piezas publicadas actualmente.</p>';
        return;
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
