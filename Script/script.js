const estoqueLocalKey = 'to-do-list-key'

function newTask() {
    let input = document.querySelector("#input-new-task");
    input.style.border = ''

    if(!input.value) {
        input.style.border = '1px solid red'
        alert('Insira uma task válida.');
    } else if(validateTaks()) {

        alert('Esta task já foi inserida na lista.')

    } else {
        let values = JSON.parse(localStorage.getItem(estoqueLocalKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(estoqueLocalKey, JSON.stringify(values))
        showTask();

    }
    input.value = ''
}

function showTask() {
    let values = JSON.parse(localStorage.getItem(estoqueLocalKey) || "[]")
    let list = document.querySelector("#to-do-list")
    list.innerHTML = ''

    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>
        ${values[i]['name']}
        
        <button id="ok-btn" class={botoes} onclick={removeItem("${values[i]['name']}")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
            </svg>
        </button>

        <button id="ok-btn" class={botoes} onclick={removeItem("${values[i]['name']}")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
            </svg>
        </button>

        <button id="ok-btn" class={botoes} onclick={removeItem("${values[i]['name']}")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
            </svg>
        </button>

        </li>`
    }
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(estoqueLocalKey) || "[]");
    let index = values.find( x => x.name === data);

    values.splice(index, 1);
    localStorage.setItem(estoqueLocalKey, JSON.stringify(values));

    showTask()

}

function validateTaks() {
    let inputValue = document.querySelector("#input-new-task").value;
    let values = JSON.parse(localStorage.getItem(estoqueLocalKey) || "[]");
    let exists = values.find( x => x.name === inputValue)

    return !exists ? false : true;
}

showTask();

document.addEventListener("keypress", (e) => {
    if(e.key === 'Enter') {
        newTask();
    }
})