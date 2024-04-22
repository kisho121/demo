function displayButton() {
    var flag = true;

    // Validate Name
    var nameInput = document.getElementById('givenName').value.trim();
    if (nameInput === '') {
        document.getElementById('errorName').textContent = 'Name is required';
        flag = false;
    } else {
        document.getElementById('errorName').textContent = '';
    }

    // Validate DOB
    var dobInput = document.getElementById('giveDob').value.trim();
    if (dobInput === '') {
        document.getElementById('errorDate').textContent = 'Date of Birth is required';
        flag = false;
    } else {
        document.getElementById('errorDate').textContent = '';
    }

    // Validate Phone Number
    var phoneInput = document.getElementById('givenPhoneNo').value.trim();
    if(phoneInput.trim()===''||parseInt(phoneInput.trim())<6000000000|| parseInt(phoneInput.trim())>9999999999){
        document.getElementById('errorPhone').textContent = 'Valid Phone Number is required';
        flag = false;
    } else {
        document.getElementById('errorPhone').textContent = '';
    }

    // Validate Marks
    markValidation('gradeMarkTamil', 'errorMark1', 0, 35, 100);
    markValidation('gradeMarkEnglish', 'errorMark2', 0, 35, 100);
    markValidation('gradeMarkMaths', 'errorMark3', 0, 35, 100);
    markValidation('gradeMarkScience', 'errorMark4', 0, 35, 100);
    markValidation('gradeMarkSocial', 'errorMark5', 0, 35, 100);

    if (flag) {
        showResults();
    }
}

function markValidation(markId, errorId, min, passMark, max) {
    let input = document.getElementById(markId).value.trim();
    if(input.trim()==='' || parseInt(input.trim())>max){
        flag=false;
        document.getElementById(errorId).textContent="Enter ur real mark"
    }
    else{
        document.getElementById(errorId).textContent=''
    }

}
function showResults() {
    var nameInput = document.getElementById('givenName').value.trim();
    var dobInput = document.getElementById('giveDob').value.trim();
    var phoneInput = document.getElementById('givenPhoneNo').value.trim();
    var tamil = parseInt(document.getElementById('gradeMarkTamil').value) || 0;
    var english = parseInt(document.getElementById('gradeMarkEnglish').value) || 0;
    var maths = parseInt(document.getElementById('gradeMarkMaths').value) || 0;
    var science = parseInt(document.getElementById('gradeMarkScience').value) || 0;
    var social = parseInt(document.getElementById('gradeMarkSocial').value) || 0;
    var total = tamil + english + maths + science + social;

    var resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = '';

    var table = document.createElement('table');
    var tbody = document.createElement('tbody');

    addInputRow(tbody, 'Name', nameInput);
    addInputRow(tbody, 'DOB', dobInput);
    addInputRow(tbody, 'Phone', phoneInput);
    addInputRow(tbody, 'Tamil', tamil);
    addInputRow(tbody, 'English', english);
    addInputRow(tbody, 'Maths', maths);
    addInputRow(tbody, 'Science', science);
    addInputRow(tbody, 'Social', social);
    addInputRow(tbody, 'Total', total);
    
    table.appendChild(tbody);
    resultTable.appendChild(table);
}

function addInputRow(tbody, label, value) {
    var row = tbody.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = label;
    cell2.textContent = value;





    if (label !== 'Total'&& label!=='Name' && label!=='DOB' && label!=='Phone'){
    var passFailCell = row.insertCell();
    passFailCell.textContent = 35<=value <=100 ? 'Pass' : 'Fail';
}
}
