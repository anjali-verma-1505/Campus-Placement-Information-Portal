function searchCompany() {
    var input = document.getElementById("searchInput").value.toUpperCase();
    var table = document.getElementById("companyTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var companyCol = rows[i].getElementsByTagName("td")[0];
        if (companyCol) {
            var textValue = companyCol.textContent || companyCol.innerText;
            if (textValue.toUpperCase().indexOf(input) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function resetTable() {
    document.getElementById("searchInput").value = "";
    var table = document.getElementById("companyTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = "";
    }
}

function applyDrive(companyName) {
    alert("You have applied for the " + companyName + " placement drive! Make sure you have completed registration below.");
}

function registerStudent() {
    var name = document.getElementById("studentName").value;
    var roll = document.getElementById("rollNo").value;
    var branch = document.getElementById("branch").value;
    var cgpa = document.getElementById("cgpa").value;
    var email = document.getElementById("email").value;
    var msgBox = document.getElementById("form-message");

    if (name == "" || roll == "" || cgpa == "" || email == "") {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Error: Please fill in all the fields before submitting.";
        return;
    }

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        msgBox.style.color = "red";
        msgBox.innerHTML = "Error: Please enter a valid CGPA between 0 and 10.";
        return;
    }

    msgBox.style.color = "green";
    msgBox.innerHTML = "Success! Thank you, " + name + " (" + roll + " - " + branch + "). Your placement profile has been recorded.";
}