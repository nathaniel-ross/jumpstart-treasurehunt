const resetGame = () => {
    const cells = document.getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        document.getElementById(i).innerHTML = "?";
    }
}

const treasure = (id) => {
    const randomNum = Math.floor(Math.random() * 4)

    if(randomNum === 0){
        document.getElementById(id).innerHTML = "🏆"
        document.getElementById("display-msg").innerHTML = "You got one!"
        return
    } else if (randomNum === 1) {
        document.getElementById(id).innerHTML = "💀"
        document.getElementById("display-msg").innerHTML = "You LOSE"
        return setTimeout(resetGame, 1000)
        return resetGame()
    } else {
        document.getElementById(id).innerHTML = "🤨"
        document.getElementById("display-msg").innerHTML = "Keep playing"
        return
    }
}
