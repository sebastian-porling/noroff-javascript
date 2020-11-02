const todosElement = document.getElementById("todos");
const textInput = document.getElementById("text");

/**
 * Adds a todo entry if entry is not empty
 */
function addTodo() {
    const text = getInput();
    if (text !== "") {
        todosElement.appendChild(generateTodoElement(text));
    }
}

/**
 * Gets input from the input box
 * @returns a string
 */
function getInput() {
    const text = textInput.value;
    textInput.value = "";
    return text;
}

/**
 * Removes the checkbox from the todo list
 * @param {HTMLElement} element
 */
function removeTodo(element) {
    const todo = element.parentNode.parentNode.parentNode;
    setTimeout(() => {
        todosElement.removeChild(todo);
    }, 500);
}

/**
 * Generates a todo checkbox element
 * @param {String} text
 * @return todo checkbox element
 */
function generateTodoElement(text) {
    const element = `
    <div class="checkbox">
        <label>
        <input type="checkbox" onclick="removeTodo(this)"> 
        <span class="checkbox-decorator">
            <span class="check"></span>
        </span>
            ${text}
        </label>
    </div>`;
    const div = document.createElement("span");
    div.setAttribute("class", "bmd-form-group is-filled");
    div.innerHTML = element;
    return div;
}
