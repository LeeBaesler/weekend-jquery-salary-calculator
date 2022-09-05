$(onReady);



function onReady(){
    console.log("JQ and JS");

    const totalSalary = [];

    clickHandlers ();
}
function addEmployee (){
    let employeeFirstName =$("#firstName").val();
    let employeeLastName =$("#lastName").val();
    let employeeID =$("#id").val();
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
            <br/>
            <br/>
            <br/>
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

function clickHandlers (){
   
    $("#addButton").on("click", addEmployee)

    $("#tableBody").on("click", ".deleteButton", deleteEmployee)

}

function formSubmitHandler(){
    let annualSalary = $("#totalSalary").val(); 
}