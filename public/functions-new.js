// * STRECH GOAL * on another partial - display all garden threats as slugs, rabbits, flies...


// After one vegetable is placed - display only the good /Helps and / Helped properties of the chosen plant to assure a good matching garden


// * STRECH GOAL * on a NEW partial - display the comments properties on hovering over the plants.


// * STRECH GOAL * on another partial - display a CROSSED threats sign according to the /repels/ properties of the plant. 


// * STRECH GOAL * on another partial - According to the mix of /Repels/ and / Attracts/ properties in the garden adapt the threats signs.

// DRAG AND DROP FUNCTION
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
    let idOfDraggedItem = ev.dataTransfer.getData("Text");
    let copyimg = document.createElement("img");
    let original = document.getElementById(idOfDraggedItem);
    if (original == null){
        alert("you already have a plant there")
    }
    copyimg.src = original.src;
  
    console.log(original.dataset.waterRequired)

    waterArray.push(original.dataset.waterRequired)

    ev.target.appendChild(copyimg);

}