document.addEventListener('DOMContentLoaded', function() {
  const typewriter = document.getElementById('typewriter');

  setTimeout(function() {
    typewriter.style.borderRight = 'none'; // Hides the cursor
  }, 3000); // Adjust the delay to match the animation duration
});

