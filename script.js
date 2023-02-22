const gameboard = (function () {
    let playerToken = 'X';
    let gameboardArray = [
        '', '', '', '', '', '', '', '', ''
    ]
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.addEventListener('click', el => {
        let cellNum = el.target.getAttribute('id')
        if (el.target.textContent !== '') {
            return
        }
        el.target.textContent = playerToken;
        gameboardArray[cellNum] = playerToken;
        playerToken === 'X' ? playerToken = 'O' : playerToken = 'X';
    })
    )

   
    return {
        gameboardArray,
        }
})()

// player objects factory?
const playerFactory = (userName) => {
return {}
}

// obj to control flow of game
const gameplay = (function () {
})()


