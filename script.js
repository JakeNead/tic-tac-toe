(function () {

    const game = {
        playerToken: 'X',
        gameboardArray: ['', '', '', '', '', '', '', '', ''],
        init: function() {
            this.cacheDom()
            this.bindEvents()
        },
        cacheDom: function() {
            this.cells = document.querySelectorAll('.cell')
            this.playerOne = document.querySelector('#pOne')
            this.playerTwo = document.querySelector('#pTwo')
        },
        bindEvents: function() {
            this.cells.forEach(c => c.addEventListener('click', el => {
                if (el.target.textContent !== '') {
                    return
                }
                this.addToken(el)
                this.updateArray(el)
                this.updatePlayerToken(el)
                this.checkForWinner(el)
            })
        )},
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
                    return this.winner('X')
                } else if (
                    this.gameboardArray[wins[i][0]] === 'O' && 
                    this.gameboardArray[wins[i][1]] === 'O' && 
                    this.gameboardArray[wins[i][2]] === 'O')
                    return this.winner('O')
        }},
        winner: function (char) {
            console.log(`The winner is ${char}`)
        }
    }
    game.init();
    return game.gameboardArray
})()

// player objects factory?
    // const playerFactory = (userName) => {
    // return {}
    // }

// obj to control flow of game?
    // const gameplay = (function () {
    // })()