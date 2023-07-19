function ongetacall(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;


//Storing Data

    user = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time
    }
    let key = document.getElementById('email').value;
    let uesrJSON = JSON.stringify(user);
    localStorage.setItem(key,uesrJSON);
    showUserOnScreen(user)
}

function showUserOnScreen(user){
    let parentElement = document.getElementById('listOfItems');
    let childElement = document.createElement('li');
    childElement.textContent = user.name+ '-' + user.email+ '-' + user.phone + '-' + user.date + '-' + user.time;
    parentElement.appendChild(childElement);
}
