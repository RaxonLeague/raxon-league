document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nickname = document.getElementById('nickname')?.value;
    const fullName = document.getElementById('real_name')?.value;
    const birthDate = document.getElementById('birth_date')?.value;
    const discordTag = document.getElementById('discord')?.value;
    const statusDiv = document.getElementById('form-status');

    if (statusDiv) {
      statusDiv.innerHTML = '<p class="pending">Enviando inscripción a la base de datos...</p>';
    }

    if (!window.supabaseClient) {
      alert('Error: No se pudo conectar con el cliente de Supabase.');
      return;
    }

    const { data, error } = await window.supabaseClient
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
      console.error('Error al insertar:', error);
      if (statusDiv) {
        statusDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      }
      alert('Error de registro: ' + error.message);
    } else {
      if (statusDiv) {
        statusDiv.innerHTML = '<p style="color: var(--primary);">Inscripción recibida. Pendiente de verificación administrativa.</p>';
      }
      alert('¡Inscripción enviada exitosamente!');
      form.reset();
    }
  });
});
