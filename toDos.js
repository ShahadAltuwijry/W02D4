console.log("to do list");

const body = document.querySelector("body");
body.classList.add("container");
const listTitle = document.createElement("h1");
listTitle.innerHTML = "to do list";
listTitle.className = "text-left";
body.append(listTitle);

const ulList = document.createElement("ul");
ulList.id = "myList";
// ulList.className.add = "d-flex justify-content-center";
body.append(ulList);

let toDos = ["wake up  ", "eat breakfast  ", "code  "];

// JSON.stringify(toDos);
localStorage.setItem("Tasks", JSON.stringify(toDos));
let retTasks = localStorage.getItem("Tasks");
console.log(toDos);
const deleteTask = (index) => {
  // solution 1
  toDos.splice(index, 1);
  localStorage.removeItem(index);
  renderList();
};
//solution 2
//   toDos = toDos.filter((todo, i) => i !== index);
//   renderList();

const updateListItem = (i) => {
  const newText = prompt("write the new task");
  toDos[i] = newText;
  renderList();
};

const renderList = () => {
  ulList.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const newItem = document.createElement("li");

    newItem.innerHTML = toDos[i];
    // newItem.className = "text-center";
    ulList.append(newItem);
    // delete button

    const delBtn = document.createElement("button");
    delBtn.id = "#delBtn";
    delBtn.style.backgroundColor = "white";
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", () => deleteTask(i));
    delBtn.className = "btn";
    delBtn.className = "btn-default btn-xs ";
    newItem.append(delBtn);

    // update button

    const updBtn = document.createElement("button");
    // updBtn.id = i;
    updBtn.style.backgroundColor = "white";
    updBtn.innerHTML = "Update";
    updBtn.addEventListener("click", () => {
      updateListItem(i);
    });
    updBtn.className = "btn";
    updBtn.className = "btn-primary btn-xs ";
    // updBtn.style.backgroundColor = "lightblue";
    newItem.append(updBtn);
  }
};

renderList();

// 5. ------------------------

const input = document.createElement("input");
input.id = "myInput";
// input.className = "text-center";
body.append(input);
input.placeholder = "Write A Task";

const button1 = document.createElement("button");
button1.id = "myBtn";
button1.innerText = "Add To List";
button1.className = "btn";
button1.className = "btn-primary";
body.append(button1);
button1.addEventListener("click", function () {
  if (input.value.length) {
    toDos.push(input.value);
    localStorage.setItem("newTasks", JSON.stringify(input.value));
    let retTasks = localStorage.getItem("newTasks");
    console.log(input.value);
    renderList();
  }
});

// 6. ---------------------------
