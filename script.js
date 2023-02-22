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
            })
        )},
       
        addToken: (e) => {
            e.target.textContent = this.playerToken;
        },
        updateArray: (e) => {
            this.gameboardArray[e.target.getAttribute('id')] = this.playerToken;
        },
        updatePlayerToken: () => {
            this.playerToken === 'X' ? this.playerToken = 'O' : this.playerToken = 'X';
        }
    }
    game.init();
})()

// player objects factory?
    // const playerFactory = (userName) => {
    // return {}
    // }

// obj to control flow of game?
    // const gameplay = (function () {
    // })()


