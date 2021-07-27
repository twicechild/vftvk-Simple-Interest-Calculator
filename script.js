function compute()
{
    
    // Firsgt we declare the variables

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100; // The simplest way to compute the interest
    var year =  new Date().getFullYear()+parseInt(years); // Adding the years to the current YYYY

    if(principal > 0) //Validating the amount. There is no reason the amount to be a negative number
    {
    document.getElementById("result").innerHTML="\<br>\If you deposit <strong>"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"%</strong>\<br\>You will receive an amount of <strong>"+parseInt(interest)+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>";
    }else{ //If the amunt is not bigert than 0 show an alert
        
        alert("Please enter an amount that is more than zero");
        document.getElementById("principal").focus(); //focus back to the input box
    
    }

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=+rateval+"%";
}