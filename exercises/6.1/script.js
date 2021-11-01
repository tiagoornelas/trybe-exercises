window.onload = function () {
    const sendButton = document.querySelector('button');
    const clearButton = document.querySelector('#clear');
    const ul = document.querySelector('ul');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        let name = document.createElement('li');
        name.innerHTML = document.querySelector('#name').value;
        ul.appendChild(name);

        let email = document.createElement('li');
        email.innerHTML = document.querySelector('#email').value;
        ul.appendChild(email);

        let cpf = document.createElement('li');
        cpf.innerHTML = document.querySelector('#cpf').value;
        ul.appendChild(cpf);

        let address = document.createElement('li');
        address.innerHTML = document.querySelector('#address').value;
        ul.appendChild(address);

        let city = document.createElement('li');
        city.innerHTML = document.querySelector('#city').value;
        ul.appendChild(city);
    })

    clearButton.addEventListener('click', function(){
        location.reload();
    })
}