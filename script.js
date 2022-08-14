document.getElementById("btnFindMinimum").addEventListener("click", findminimum);
/////////////////////////////////////////////////////////////////////////////////
function findminimum(){
    
    event.preventDefault();
   
    var price1;
    var price2;
    var price3;
    var min;

    price1 = document.getElementById("price1").value;
    price2 = document.getElementById("price2").value;
    price3 = document.getElementById("price3").value;

    min = price1;
    if(parseInt(price2) < parseInt(min))
        min = price2 

        if(parseInt(price3) < parseInt(min))
        min = price3 

    document.getElementById("result").innerHTML = min;
}