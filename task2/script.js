

let color = document. getElementById("color");

getRandomColor = () => {
return Math. floor(Math. random() * 256);
};

changeBackgroundColor = () => {
let radomColor = `rgb( ${ getRandomColor() },${ getRandomColor() },${ getRandomColor() } )`;
document. body. style. backgroundColor = radomColor
}

document.addEventListener('click', changeBackgroundColor)