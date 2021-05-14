const form = document.querySelector("form");
const list = document.querySelector("ul");

form.onsubmit = (e) => {
  //prevents page from refreshing
  e.preventDefault();
  //gets user input value
  const inputValue = document.getElementById("note").value;
  //adding user inputs onto the list
  const newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode(inputValue));
  list.appendChild(newItem);
  //empties the search query
  inputValue.value = "";
};
