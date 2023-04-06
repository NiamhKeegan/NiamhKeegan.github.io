//Create a grocery list application where users can add and remove items from a list.
//The list should be displayed as a bulleted unordered list



let data = ["Eggs", "Milk", "Bread", "Butter"];
     
   let list = document.getElementById("main")
     
    data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);

    });
    
//let groceryList=["Eggs","- Milk","Bread","Butter"];
//function listItems (){
//document.getElementById("main").innerHTML=groceryList.toString();
//}

function addToEnd(){
    data.push(prompt("Enter item"));
    //listItems();
    list.appendChild(li);
}

function removeFromEnd(){
    data.pop();
    //listItems();
    list.appendChild(li);
}

function addToStart(){
    data.unshift (prompt("Enter item"));
    //listItems();
    list.appendChild(li);
}

function removeFromStart(){
    data.shift();
    //listItems();
    list.appendChild(li);
}


       