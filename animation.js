document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        } else {
          entry.target.classList.remove('animate-visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  