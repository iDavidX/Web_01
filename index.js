var count = 0;

function upDateCart(op, amount)
{

    if(op == "+")
    {
        count += amount;
        $("h6").html("Total: " + count);
    }
    else if(op == "-")
    {   
        count -= amount;
        $("h6").html("Total: " + count);
    }
}

