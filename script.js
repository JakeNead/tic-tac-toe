(function () {
    const game = {
        playerToken: 'X',
        gameboardArray: ['', '', '', '', '', '', '', '', ''],
        gameOver: false,
        init: function() {
            this.cacheDom()
            this.bindEvents()
        },
        cacheDom: function() {
            this.cells = document.querySelectorAll('.cell')
            this.reset = document.querySelector('.reset')
            this.playerOne = document.querySelector('#pOne')
            this.playerTwo = document.querySelector('#pTwo')
        },
        bindEvents: function() {
            this.cells.forEach(c => c.addEventListener('click', el => {
                if (el.target.textContent !== '' || this.gameOver === true) {
                    return
                }
                this.addToken(el)
                this.updateArray(el)
                this.updatePlayerToken(el)
                this.checkForWinner(el)
            })
            )
            this.reset.addEventListener('click', el => {
                this.resetCells(el),
                this.resetGameboardArray(el),
                this.removeResult(el),
                this.gameOver = false,
                this.playerToken = 'X'
            })
        },

        addToken: function (e) {
            e.target.textContent = this.playerToken;
        },
        updateArray: function (e) {
            this.gameboardArray[e.target.getAttribute('id')] = this.playerToken;
        },
        updatePlayerToken: function () {
            this.playerToken === 'X' ? this.playerToken = 'O' : this.playerToken = 'X';
        },
        checkForWinner: function () {
            const wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
            for (let i=0; i<8; i++) {
                if (this.gameboardArray[wins[i][0]] === 'X' && 
                    this.gameboardArray[wins[i][1]] === 'X' && 
                    this.gameboardArray[wins[i][2]] === 'X') {
                    this.gameOver = true
                    return this.displayResult('X')
                } else if (
                    this.gameboardArray[wins[i][0]] === 'O' && 
                    this.gameboardArray[wins[i][1]] === 'O' && 
                    this.gameboardArray[wins[i][2]] === 'O') {
                    this.gameOver = true
                    return this.displayResult('O')
                } else if (this.gameboardArray.filter(cell => cell === '').length === 0) {
                    return this.displayResult('tie')
                }
        }},
        displayResult: function (char) {
            if (char === 'tie'){
                return this.playerTwo.setAttribute('class', 'tie')
            } else if (char === 'X')
                {this.playerOne.setAttribute('class', 'winnerOne')}
            else {this.playerTwo.setAttribute('class', 'winnerTwo')}
            },
        resetCells: function () {
            this.cells.forEach(e => e.textContent = '')
        },
        resetGameboardArray: function () {
            this.gameboardArray = ['', '', '', '', '', '', '', '', '']

        },
        removeResult: function () {
            this.playerOne.removeAttribute('class', 'winnerOne')
            this.playerTwo.removeAttribute('class', 'winnerTwo')
            this.playerTwo.removeAttribute('class', 'tie')
        }
    }
    game.init();

})()

// add reset button logic
// psuedo element "you win" notification
// minmax AI?

// player objects factory?
    // const playerFactory = (userName) => {
    // return {}
    // }

// obj to control flow of game?
    // const gameplay = (function () {
    // })()