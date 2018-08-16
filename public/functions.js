// when a vege button gets clicked push it in a new fs.write object
let myGarden = require('./mygarden.json')
let selectedVege = $('.vegetable')

function addVegetoGardenObject(selectedVege){
    selectedVege.addEventListener('click', function(){
        myGarden.push()
    })
}