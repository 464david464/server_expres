const btns = document.querySelectorAll("button");
const container = document.querySelector("#container");
console.log(btns);

//view
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    switch (e.target.id) {
      case "create":
        createFN();
        break;

      case "read":
        readFn();
        break;

      case "update":
        updateFn();
        break;

      case "delete":
        deleteFn();
        break;

      default:
        break;
    }
  });
}

function createFN() {
  container.innerHTML = `
    <form id="f">
    <label for="name">name</label>
    <input type="text" name="name">
    
    <label for="id">ID number</label>
    <input type="number" name="id">
    
    <label for="age"> Age</label>
    <input type="number" name="age">
    <button type="submit" id="POST" class="btn">add student</button>
    </form>`;
}

function readFn() {
  container.innerHTML = `
     <table>
        <thead>
            <tr>
                <th>name</th>
                <th>ID</th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>`;
}

function updateFn() {
  container.innerHTML = `
    <form id="f">
    <label for="name">student name for update</label>
    <input type="text" name="name">
    
    <button type="submit" id="PUT" class="btn">add student</button>
    </form>`;
}

function deleteFn() {
  container.innerHTML = `
    <form id="f">
    <label for="name">student name for delete</label>
    <input type="text" name="name">

    <button type="submit" id="DELETE" class="btn">add student</button>
</form>`;
}

//logic
const getBtn = document.querySelector('#read');
console.log(getBtn);
getBtn.addEventListener('click', () => {
    fetch('/api/students')
})

document.addEventListener("submit", (e) => {
  const btn = document.querySelector('.btn');
  e.preventDefault();

    console.log(btn.id);
    fetchFn(btn.id)
});

function fetchFn(method) {
  const form = document.querySelector("#f");
    const formToJson = {};
    const data = new FormData(form);
  
    for (let [key, value] of data.entries()) {
      formToJson[key] = value;
    }

    console.log(formToJson);
    fetch("/api/students", {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formToJson),
      });
}