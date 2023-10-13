const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let todos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function delFilter(item,id) {
    return item.id !== id;
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    console.log(todos);
    saveToDos();
}

function addTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    li.classList.add("list-group-item");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-outline-danger");
    btn.innerText = "X";
    btn.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    console.log(newTodoObj);
    console.log(todos);
    addTodo(newTodoObj);
    todos.push(newTodoObj);
    
    saveToDos();
}

toDoForm.addEventListener("submit", todoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    
    parsedTodos.forEach((item) => {
        addTodo(item);
    });
}