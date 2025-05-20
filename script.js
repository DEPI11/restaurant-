// Filter Menu Items
document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Filter items
    const filter = button.dataset.filter;
    document.querySelectorAll('.menu-item').forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});