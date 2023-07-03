// Continue with your server-side code...




//Variables
//Inputs values
const day = document.getElementById("day");
const expenses = document.getElementById("expenses");
const month = document.getElementById("month");
const createB = document.getElementById("create");
const goal = document.getElementById("goal");
const container2 = document.getElementById("container-2")
const per = document.getElementById("total-expenses")

goal.innerText = goal.value + " $";
day.focus();

//Information Display Elements
const daysTracking = document.getElementById("days-tracking");
const spendings = document.getElementById("spendings");
const container = document.getElementById("container");

//Goal % eventListener
const monthIncome = document.getElementById("monthincome");
    const createD = document.getElementById("created");
    let counter = document.getElementById("counter");
    const fill = document.getElementById("fill");
    const savingGoal = document.getElementById("saving-goal");


    createD.addEventListener("click", function() {
      if (monthIncome.value === '' || savingGoal.value === '') {
        alert("Enter Saving Goal and your Monthly Income");
      } else {
        monthIncomeValue = parseFloat(monthIncome.value);
    
        dailyGoal = Math.round(monthIncomeValue / 30);
    
        goal.value = dailyGoal;
        
        
      }
        // Get the input fields value before unloading 
        
     
    });


//increment's
let i;
let storedValue;
let expensesSpan;
let x = 0;

// Store the input value of x in the local storage before the website is closed or refreshed
// Store the value of x in local storage before the website is closed or refreshed
window.addEventListener("beforeunload", function() {
  localStorage.setItem("xVar", x);
});

