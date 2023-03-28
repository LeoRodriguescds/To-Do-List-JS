const estoqueLocalKey = 'to-do-list-key'

function newTask() {
    let input = document.querySelector("#input-new-task");

    if(!input.value) {
        alert('Insira uma task válida.');
    } else {
        let values = JSON.parse(localStorage.getItem(estoqueLocalKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(estoqueLocalKey, JSON.stringify(values))
    }
}

document.addEventListener("keypress", (e) => {
    if(e.key === 'Enter') {
        newTask();
    }
})