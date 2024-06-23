const input = document.querySelector('#task__input');
const button = document.querySelector('.tasks__add');
const list = document.querySelector('.tasks__list');
let tasks = [];

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  renderTasks();
}

function clickButton(e) {
  e.preventDefault();
  addTodo();
}

function addTodo() {
  const task = document.createElement('div');
  task.classList.add('task');
  const title = document.createElement('div');
  title.classList.add('task__title');
  title.innerText = input.value;
  task.appendChild(title);
  const trashbutton = document.createElement("a");
  trashbutton.innerHTML = '&times;';
  trashbutton.classList.add("task__remove");
  task.appendChild(trashbutton);

  tasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  if (input.value.trim() === '') return;
  list.appendChild(task);
  input.value = '';
}

function deleteItem(e) {
  const item = e.target;
  if (item.classList[0] === 'task__remove') {
    const todolist = item.parentElement;
    todolist.remove();
    const taskText = todolist.querySelector('.task__title').innerText;
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function renderTasks() {
  list.innerHTML = '';
  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    const title = document.createElement('div');
    title.classList.add('task__title');
    title.innerText = task;
    taskElement.appendChild(title);
    const trashbutton = document.createElement("a");
    trashbutton.innerHTML = '&times;';
    trashbutton.classList.add("task__remove");
    taskElement.appendChild(trashbutton);
    list.appendChild(taskElement);
  });
}
button.addEventListener('click', clickButton);
list.addEventListener('click', deleteItem);