// Retrieve the stored value from local storage and set it to the input
window.addEventListener("DOMContentLoaded", function() {
  // Getting the value of xVar
  const xS = localStorage.getItem("xVar");
  x = parseInt(xS);
});





  //Main eventListener
  createB.addEventListener("click", function() {

    //Variables inside of the Create Function
    const textArea = document.getElementById("extra-information");
    const expensesValue = parseInt(expenses.value);


    // Counting the number of div elements with class .expenses--div
    function countExpenses() {
      var expensesDivs = document.querySelectorAll('.expenses--div');
      var count = expensesDivs.length;
      return count;
    }

    // Storing the count in the local storage
    var i = countExpenses();
    localStorage.setItem('myNumber', i);

    i = 1 + i;


    //Error profing
    if(day.value === ''){
      alert("Add day of Month")
      i = i -1
    } else if(day.value > 31){
      alert("Day of Month is false")
      i = i -1
    } else if (expenses.value === ''){
      alert("Add expenses from this month")
      i = i -1
    } else if(goal.value === ''){
      alert("It is requiered to add your daily goal. Go in to setting to add ")
    } else if(textArea.value === ''){
      alert("On what did you spent your Money?")
    } else if (i === 31){
      alert("one month of tracking, big up")
      var divs = document.getElementsByClassName("expenses--div");
      while (divs.length > 0) {
        divs[0].parentNode.removeChild(divs[0]);
      }

    } else {



    
      // Retrieve the storedValue variable from local storage
      const storedValueString = localStorage.getItem('storedValue');

      // If the storedValue variable exists in local storage, parse it from a string to its original data type
      if (storedValueString) {
        storedValue = JSON.parse(storedValueString);
      } else {
        storedValue = 0;
      }


      const currency = document.getElementById("currency-select");
      let currenccV = currency.value;

      if(i === 0){
        spendings.innerHTML = "";
        storedValue = 0;
        console
      } else if (i === 1) {
        storedValue = 0;
        storedValue += expensesValue;
        spendings.innerHTML = "Till now you spend: <br> <br>" + storedValue + " " + currenccV;
      } else {
        storedValue += expensesValue;
        spendings.innerHTML =  "Till now you spend: <br> <br>" + storedValue + " " + currenccV;
      }

      

      // Store the storedValue variable in local storage
      localStorage.setItem('storedValue', JSON.stringify(storedValue));
    

      
      
      //Element creation

      //Elements
      var delet = document.createElement("button");
      iTag = document.createElement("i");
      iTag.className = "fa-solid fa-xmark";
      var divH = document.createElement("div");
      var info = document.createElement("button");
      var infoIcon = document.createElement("i");
      var extraInfo = document.createElement("span");
      var divHI = document.createElement("div")
      expensesSpan = document.createElement("span")

      //Values of Elements
      divHI.innerHTML = day.value +  "<br>" + month.value + "<br>" + "<br>";
      expensesSpan.innerHTML = expenses.value + " " + currenccV;
      extraInfo.innerHTML = "Expenses: <br> <br>" + textArea.value;

      //attaching Class names to Elements
      divH.className ="expenses--div";
      delet.className = "delet";
      info.className = "info-div-div"
      infoIcon.className = "fa-solid fa-circle-info";
      extraInfo.className ="extra-info"
      divHI.className = "inside-expense"
      expensesSpan.id = "expensesSpan";
      expensesSpan.className = "expenses-span";

      //Appending Elements to containers
      container.appendChild(delet);
      divH.appendChild(delet);
      container.appendChild(divH);
      divH.appendChild(info);
      info.appendChild(infoIcon); 
      delet.appendChild(iTag)
      divH.appendChild(extraInfo)
      divH.appendChild(divHI)
      divH.appendChild(expensesSpan);
      var expenseSpanValue = parseFloat(expensesSpan.value)

      //Triggering the active sudo Class
      info.addEventListener("click", function() {
        extraInfo.classList.toggle("active");
        divHI.classList.toggle("active");
        const expensesSpansS = divH.querySelectorAll(".expenses-span");
        expensesSpansS.forEach(function(expensesSpan) {
          expensesSpan.classList.toggle("active");
        });
      });
      
      //Rearaging i
      delet.addEventListener("click", function() {
        var divH = this.closest(".divH"); // Retrieve the closest ancestor div with the class "divH"
        var value = parseFloat(expensesSpan.innerHTML); // Get the value from the span and convert it to a number
      
        if (!isNaN(value)) {

          storedValue -= value;
          console.log("The value is a number: " + storedValue);
          spendings.innerHTML = "Till now you spent: <br> <br>" + storedValue + " " + currenccV;
        } else if (storedValue === 0){
          spendings.innerHTML = '';
        } else {
          // The value is not a number
          console.log("The value is not a number.");
          // Handle the case where it's invalid input
        }
        if(i === 0){
          storedValue = 0;
        }

        //Updating the loading bar
        
        if(counterValue < 0){
          fill.style.width = "0%";
          counter.innerText = "0%";
        } else {
        fill.style.width = Math.round(counterValue) + "%";
        counter.innerText = Math.round(counterValue) + "%";
        }
      });  

      //% for loading bar
      
      

      
      

     


      //Color render function
      if(parseInt(goal.value) > parseInt(expenses.value)) {
        divH.style.backgroundColor = "rgba(34, 166, 153, 0.5)";
      } else if (parseInt(goal.value) < parseInt(expenses.value)) {
        divH.style.backgroundColor = "rgba(242, 76, 61, 0.5)";
      }
        

      //clear value of Inputs
      //expenses.value = '';
      //day.value = '';
      //textArea.value = '';
    
    };//end if-function


    //Apply settings eventListener
    

    //Delet div button function

      delet.addEventListener("click", function() {
        var parentDiv = delet.parentNode;
        parentDiv.parentNode.removeChild(parentDiv);
        info.classList.remove("active");


      // Counting the number of div elements with class .expenses--div
      function countExpenses() {
        var expensesDivs = document.querySelectorAll('.expenses--div');
        var count = expensesDivs.length;
        return count;
      }
      // Storing the count in the local storage
      var i = countExpenses();
      localStorage.setItem('myNumber', i);


      //Infomation display function
      
      if (i === 0){
        daysTracking.innerHTML = "";
      } else if (i === 1) {
        daysTracking.innerHTML = "Tracking for: " + i + " Day";
      } else {
        daysTracking.innerHTML = "Tracking for: " + i + " Days";
      }

      spendings.innerHTML = "Till now you spend: <br> <br>" + storedValue + " " + currenccV;
      if(counterValue < 0){
        fill.style.width = "0%";
        counter.innerText = "0%";
      } else {
        fill.style.width = Math.round(counterValue) + "%";
      }
    });

    //show information

    //Inforamtion display function
    if (i === 0){
      daysTracking.innerHTML = "";
    } else if (i === 1) {
      daysTracking.innerHTML = "Tracking for: " + i + " Day";
    } else {
      daysTracking.innerHTML = "Tracking for: " + i + " Days";
    }

    //Amount spend
    if (i === 0){
      spend.innerHTML = '';
    }


    //Add function to the loading bar
    x = x + 1

    let goalReach = (x * goal.value) - storedValue;
    let counterValue = (100 / savingGoal.value) * goalReach;
    if(counterValue < 0){
      fill.style.width = "0%";
      counter.innerText = "0%";
    } else {
      fill.style.width = Math.round(counterValue) + "%";
      counter.innerText = Math.round(counterValue) + "%";
    }
    if(x === 0){
      counter.innerText = Math.round(counterValue) + "%";
    fill.style.width = Math.round(counterValue) + "%";
    }

    

    
    
  }); //End event listener create button function




//Reset function
function deleteExpenses() {
  // Confirm from the user
  if (confirm("Are you sure you want to reset?")) {
    // User clicked OK
    // Remove div elements with class .expenses
    const expenseDivs = document.querySelectorAll('.expenses--div');
    expenseDivs.forEach((div) => div.remove());

    // Clear local storage
    localStorage.clear();

    // Updating User Information
    i = 0;
    counterValue = 0;
    fill.style.width = "0%";
    daysTracking.innerHTML = ""; 
    storedValue = 0;
    spendings.innerHTML = "";
    x = 0;

    // Reset the values of setting inputs
    goal.value = '';
    monthIncome.value = '';
    savingGoal.value = '';

    counter.innerText = "0%";
  } else {
    // User clicked Cancel
    // Do nothing or perform any other desired action
  }
}



