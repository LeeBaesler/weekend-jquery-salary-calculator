$(onReady);



function onReady(){
    console.log("JQ and JS");

   const totalSalary = [];
    

    clickHandlers ();
}
function addEmployee (){
    let employeeFirstName =$("#firstName").val();
    let employeeLastName =$("#lastName").val();
    let employeeID =Number($("#id").val());
    let employeeTitle =$("#title").val();
    let employeeAnnualSalary=Number($("#annualSalary").val());
console.log(employeeFirstName, employeeLastName,employeeID,employeeTitle, employeeAnnualSalary)


    $("#tableBody").append(`
        <tr>
            <td>${employeeFirstName}</td>
            <td>${employeeLastName}</td>
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

   $("#totalSalary").append(`
   <h3>${employeeAnnualSalary}</h3>
    `) 
    }

function deleteEmployee (event){
    $(event.target).closest('tr').remove()
}

function clickHandlers (){
   
    $("#addButton").on("click", addEmployee)

    $("#tableBody").on("click", ".deleteButton", deleteEmployee)

}

