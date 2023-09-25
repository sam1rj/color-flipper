const button = document.getElementById('btn');
const bgColor = document.querySelector('.color');


let createColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


button.addEventListener('click', function(){

  let color = "#"

 

for(let i=0; i<6; i++){

    color += createColor[getRandomNumber()];

}

    bgColor.textContent = color;
    document.body.style.backgroundColor = color;

})

function getRandomNumber(){
    return Math.floor(Math.random()*createColor.length)
}