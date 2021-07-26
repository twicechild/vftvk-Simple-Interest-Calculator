function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year =  new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="\<br>\If you deposit <strong>"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"%</strong>\<br\>You will receive an amount of <strong>"+parseInt(interest)+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>";

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateAmount()
{
    var amount = document.getElementById(principal)
    var isPositive = amount > 0;
    if(!isPositive)
    {
        alert("Please enter an amount that is more than zero (0)")
        document.getElementById("principal").focus();
    }
}