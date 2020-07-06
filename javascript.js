const body = document.querySelector('body')

const mainContainer = document.createElement('div')
mainContainer.style.backgroundColor ='pink'
mainContainer.style.width='100%'
mainContainer.style.height='100%'
body.appendChild(mainContainer)


let i=1
let grid=16
let totalSquares = grid*grid
let divWidth=100/grid + '%'
let divHeight=((100/grid)*(2/3)) +'%'
console.log(divWidth)
console.log(divHeight)


while (i<=totalSquares) {
    const squareDivs = document.createElement('div')
    squareDivs.style.backgroundColor='yellow' 
    squareDivs.style.display='inline-block'
    squareDivs.style.width=divWidth
    squareDivs.style.paddingTop=divHeight
    squareDivs.textContent=i
    squareDivs.addEventListener('mouseover', function(e) {
        squareDivs.style.backgroundColor='blue'
    });
    squareDivs.addEventListener("mouseout", function(e){
        squareDivs.style.backgroundColor='yellow' //make sure this is the same as before
        
    });
    mainContainer.appendChild(squareDivs);
    i++;
}

