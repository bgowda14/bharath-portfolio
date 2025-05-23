// Smooth scroll on button click
document.getElementById('scroll-btn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Open live project (replace URL slug as needed)
function openLive(repo) {
  window.open(`https://bgowda14.github.io/${repo}/`, '_blank');
}

// Simple form validation + alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  alert(`Thanks for reaching out, I'll hit you back at ${email} soon!`);
  e.target.reset();
});
