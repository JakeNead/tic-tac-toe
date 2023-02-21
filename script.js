// gameboard module to init the gameboard

const gameboard = (function () {
    let gameboardArray = [
        'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'
    ]
    // render the gamboard array on the DOM
    const cells = document.querySelectorAll('.cell')
    const renderBoard = (cells) => {
        for (let i=0; i<cells.length; i++) {
            cells[i].textContent = gameboardArray[i]
        }
    }
    renderBoard(cells)
    return {
        renderBoard,
    }
})()

// player objects factory?
const playerFactory = (userName) => {
return {}
}

const gameplay = (function () {
})()
// obj to control flow of game

