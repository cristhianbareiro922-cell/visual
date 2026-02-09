const pieces = document.querySelectorAll('.piece');

pieces.forEach((piece, index) => {
  setTimeout(() => {
    piece.classList.add('show');
  }, index * 1000);
});
