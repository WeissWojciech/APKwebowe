document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularz');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Nie można wysłać wiadomości');
    });
  });