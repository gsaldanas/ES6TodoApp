class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div');
    newNote.setAttribute("class", "card");


    let p = document.createElement('p');
    p.innerHTML = title;
    newNote.appendChild(p);

    let a = document.createElement('a');

    a.setAttribute("class", "card-remove");
    a.setAttribute("href", "#");
    a.innerHTML = "Remove";
    newNote.appendChild(a);

    // HINT🤩 
    a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
   
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    // localStorage.setItem("cards", JSON.stringify(this.element));
    if (localStorage.cards == undefined) {
      let cards = [];
      cards.push(this);
      console.log(cards);
      localStorage.setItem("cards", JSON.stringify(cards));
    } else {
      let cards = JSON.parse(localStorage.getItem("cards"));
      cards.push(this);
      localStorage.setItem("cards", JSON.stringify(cards));


    }

  }

  remove() {

   document.querySelector(".notes").removeChild(this);

    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();

    this.btnAdd = document.getElementById("btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));

    this.inpTxt = document.getElementById("txtAddNote");
    this.inpTxt.addEventListener('keypress', function (e) {
      if (e.which == 13 || e.keyCode == 13) {
        /*  console.log('key pressed');
          console.log(this.btnAdd);
          //createNote(e);
          createNote.bind(this);
  
          return false;*/
      }
    });

    this.loadNotesFromStorage();



  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    if (localStorage.cards != undefined) {
    let cards = JSON.parse(localStorage.getItem("cards"));
      cards.forEach(element => {
       let note = new Note(element.title);
       note.add();
     });
    }
  }

  createNote(e) {
    // this function should create a new note by using the Note() class

    // HINT🤩
    // let txt = document.getElementById("txtAddNote").value;
    if (document.getElementById("txtAddNote").value != "") {
      let note = new Note(document.getElementById("txtAddNote").value);
      note.add();
      note.saveToStorage();

    }

    this.reset();

  }

  reset() {
    // this function should reset the form 
     document.getElementById("txtAddNote").value = "";
  }

}

let app = new App();
/*
  let note1 = new Note("Finish Lab 3!");
  console.log(note1);
  note1.add();
*/

//prevent default