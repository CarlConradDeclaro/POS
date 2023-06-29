 
// hide/show toggle
var x1 = document.getElementById("main");
var y1 = document.getElementById("div2");
var v1 = document.getElementById("div3");
var close = document.getElementById("closeAll");

function hi(){
  if (close.style.display === "none") {
    close.style.display = "block";
    document.getElementById("btnClose").innerHTML = "Close";
  }else{
    close.style.display = "none";
     document.getElementById("btnClose").innerHTML = "Open";

  }
}


function toggle1(){  
    if (x1.style.display === "none") {
        x1.style.display = "block";
        y1.style.display = "none";
        v1.style.display = "none";
      } else {
        x1.style.display = "block";
        y1.style.display = "none";
        v1.style.display = "none";
       
      }    
}

function toggle2(){  
    if (y1.style.display === "none") {
        y1.style.display = "block";
        x1.style.display = "none";
        v1.style.display = "none";
      } else {
        x1.style.display = "none";
        y1.style.display = "block";
        v1.style.display = "none";
      }
}
 
function toggle3(){  
    if (v1.style.display === "none") {
        v1.style.display = "block";
        y1.style.display = "none";
        x1.style.display = "none";
      } else {
        v1.style.display = "block";
        x1.style.display = "none";
        y1.style.display = "none";
      }
}
 
 

 // create.js
 const BtnAdd = document.querySelector(".btn-add");
 const DviContainer =document.getElementById("div-conatainer");
 const totalContainer =document.getElementById("total");
 
 BtnAdd.addEventListener("click", AddNew);
 
 
 
 let divCount = 1;
 
 function AddNew(){
  const newDiv =  document.createElement("div");
  newDiv.classList.add('div-shadow');

  const inputElement = document.getElementById("input"); // Replace "myInput" with the actual id of your input element
  const value = inputElement.value;

  const newParagraph = document.createElement("p");
  newParagraph.innerText = value;
  
  const quantity = document.createElement("p");
  quantity.innerText = 0;
  quantity.classList.add('quantity'); // Add the "quantity" class to the element


  const newButtonPlus = document.createElement("button");
  newButtonPlus.textContent = "+";
  
  const newButtonMinus = document.createElement("button");
  newButtonMinus.textContent = "-";
  
  let currentValue = 1;
  
  newButtonPlus.addEventListener('click', function() {
  const quantityElement = this.parentNode.querySelector('.quantity');
  currentValue = parseInt(quantityElement.innerText);
  quantityElement.innerText = ++currentValue;

  const divId = this.parentNode.id; // Get the id of the parent div
  const divNumber = parseInt(divId.split('-')[1]); // Extract the div number from the id
  
  const productList = totalContainer.querySelector('.products-' + divNumber);

    list(productList,currentValue,divNumber,value);
   
});
  
   newButtonMinus.addEventListener('click', function() {
   const quantityElement = this.parentNode.querySelector('.quantity');
   currentValue = parseInt(quantityElement.innerText);   
   quantityElement.innerText = --currentValue;
        
     
   const divId = this.parentNode.id; // Get the id of the parent div
   const divNumber = parseInt(divId.split('-')[1]); // Extract the div number from the id
   
   const productList = totalContainer.querySelector('.products-' + divNumber);
   list(productList,currentValue,divNumber,value);
  
     
   });
 
   newDiv.appendChild(newParagraph);
   newDiv.appendChild(quantity);
   newDiv.appendChild(newButtonPlus);
   newDiv.appendChild(newButtonMinus);
 
 
   newDiv.id = "div-" + divCount; // Assign a unique id to the div
   
   divCount++;
   
   DviContainer.appendChild(newDiv);
 
 }
 

 function list(productList,currentValue,divNumber,value){

    if (productList) {
    if(currentValue != 0 && currentValue > 0){
      productList.innerText =value+ "...................."+  currentValue; // Update the product list with the final click count
    }else if(currentValue == 0){
      productList.innerText =" "; // Update the product list with the final click count

    }
     
    }else {
     const productListContainer = document.createElement("ol");
     productListContainer.classList.add('products-' + divNumber);
     productListContainer.style.listStyle = "none"; // Remove the default list styling
     const productItem = document.createElement("li");
     productItem.innerText = value+ "...................."+currentValue;
     productListContainer.appendChild(productItem);
     totalContainer.appendChild(productListContainer);
 
   }

 }