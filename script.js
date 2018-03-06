class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩
       this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      newNote.setAttribute("class", "card");
    

      let p = document.createElement('p');
      p.innerHTML= title;
      newNote.appendChild(p);
      
      let a = document.createElement('a');

      a.setAttribute("class" , "card-remove");
      a.setAttribute("href", "#");
      a.innerHTML = "Remove";
      newNote.appendChild(a);
      
      // HINT🤩 
      a.addEventListener('click', this.remove.bind(newNote));
   
      return newNote;
    }
    
    add(){
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector(".notes").appendChild(this.element);
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      console.log("removing element");
      console.log(this);
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
     /*document.querySelector("#textAddNote").addEventListener('keypress' function(e){
 
     }); */
     //txtnode
     //keypress
     this.btnAdd.addEventListener("click", this.createNote.bind(this));
     //this.loadNotesFromStorage();
    

     
     console.log(this);
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      console.log(e);
      // this function should create a new note by using the Note() class
      
      // HINT🤩
     // let txt = document.getElementById("txtAddNote").value;
      if(document.getElementById("txtAddNote").value != ""){
        let note = new Note(document.getElementById("txtAddNote").value);
        note.add(); 
      }
       
      // note.saveToStorage();
      //this.reset();

    }
    
    reset(){
      // this function should reset the form 
    }
    
  }
 
  let app = new App();
/*
  let note1 = new Note("Finish Lab 3!");
  console.log(note1);
  note1.add();
*/

//prevent default