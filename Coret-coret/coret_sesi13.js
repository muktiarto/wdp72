// Function to add a new name
function addStudent() {
    const newName = document.getElementById("add-name").value;
  
    let names = JSON.parse(localStorage.getItem("names"));
  
    if (names) {
        names.push({
            id: names.length > 0 ? names[names.length - 1].id + 1 : 0,
            name: newName,
            checked: false,
        });
    } else {
        names = [
            {
                id: 0,
                name: newName,
                checked: false,
            },
        ];
    }
  
    localStorage.setItem("names", JSON.stringify(names));
  
    document.getElementById("add-name").value = "";
  
    displayStudent();
}


// Function to display names
function displayNames() {
    const names = JSON.parse(localStorage.getItem("names"));
  
    let list = "";
  
    if (names) {
        for (let i = 0; i < names.length; i++) {
            list += `
                <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                    <li class="list-group-item d-flex align-item-center">
                        <div class="form-check">
                            <input type="checkbox" name="" id="${names[i].id}" class="form-check-input" ${names[i].checked ? "checked" : ""} onchange="setComplete(this.checked, this.id)">
                        </div>
                    </li>
                    <li class="list-group-item d-flex align-item-center flex-grow-1">
                        <p class="lead fw-normal mb-0">${names[i].name}</p>
                    </li>
                    <li class="list-group-item d-flex align-item-center flex-grow-1">
                        <button class="btn btn-danger" onclick="deleteName                                              (${names[i].id})">Delete</button>
                    </li>
                </ul>
            `;
        }
    }
  
    document.getElementById("list-students").innerHTML = list;
}

// Initial display of name when the page loads
displayNames();