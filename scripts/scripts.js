$(onReady);

let annualSalary = [];

function onReady(){
    console.log("JQ and JS");

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
        </tr>
    `);
    $("#firstName").val("");
    $("#lastName").val("");
    $("#id").val("");
    $("#title").val("");
    $("#annualSalary").val("");

    $('#annualSalary').append(
        `<h3>Add multiple:</h3>
        <input id="annualSalary" placeholder="Quantity"/>
        <input id="colorIn" placeholder="Color"/>
        <button id="addMultiple">Add Multiple</button>
        <br/>
        <br/>`)

        $('#addMultiple').on('click', ()=>{
            let annualSalary = $('#quantityIn').val();
            let colorIn = $('#colorIn').val();
            $('#quantityIn').val('');
            $('#colorIn').val('');
            addMultiple(quantIn, colorIn);
        })

    }
    

function deleteEmployee (event){
    $(event.target).closest('tr').remove()
}

function clickHandlers (){
   
    $("#addButton").on("click", addEmployee)

    $("#tableBody").on("click", ".deleteButton", deleteEmployee)

}