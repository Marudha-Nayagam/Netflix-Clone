

getRandomColor = () => {
    return Math. floor(Math. random() * 256)
}

changeBackgroundColor = () => {
    let randomColor = `rgb( 
        ${ getRandomColor() },
        ${ getRandomColor() },
        ${ getRandomColor() } )`;
    console.log(randomColor)
    document. body. style. backgroundColor = randomColor
}

// document.addEventListener('click', changeBackgroundColor)

document.onclick = () => changeBackgroundColor()