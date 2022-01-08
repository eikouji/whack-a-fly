
const squares = document.querySelectorAll('.square')
const houseFly = document.querySelectorAll('.houseFly')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector 


let result = 0
let hitPosition
let currentTime = 60
let timerId = null




function randomSquare() {
    squares.forEach(squares => {
        squares.classList.remove('houseFly')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)] 
      randomSquare.classList.add('houseFly') 

  hitPosition = randomSquare.id

}

squares.forEach(id => {
    id.addEventListener('mousedown', () => {
        if(squares.id === hitPosition) {
            result++
            score.textContext = result
            hitPosition = null
        }
    })
})

function moveHouseFly() {
    timerId = setInterval(randomSquare, 1500)
}

moveHouseFly()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('TIME IS UP! Your final score is: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)

