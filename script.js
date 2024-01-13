const notesList = document.querySelector(".notesList");
const addNote = document.getElementById("addNote");
let notes = document.querySelectorAll(".inputBox");

function showNotes() {
  notesList.innerHTML = localStorage.getItem("notes");
}
showNotes();

function storeNotes() {
  localStorage.setItem("notes", notesList.innerHTML);
}

addNote.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputBox";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesList.appendChild(inputBox).appendChild(img);
  storeNotes();
});

notesList.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    storeNotes();
  } else if (e.target.tagName === "P") {
    notes.querySelectorAll(".inputBox");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        storeNotes();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
