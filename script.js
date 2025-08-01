// Máquina de escrever
const text = "Oi, meu amor ❤️";
const typewriter = document.getElementById('typewriter');
let index = 0;

function escrever() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(escrever, 100);
  }
}
typewriter.innerHTML = '';
escrever();

// Mostrar surpresa
document.getElementById('revealBtn').addEventListener('click', () => {
  document.getElementById('secret').classList.add('show');
  document.getElementById('revealBtn').style.display = 'none';
});

// Música com clique
document.getElementById('playMusicBtn').addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.width = 1;
  iframe.height = 1;
  iframe.src = "https://www.youtube.com/embed/-YzDsDMYqdw?autoplay=1&loop=1&playlist=-YzDsDMYqdw";
  iframe.allow = "autoplay; encrypted-media";
  iframe.frameBorder = 0;
  iframe.style.border = 'none';
  document.getElementById('ytPlayer').appendChild(iframe);
  document.getElementById('playMusicBtn').style.display = 'none';
});


// Corações flutuando
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 3) + 's';

  document.querySelector('.hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(criarCoracao, 300);
