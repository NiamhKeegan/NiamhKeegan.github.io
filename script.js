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