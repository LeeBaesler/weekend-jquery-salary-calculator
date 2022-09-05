$(onReady);

function onReady(){
    
    console.log("JQ and JS");

    clickHandlers ();

    

}
let totalMonthlySalary = [];

function addEmployee (){
    let employeeFirstName =$("#firstName").val();
    let employeeLastName =$("#lastName").val();
    let employeeID =Number($("#id").val());
    let employeeTitle =$("#title").val();
    let employeeAnnualSalary=$("#annualSalary").val();
    let workingSalary = totalMonthlySalary *12;

    totalMonthlySalary.($("#totalMonthlySalary").text(`${totalMonthlySalary}`));
    

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

    
}

totalMonthlySalary.push(completeSalary)
console.log(`there are now ${totalMonthlySalary.length} annual`);

for (let i=0; i<totalMonthlySalary.length; i++) {
    console.log(`showing`, totalMonthlySalary[i]);
    $("#totalSalary").append(`${totalMonthlySalary[i].employeeAnnualSalary}`)
}

}


function deleteEmployee (event){
    $(event.target).closest('tr').remove()
}

function clickHandlers (){
   
    $("#addButton").on("click", addEmployee)

    $("#tableBody").on("click", ".deleteButton", deleteEmployee)

}

