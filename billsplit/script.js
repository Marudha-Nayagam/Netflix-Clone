
split=() =>{
    let amount = document.getElementById("amount")
    let person = document.getElementById("person")
    if(person.value == 0){
        alert("Please enter atleast one person")
    }else{
        let result = amount.value / person.value
        document.getElementById("result").innerText = result.toFixed(0)
    }
}