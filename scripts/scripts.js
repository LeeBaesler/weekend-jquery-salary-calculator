$(onReady);

function onReady(){
    console.log("JQ and JS");

    clickHandlers ();
}

function clickHandlers (){
    $("#addButton").on("click", addEmployee)
}
function addEmployee (){
const employeeFirstName =$("#firstName").val();
const employeeLasttName =$("#lastName").val();
const employeeID =$("#id").val();
const employeeTitle =$("#title").val();
const employeeAnnualSalary=$("#annualSalary").val();

$("#tableBody").append(`
    <tr>
        <td>${employeeFirstName}</td>
        <td>${employeeLasttName}</td>
        <td>${employeeID}</td>
        <td>${employeeTitle}</td>
        <td>${employeeAnnualSalary}</td>
        <td><button id="deleteButton"> Delete</button></td>
    </tr>
`)
}