document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  const radios = document.querySelectorAll('.radio input');

  radios.forEach(radio => {
      radio.addEventListener('change', function () {
          const selectedId = this.parentElement.parentElement.getAttribute('data-id');

          boxes.forEach(box => {
              const options = box.querySelector('.options');

              if (box.getAttribute('data-id') === selectedId) {
                  box.classList.add('active');
                  if (options) options.style.display = 'block';
              } else {
                  box.classList.remove('active');
                  if (options) options.style.display = 'none';
              }
          });
      });
  });
});
