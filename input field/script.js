function buttonClick() {

    var dataTable = document.getElementById("inputList");

    var userInput = document.querySelector("input:last-child").value;
    var dataEntry = document.createElement("option");
    dataEntry.setAttribute("value", userInput);
    dataTable.append(dataEntry)

    const inputBox = document.createElement("input");
    inputBox.setAttribute("list", "inputList");
    document.getElementById("inputDiv").append(inputBox);
}

// function getInputValue(){
//     // Selecting the input element and get its value
//     inputText = document.querySelector("input:last-child"); 
//     var inputVal = inputText.value;
    
//     // Displaying the value
//     alert(inputVal);
// }