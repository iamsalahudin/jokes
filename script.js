let jokebtn = document.querySelector('#jokebtn');
let ques = document.querySelector('#ques');
let ans = document.querySelector('#ans');

async function getfacts() {
    let response = await fetch('https://official-joke-api.appspot.com/random_joke');
    let data = await response.json();
    console.log(data);
    ques.textContent = data.setup;
    ans.textContent = data.punchline;
}
jokebtn.addEventListener('click', getfacts);
