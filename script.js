const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  let audio = null;
  let isPlaying = false;

  // FLIP
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });

  const btn = card.querySelector('.btn');

  btn.addEventListener('click', (event) => {
    event.stopPropagation();

    const audioSrc = card.dataset.audio;

    if (!audio) {
      audio = new Audio(audioSrc);
    }

    // se está tocando → pausa
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      return;
    }

    // se não está tocando → toca
    audio.play();
    isPlaying = true;

    // quando acabar sozinho, reseta estado
    audio.onended = () => {
      isPlaying = false;
    };
  });
});