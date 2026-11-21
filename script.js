let tokenNumber = 1;
let totalWaiting = 0;

function addPatient() {

    let name = document.getElementById("patientName").value;
    let department = document.getElementById("department").value;

    if (name === "" || department === "") {
        alert("Please enter patient name and select department!");
        return;
    }

    let table = document.getElementById("queueTable");

    let row = table.insertRow();

    row.insertCell(0).innerText = "Q" + tokenNumber;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = department;
    row.insertCell(3).innerText = "Waiting";
    let actionCell = row.insertCell(4);

let removeButton = document.createElement("button");

removeButton.innerText = "Remove";

removeButton.onclick = function() {
    removePatient(this);
};

actionCell.appendChild(removeButton);

    tokenNumber++;
    totalWaiting++;

    document.getElementById("totalPatients").innerText = totalWaiting;

    document.getElementById("patientName").value = "";
    document.getElementById("department").value = "";

    alert("Patient added successfully!");
}
function callNextPatient() {

    let table = document.getElementById("queueTable");
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {

        let status = rows[i].cells[3].innerText;

        if (status === "Waiting") {

            rows[i].cells[3].innerText = "Called";

            totalWaiting--;

            document.getElementById("totalPatients").innerText = totalWaiting;

            alert("Calling " + rows[i].cells[1].innerText);

            return;
        }
    }

    alert("No patients are waiting!");
}
function removePatient(button) {

    let row = button.parentElement.parentElement;

    let status = row.cells[3].innerText;

    if (status === "Waiting") {
        totalWaiting--;

        document.getElementById("totalPatients").innerText = totalWaiting;
    }

    row.remove();
}