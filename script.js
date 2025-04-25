document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to sections
  const sections = document.querySelectorAll('section, header, footer');
  
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 100 * index);
  });
}); 