let custInput = 0;

// Add event listener for add workout button
document.getElementById("add").addEventListener("click", () => {

    // Create new row in the table
    let table = document.getElementById("workout-table");
    let row = table.insertRow(1);
    row.setAttribute("custInput",`item-${custInput}`);
    row.insertCell(0).innerHTML = document.getElementById("startTimeInput").value;
    row.insertCell(1).innerHTML = document.getElementById("endTimeInput").value;
    row.insertCell(2).innerHTML =`${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(3).innerHTML = document.getElementById("workoutType").value;
    row.insertCell(4).innerHTML = document.getElementById("bodyPart").value;
    row.insertcell(5).innerHTML = document.getElementById("category").value;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
 
})


function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = custInput;
    btn.innerHTML ='Delete';
    btn.onclick = () => {
        console.log(`Deleting row with Customer Input: item-${custInput}`);
        let elementToDelete = document.getElementById(`item-${custInput}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