const resetButton = document.getElementById('deletd');
resetButton.addEventListener('click', deleteExpenses, );




// Storing the deleted divs' data in local storage before unloading the page
window.addEventListener("beforeunload", function() {
  var deletedDivsData = [];
  var divs = document.getElementsByClassName("expenses--div");
  for (var j = 0; j < divs.length; j++) {
    var divData = {
      content: divs[j].innerHTML,
      className: divs[j].className,
      color: divs[j].style.color,
      backgroundColor: divs[j].style.backgroundColor
    };
    
    deletedDivsData.push(divData);
  }
  localStorage.setItem("deletedDivsData", JSON.stringify(deletedDivsData));
});

// Retrieving the stored data and recreating the divs when the site is opened
window.addEventListener("load", function() {
  var storedData = localStorage.getItem("deletedDivsData");
  var deletedDivsData = JSON.parse(storedData);
  var extraInfo = document.createElement("span");
  // Set the content or attributes of the span element if needed
  extraInfo.textContent = "Some content";
  localStorage.setItem("extraInfo", extraInfo.outerHTML);

  if (deletedDivsData && deletedDivsData.length > 0) {
    for (var k = 0; k < deletedDivsData.length; k++) {
      var divData = deletedDivsData[k];
      var div = document.createElement("div");
      div.innerHTML = divData.content;
      div.className = divData.className;
      div.style.color = divData.color; // Set the stored color
      div.style.backgroundColor = divData.backgroundColor; // Set the stored background color

      container.appendChild(div);

      // Add event listener to the delete button inside the recreated div
      var deleteButton = div.querySelector(".delet");
      if (deleteButton) {
        deleteButton.addEventListener("click", function(event) {
          var parentDiv = event.target.closest(".expenses--div");
          var expensesV = document.getElementById("expensesSpan");
          parentDiv.parentNode.removeChild(parentDiv);
          storedValue = storedValue - expensesV.value;
        });
      }
      
      var insideDiv = div.querySelector(".inside-expense");
      var insideDivTo = div.querySelector(".info-div-div");
      var insideDivInfo = div.querySelector(".extra-info");
      
      if (insideDivTo) {
        insideDivTo.addEventListener("click", (function(div, divTo, divInfo) {
          return function() {
            div.classList.toggle("active");
            divInfo.classList.toggle("active");
          };
        })(insideDiv, insideDivTo, insideDivInfo));
      }
    }
  }

});






function deletButtonClickHandler(event) {
  var deletButton = event.target;
  var parentDiv = deletButton.parentNode;
  parentDiv.parentNode.removeChild(parentDiv);
  

  updateLocalStorage();
}

function updateLocalStorage() {
  var divs = document.getElementsByClassName("expenses--div");
  var deletedDivsData = [];

  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var divData = {
      content: div.innerHTML,
      className: div.className
    };
    deletedDivsData.push(divData);
  }

  var storedData = JSON.stringify(deletedDivsData);
  localStorage.setItem("deletedDivsData", storedData);
}







//Settings

//variables
const startSettings = document.getElementById("settings");
const settings = document.getElementById("settings-div");
const closeS = document.getElementById("close-s");



startSettings.addEventListener("click", function(){
  settings.classList.toggle("active");
});

closeS.addEventListener("click", function(){
  settings.classList.toggle("active");
})


const apply = document.getElementById("apply");
apply.addEventListener("click", function() {
  var result = confirm("Settings will be changed");
  if (result) {
    // User confirmed the changes
    settings.classList.toggle("active");
  } else {
    // User canceled the changes
    settings.classList.add("active");
  }
});









      
    goal.addEventListener("click", function() {
      if (confirm("You can add a Personal Daily Goal or we can Create one for you.")) {
        savingGoal.focus()
      } else {
        goal.focus()
      }
    });


    // Store the input value in the local storage before the website is closed or refreshed
    window.addEventListener("beforeunload", function() {
      localStorage.setItem("goalValue", goal.value);
      localStorage.setItem("savingGoalValue", savingGoal.value);
    });

    // Retrieve the stored value from the local storage and set it to the input
    window.addEventListener("DOMContentLoaded", function() {
      // Getting the value of the daily goal
      const goalS = localStorage.getItem("goalValue");
      goal.value = goalS;
      console.log(goalS);
      // Getting the value of the saving Goal
      const savingGoalS = localStorage.getItem("savingGoalValue");
      savingGoal.value = savingGoalS;
    });
    
    