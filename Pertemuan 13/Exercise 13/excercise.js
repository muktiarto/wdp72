// Function to add a new student
function addStudent() {
    // Get input values
    const newName = document.getElementById("add-name").value;
    const newAddress = document.getElementById("add-addres").value;

    // Get existing students from localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Create a new student object
    const newStudent = {
        name: newName,
        address: newAddress
    };

    // Add the new student to the array
    students.push(newStudent);

    // Save the updated students array back to localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Clear input fields
    document.getElementById("add-name").value = "";
    document.getElementById("add-addres").value = "";

    // Display the updated list of students
    displayStudents();
}

// Function to display students
function displayStudents() {
    // Get the container where the student list will be displayed
    const listContainer = document.getElementById("list-students");

    // Get students from localStorage
    const students = JSON.parse(localStorage.getItem("students")) || [];

    // Clear previous content
    listContainer.innerHTML = "";

    // Check if there are any students
    if (students.length === 0) {
        listContainer.innerHTML = "<p>No students added yet.</p>";
        return;
    }

    // Create a list to display students
    const ul = document.createElement("ul");
    ul.classList.add("list-group");

    // Loop through the students array and create list items
    students.forEach((student, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `<strong>${student.name}</strong> - ${student.address}`;
        ul.appendChild(li);
    });

    // Append the list to the container
    listContainer.appendChild(ul);
}




// Display students when the page loads
displayStudents();

