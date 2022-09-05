$(onReady);

function onReady(){
    
    console.log("JQ and JS");

    clickHandlers ();

    

}
const totalSalary = [];

function addEmployee (){
    let employeeFirstName =$("#firstName").val();
    let employeeLastName =$("#lastName").val();
    let employeeID =Number($("#id").val());
    let employeeTitle =$("#title").val();
    let employeeAnnualSalary=$("#annualSalary").val();

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

const completeSalary = {

    employeeAnnualSalary: employeeAnnualSalary,
}

totalSalary.push(completeSalary)
console.log(`there are now ${totalSalary.length} annual`);

for (let i=0; i<totalSalary.length; i++) {
    console.log(`showing`, totalSalary[i]);
    $("#totalSalary").append(`${totalSalary[i].employeeAnnualSalary}`)
}

}


function deleteEmployee (event){
    $(event.target).closest('tr').remove()
}

function clickHandlers (){
   
    $("#addButton").on("click", addEmployee)

    $("#tableBody").on("click", ".deleteButton", deleteEmployee)

}

