// Get the modal and corresponding window/panel
var side_Menu = document.getElementById("side-Menu");
var sideMenu = document.getElementById('sideMenu');

var rubPopUp = document.getElementById("rubPopUp");
var rubWindow = document.getElementById('rubWindow');

var jadPopUp = document.getElementById("jadPopUp");
var jadWindow = document.getElementById('jadWindow');

var citPopUp = document.getElementById("citPopUp");
var citWindow = document.getElementById('citWindow');

var aquaPopUp = document.getElementById("aquaPopUp");
var aquaWindow = document.getElementById('aquaWindow');

var onyxPopUp = document.getElementById("onyxPopUp");
var onyxWindow = document.getElementById('onyxWindow');

// Get the button that opens the modal
var hamburgMenu = document.getElementById("hamburg-menu");

var rubBtn = document.getElementById("rubBtn");
var jadBtn = document.getElementById("jadBtn");
var citBtn = document.getElementById("citBtn");
var aquaBtn = document.getElementById("aquaBtn");
var onyxBtn = document.getElementById("onyx-clickable");

// Get the <span> element that closes the modal
var menuClose = document.getElementById('menuClose');

var rubClose = document.getElementById('rubClose');
var jadClose = document.getElementById('jadClose');
var citClose = document.getElementById('citClose');
var aquaClose = document.getElementById('aquaClose');
var onyxClose = document.getElementById('onyxClose');

// When the user clicks on the button, open the modal
hamburgMenu.onclick = function() {
  side_Menu.style.display = "block";
  setTimeout(() => {side_Menu.style.opacity = '1';}, 1);
  setTimeout(() => {sideMenu.classList.add('show');}, 1);
}

// rubBtn.onclick = function() {
//   rubPopUp.style.display = "block";
//   setTimeout(() => {rubPopUp.style.opacity = '1';}, 1);
//   setTimeout(() => {rubWindow.classList.add('show');}, 1);
// }

// jadBtn.onclick = function() {
//   jadPopUp.style.display = "block";
//   setTimeout(() => {jadPopUp.style.opacity = '1';}, 1); 
//   setTimeout(() => {jadWindow.classList.add('show');}, 1); 
// }

// citBtn.onclick = function() {
//   citPopUp.style.display = "block";
//   setTimeout(() => {citPopUp.style.opacity = '1';}, 1);
//   setTimeout(() => {citWindow.classList.add('show');}, 1);
// }

// aquaBtn.onclick = function() {
//   aquaPopUp.style.display = "block";
//   setTimeout(() => {aquaPopUp.style.opacity = '1';}, 1);
//   setTimeout(() => {aquaWindow.classList.add('show');}, 1);
// }

onyxBtn.onclick = function() {
  onyxPopUp.style.display = "block";
  setTimeout(() => {onyxPopUp.style.opacity = '1';}, 1);
  setTimeout(() => {onyxWindow.classList.add('show');}, 1);
}

// When the user clicks on <span> (x), close the modal
menuClose.onclick = function() {
  sideMenu.classList.remove('show');
  setTimeout(() => {side_Menu.style.opacity = '0';}, 1);
  setTimeout(() => {side_Menu.style.display = "none";}, 300);
}

rubClose.onclick = function() {
  rubWindow.classList.remove('show');
  setTimeout(() => {rubPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {rubPopUp.style.display = "none";}, 300);
}

jadClose.onclick = function() {
  jadWindow.classList.remove('show');
  setTimeout(() => {jadPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {jadPopUp.style.display = "none";}, 300);
}
citClose.onclick = function() {
  citWindow.classList.remove('show');
  setTimeout(() => {citPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {citPopUp.style.display = "none";}, 300);
}
aquaClose.onclick = function() {
  aquaWindow.classList.remove('show');
  setTimeout(() => {aquaPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {aquaPopUp.style.display = "none";}, 300);
}
onyxClose.onclick = function() {
  onyxWindow.classList.remove('show');
  setTimeout(() => {onyxPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {onyxPopUp.style.display = "none";}, 300);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rubPopUp) {
    rubWindow.classList.remove('show');
    setTimeout(() => {rubPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {rubPopUp.style.display = "none";}, 300);
  } else if (event.target == jadPopUp) {
    jadWindow.classList.remove('show');
    setTimeout(() => {jadPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {jadPopUp.style.display = "none";}, 300);
  } else if (event.target == citPopUp) {
    citWindow.classList.remove('show');
    setTimeout(() => {citPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {citPopUp.style.display = "none";}, 300);
  } else if (event.target == aquaPopUp) {
    aquaWindow.classList.remove('show');
    setTimeout(() => {aquaPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {aquaPopUp.style.display = "none";}, 300);
  } else if (event.target == onyxPopUp) {
    onyxWindow.classList.remove('show');
    setTimeout(() => {onyxPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {onyxPopUp.style.display = "none";}, 300);
  } else if (event.target == side_Menu) {
    sideMenu.classList.remove('show');
    setTimeout(() => {side_Menu.style.opacity = '0';}, 1);
    setTimeout(() => {side_Menu.style.display = "none";}, 300);
  }
}

const sidelist = document.querySelectorAll("#sideMenuOptions li a");
sidelist.forEach(link => {
  link.onclick = function() {
    sideMenu.classList.remove('show');
    setTimeout(() => {side_Menu.style.opacity = '0';}, 1);
    setTimeout(() => {side_Menu.style.display = "none";}, 300);
  }
})

hamburgMenu.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    hamburgMenu.click();
  }
})

var dinolist = document.querySelectorAll('.btn');
dinolist.forEach(dino => {
  dino.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      dino.click();
    }
  })
});

var closelist = document.querySelectorAll('.closed');
closelist.forEach(closer => {
  closer.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      closer.click();
    }
  })
}); 

var accordlist = document.querySelectorAll('.accordion-item');
console.log(accordlist)
accordlist.forEach(accordion => {
  accordion.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      accordion.childNodes[1].childNodes[1].click();
    }
  })
});
