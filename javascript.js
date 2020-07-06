const body = document.querySelector('body')

const buttonContainer = document.createElement('div')
const button = document.createElement('button')

body.appendChild(buttonContainer)
buttonContainer.style.width='100%'
buttonContainer.style.textAlign='center'
buttonContainer.appendChild(button)
button.textContent='Reset'



const mainContainer = document.createElement('div')
mainContainer.style.backgroundColor ='pink'
//mainContainer.style.padding='0'
//mainContainer.style.width='100%'
body.appendChild(mainContainer)






button.addEventListener('click', function(e) {
   
    let grid = prompt('How many squares should each side of the grid have?')
    let totalSquares=grid*grid
    let divWidth=100/grid + '%'
    let divHeight=((100/grid)*(2/3)) +'%'
    console.log(grid)
    console.log(totalSquares)
    console.log(divWidth)
    console.log(divHeight)
    let i=1
    while (i<=totalSquares) {
        let squareDivs = document.createElement('div')
        squareDivs.style.backgroundColor='yellow' 
        squareDivs.style.display='inline-block'
        squareDivs.style.width=divWidth
        squareDivs.style.paddingTop=divHeight
        squareDivs.style.color='yellow'
        squareDivs.textContent='y'
        //squareDivs.style.paddingTop=divHeight
        //squareDivs.style.height=divWidth
        //squareDivs.style.margin='0'
        squareDivs.addEventListener('mouseover', function(e) {
            squareDivs.style.backgroundColor='blue'
            squareDivs.style.color='blue'
        });
        squareDivs.addEventListener("mouseout", function(e){
            squareDivs.style.backgroundColor='yellow' //make sure this is the same as before   
            squareDivs.style.color='yellow'
        });
        mainContainer.appendChild(squareDivs);
        
        
        i++;
    }
    
    

})





