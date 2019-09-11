// Get Input element
const filterInput = document.querySelector("#filterInput");

// Add event Listner to Input Element
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // Get Input value
  const filterValue = filterInput.value.toUpperCase();

  // Get names ul
  const ul = document.querySelector("#names");
  // Get li from ul
  const liList = ul.querySelectorAll("li.collection-item");

  // loop throug colletion-item lis
  liList.forEach(li => {
    const a = li.querySelector("a");
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}
