$(onReady);

function onReady(){
    console.log("JQ and JS");

    clickHandlers ();
}

function clickHandlers (){
   
    $("#addButton").on("click", addEmployee)

    $("#tableBody").on("click", ".deleteButton", deleteEmployee)

    $("#clearButton").on("click", clearAllEmployees);
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
        <td><button class="deleteButton"> Delete</button></td>
    </tr>
`);
$("#firstName").val("");
$("#lastName").val("");
$("#id").val("");
$("#title").val("");
$("#annualSalary").val("");
}

function deleteEmployee (event){
    $(event.target).closest('tr').remove()
}

function clearAllEmployees (){
    $("#tableBody").empty()
}