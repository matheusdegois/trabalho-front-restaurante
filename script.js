

function toggleContent() {
  const moreContent = document.getElementById('more-content');
  const toggleButton = document.getElementById('toggle-button');

  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'block';
      toggleButton.textContent = 'Ver Menos';
  } else {
      moreContent.style.display = 'none';
      toggleButton.textContent = 'Ver Mais';
  }
}


document.addEventListener('DOMContentLoaded', function() {
    let select = document.querySelector("select");
    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = "Mesa " + i;
        select.appendChild(option);
    }
});


