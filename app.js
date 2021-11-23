// Search Notes (or card)

let search=document.getElementById('searchTxt');
search.addEventListener("input", function(){
    // console.log("input seatch fire")
    let inputValue =search.value.toLowerCase();
    let card=document.getElementsByClassName("Notecard");
    Array.from(card).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        let h5Txt=element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputValue)){
            element.style.display="block";
        }
        else if(h5Txt.includes(inputValue)){
            element.style.display="block";
        }
        else {
            element.style.display="none";
        }
    });
})

// Add a Notes 
let addBtn = document.getElementById("addBtn");  //get button 
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let titleTxt=document.getElementById("titleTxt");
    let notes = localStorage.getItem("notes");
    let notesobj;
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj={
        title: titleTxt.value,
        text: addTxt.value
    };
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    showNotes();
});

//function to delete notes

function deleteNote(index){
    console.log('i am deleting'+ index)

    if (notes == null) {
        notesobj = [];
    }
    else {
        //notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

//function for show notes on display
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = '';
    notesobj.forEach(function (element, index) {
        html = html + '<div class="my-2 mx-2 Notecard" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+ element.title+ '</h5><p class="card-text">' + element.text + '</p><button id='+index+' onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button></div></div>';
    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML='There no notes for now, Please use AddNote button and add your notes'
    }  
}