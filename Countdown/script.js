let count = 0
let button = document.getElementById("counterButton")
let counterDisplay = document.getElementById("count")

// button.addEventListener("click", () =>{
//     count++;
//     counterDisplay.innerHTML = count;
// })

button.onclick = function(){
    count++;
    counterDisplay.innerHTML = count

    console.log(count)
}