// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".
let buttonListener = document.getElementsByClassName('first')[0];
buttonListener.addEventListener('click', function () {
    let text = document.getElementById('text');
    text.style.display = 'none';
});


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let task2 = document.getElementById('task2');
task2.onclick = function () {
    task2.style.display = 'none';
};


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let task3 = document.getElementById('task3');
task3.onclick = function () {
    let test = document.forma1.input.value;
    if (+test < 18) {
        alert('вам менше 18 років!');
    } else {
        alert('все ок');
    }
};


// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementById('menu');
menu.onclick = function () {
    menu.classList.toggle('display');
};


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem2 ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem3 ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem4 ipsum dolo sit ameti'},
    {title: 'lorem5', body: 'lorem5 ipsum dolo sit ameti'},
];
for (const comment of comments) {
    let divComment = document.createElement('div');
    let title = document.createElement('div')
    title.innerText = comment.title;
    let button = document.createElement('button');
    button.innerText = 'comment';
    let body = document.createElement('div');
    body.innerText = comment.body;
    button.addEventListener('click', function () {
        body.classList.toggle('display');
    });

    divComment.append(title,body,button);
    document.body.append(divComment);
}