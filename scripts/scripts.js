
$(document).ready(function () {
    
    console.log("JQ and JS");

    updateMonthlyTotal();

    $("#addButton").on("click", addEmployee);

    $("#tableBody").on("click", ".deleteButton", deleteEmployee);

});
let totalMonthlySalary = 0;

function addEmployee (event){
    $('#no-employees').remove();

    let employeeFirstName =$("#firstName").val();
    let employeeLastName =$("#lastName").val();
    let employeeID =Number($("#id").val());
    let employeeTitle =$("#title").val();
    let employeeAnnualSalary= Number($("#annualSalary").val());
    

    console.log(employeeFirstName, employeeLastName,employeeID,employeeTitle, employeeAnnualSalary)

    $("#tableBody").append(`
        <tr>
            <td>${employeeFirstName}</td>
            <td>${employeeLastName}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${employeeAnnualSalary}</td>
            <td><button class="deleteButton"> Delete</button></td>
            <br/>
            <br/>
            <br/>
         </tr>   
    `);

    totalMonthlySalary += employeeAnnualSalary;
    updateMonthlyTotal();

    $("#firstName").val("");
    $("#lastName").val("");
    $("#id").val("");
    $("#title").val("");
    $("#annualSalary").val("");
    
}

   function updateMonthlyTotal() {
    let monthlyTotal = totalMonthlySalary /12;
    $("#totalMonthlySalary").text(monthlyTotal);

    if (monthlyTotal > 20000) {
        $("#totalMonthlySalary").css("color", "red");
    }

   }

function deleteEmployee (event){
    $(event.target).closest('tr').remove()
}
