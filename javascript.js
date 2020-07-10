

const button = document.getElementById('resetButton')
const sketchContainer = document.getElementById('sketchContainer')


let squareDivs
let grid


function createSquares (grid) {
    let i=1
    let totalSquares=grid*grid
    let divWidth=500/grid + 'px' //500px is size of sketchContainer
    console.log(grid)
    console.log(totalSquares)
    console.log(divWidth)
    while (i<=totalSquares) {
        let squareDivs = document.createElement('div')
        squareDivs.style.backgroundColor='yellow' 
        squareDivs.style.display='inline-block'
        squareDivs.style.width=divWidth
        squareDivs.style.height=divWidth
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
    let grid = prompt('How many squares should each side of the grid have?')
    createSquares(grid);
});



