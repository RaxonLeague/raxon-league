document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');
    const nickname = inputs[0]?.value;
    const fullName = inputs[1]?.value;
    const birthDate = inputs[2]?.value;
    const discordTag = inputs[3]?.value;

    if (typeof supabase === 'undefined') {
      alert('Error: No se encontró la conexión con Supabase.');
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
      console.error('Error al insertar:', error);
      alert('Error de registro: ' + error.message);
    } else {
      alert('¡Inscripción enviada exitosamente!');
      form.reset();
      window.location.reload();
    }
  });
});
