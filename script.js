function count() {
    for (counter = 99; counter >= 1; counter = counter - 1) 
    {
         if (counter == 1) {
            bottles = 'bottle';
        } else {
            bottles = 'bottles';
        }
        console.log(counter+" "+bottles+" of beer on the wall.");
        if (counter < 99) {
            console.log("");
            console.log(counter+" "+bottles+" of beer on the wall.");
        }
        console.log(counter+" "+bottles+" of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
        if (counter == 1) {
            console.log("No bottles of beer on the wall.");
        }
    }
}


function alert(){
    var choice1 = document.getElementById("choice1").value;
    var choice2 = document.getElementById("choice1").value;

    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
}


    
function hide (){
    document.getElementById('button').style.visibility='hidden';
}

