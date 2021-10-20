console.log("to do list");

const body = document.querySelector("body");
const listTitle = document.createElement("h1");
listTitle.innerHTML = "to do list";

body.append(listTitle);

const ulList = document.createElement("ul");
ulList.id = "myList";
body.append(ulList);

const toDos = ["wake up", "eat breakfast", "code"];

const renderList = () => {
  ulList.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerHTML = toDos[i];
    ulList.append(newItem);

    // delete button

    const delBtn = document.createElement("button");
    delBtn.id = "#delBtn";
    delBtn.style.display = "block";
    delBtn.style.backgroundColor = "white";
    delBtn.innerHTML = "Delete";
    newItem.append(delBtn);
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

// 6. ----------------------------
