const mainContainer = document.getElementById(mainContainer)

const buttonContainer = document.createElement('div')
mainContainer.appendChild(buttonContainer)
buttonContainer.style.width='100%'
buttonContainer.style.textAlign='center'

const button = document.createElement('button')
buttonContainer.appendChild(button)
button.textContent='Reset'

const sketchContainer = document.createElement('div')
sketchContainer.style.backgroundColor ='pink'
mainContainer.appendChild(sketchContainer)





let squareDivs
let grid


function createSquares (grid) {
    let i=1
    let totalSquares=grid*grid
    let divWidth=100/grid + '%'
    console.log(grid)
    console.log(totalSquares)
    console.log(divWidth)
    while (i<=totalSquares) {
        let squareDivs = document.createElement('div')
        squareDivs.style.backgroundColor='yellow' 
        squareDivs.style.display='inline-block'
        squareDivs.style.width=divWidth
        //squareDivs.style.paddingTop=divWidth
        squareDivs.style.color='blue'//change this color to see each block
        squareDivs.textContent=i //numbers each div
        squareDivs.addEventListener('mouseover', function(e) {
            squareDivs.style.backgroundColor='blue'
            squareDivs.style.color='blue'
        });
        sketchContainer.appendChild(squareDivs);
        i++;
    };
};
createSquares(5);


button.addEventListener('click', function(e) {
    grid = prompt('How many squares should each side of the grid have?')
    createSquares(grid);
});





