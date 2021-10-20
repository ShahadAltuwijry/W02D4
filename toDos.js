console.log("to do list");

const body = document.querySelector("body");
const listTitle = document.createElement("h1");
listTitle.innerHTML = "to do list";

body.append(listTitle);

const ulList = document.createElement("ul");
ulList.id = "myList";
body.append(ulList);

let toDos = ["wake up  ", "eat breakfast  ", "code  "];

const deleteTask = (index) => {
  // solution 1
  toDos.splice(index, 1);
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
    ulList.append(newItem);

    // delete button

    const delBtn = document.createElement("button");
    delBtn.id = "#delBtn";
    delBtn.style.backgroundColor = "white";
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", () => deleteTask(i));
    newItem.append(delBtn);

    // update button

    const updBtn = document.createElement("button");
    // updBtn.id = i;
    updBtn.style.backgroundColor = "white";
    updBtn.innerHTML = "Update";
    updBtn.addEventListener("click", () => {
      updateListItem(i);
    });
    newItem.append(updBtn);
  }
};

renderList();

// 5. ------------------------

const input = document.createElement("input");
input.id = "myInput";
body.append(input);
input.placeholder = "Write A Task";

const button1 = document.createElement("button");
button1.id = "myBtn";
body.append(button1);
button1.innerHTML = "Add To List";
button1.style.backgroundColor = "lightBLue";

button1.addEventListener("click", function () {
  if (input.value.length) {
    toDos.push(input.value);
    renderList();
  }
});

// 6. ---------------------------
