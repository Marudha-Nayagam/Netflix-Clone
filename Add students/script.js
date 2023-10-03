let users = []
addUser = () => {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let currentUser = {
        name : name.value,
        email: email.value
    }
    users.push(currentUser)
    console.log(currentUser)
    
}
name = ""
    email = ""