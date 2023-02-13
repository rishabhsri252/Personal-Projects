var welcome = document.getElementsByClassName("welcome")[0];
var nav = document.getElementsByClassName("header")[0];
var main = document.getElementsByTagName("main")[0];
var header = document.getElementsByTagName("header")[0];
var footer = document.getElementsByTagName("footer")[0];
var getStarted = document.getElementById("get-started");
var support = document.getElementById("support");
main.style.display = "none";
header.style.display = "none";

getStarted.addEventListener("click", function () {
  nav.style.display = "none";
  footer.style.display = "none";
  welcome.style.display = "none";
  main.style.display = "flex";
  header.style.display = "flex";
});

support.addEventListener("click", function () {
  welcome.style.display = "none";
});

function addPhoto(event) {
  var file = document.getElementById("user-photo");
  var photo = document.getElementById("photo");
  photo.src = URL.createObjectURL(event.target.files[0]);
  photo.style.border = "4px solid rgb(81, 168, 255)";
  photo.onload = function () {
    URL.revokeObjectURL(photo.src);
  };
  // photo.style.width = "-webkit-fill-available";
}

var addRowBtn = document.getElementById("add-table-row");
var deleteRowBtn = document.getElementById("delete-table-row");
var table = document.getElementById("education-table");
deleteRowBtn.disabled = true;

var addListBtn = document.getElementById("add-list");
var deleteListBtn = document.getElementById("delete-list");
var deleteExperienceDiv = document.getElementById("exp-btn");
var experienceList = document.getElementById("experience-list");
deleteListBtn.disabled = true;

var addSkillBtn = document.getElementById("add-list-item");
var deleteSkillBtn = document.getElementById("delete-list-item");
deleteSkillBtn.disabled = true;

deleteExperienceDiv.addEventListener("click", function () {
  this.parentElement.parentElement.remove();
});

addRowBtn.addEventListener("click", function () {
  var row = document.getElementById("row");
  var cloneRow = row.cloneNode(true);
  table.appendChild(cloneRow);
  deleteRowBtn.disabled = false;
});

addListBtn.addEventListener("click", function () {
  var list = document.getElementById("list");
  var cloneList = list.cloneNode(true);
  experienceList.appendChild(cloneList);
  deleteListBtn.disabled = false;
});

addSkillBtn.addEventListener("click", function () {
  var skill = document.getElementById("skill-list");
  var cloneSkill = skill.cloneNode(true);
  skill.parentElement.appendChild(cloneSkill);
  deleteSkillBtn.disabled = false;
});

deleteRowBtn.addEventListener("click", function () {
  table.removeChild(table.lastChild);
  if (table.childElementCount < 2) {
    deleteRowBtn.disabled = true;
  }
});
deleteListBtn.addEventListener("click", function () {
  experienceList.removeChild(experienceList.lastChild);
  if (experienceList.childElementCount < 2) {
    deleteListBtn.disabled = true;
  }
});

deleteSkillBtn.addEventListener("click", function () {
  var skill = document.getElementById("skill-list");
  skill.parentElement.removeChild(skill.parentElement.lastChild);
  if (skill.parentElement.childElementCount < 2) {
    deleteSkillBtn.disabled = true;
  }
});

function hideButtons() {
  var btns = document.getElementsByTagName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].style.display = "none";
  }
}

function hideOutline() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.border = "none";
  }
}

function hidePhoto() {
  var add = document.getElementById("user-photo");
  if (add.value == "") document.getElementById("photo").style.display = "none";
  add.style.display = "none";
}

function addBackground() {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "url(./background.jpg)";
}

function preview() {
  addBackground();
  hideButtons();
  hideOutline();
  hidePhoto();
  // var disc = document.getElementsByClassName('disclaimer');
  // disc[0].style.display = 'none';
  setTimeout(() => {
    window.print();
  }, 1000);
}
