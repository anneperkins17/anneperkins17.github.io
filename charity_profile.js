// for showing the hidden volunteer form when clicked by a user

function displayForm () {
  const hidden = document.getElementById("hidden");
  const hide = document.getElementById("hide");

  if (hidden.style.display === 'none'){
    hidden.style.display = 'block';
    hide.style.display = 'none';
  } else {
    hidden.style.display = 'none';
    hide.style.display = 'block';
  }
}

// thank you message when user hits submit

const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function(event){
  event.preventDefault();
  message.style.display = 'block';
  form.style.display = 'none';
});


// changing color when user mousesover the navbar

const hover = document.querySelectorAll(".hover");

function color (event){
  event.target.style.backgroundColor = 'yellow';
}

function reset (event){
  event.target.style.backgroundColor = '';
}

hover.forEach(element => {
  element.addEventListener('mouseover', color);
  element.addEventListener('mouseout', reset);  
});

