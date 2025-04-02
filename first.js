let input = document.getElementById(`input`);
let button = document.querySelectorAll(`button`);

button.forEach(element => {
    element.addEventListener(`click`, (event) => {
        console.log(event.target.textContent);

        if(event.target.textContent === `AC`) {
            input.innerText = ``;
        } 
        else if(event.target.textContent === `<`) {
            input.innerText = input.innerText.slice(0,-1);
        }
        else if(event.target.innerText === `=`) {
            input.innerText = eval(input.innerText);
        }
        else {
            input.innerText += event.target.textContent;
        }
    });
});