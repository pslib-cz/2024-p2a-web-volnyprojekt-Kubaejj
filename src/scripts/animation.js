const footstepDiv = document.getElementById('footsteps-container');
const totalSteps = window.innerWidth / 40;

for (let i = 0; i < totalSteps; i++) {
  const img = document.createElement('img');
//  img.src = '/img/animation/footstep.svg';
  img.src = '%BASE_URL%img/animation/footstep.svg';
  img.className = 'footstep';
  img.style.setProperty('--i', i);
  img.alt = 'stopa';
  footstepDiv.appendChild(img);
}