var random = Math.floor(Math.random() * 100 + 10); 
var crystal1 = Math.floor(Math.random() * 30 + 1); 
var crystal2 = Math.floor(Math.random() * 20 + 1); 
var crystal3 = Math.floor(Math.random() * 40 + 1); 
var crystal4 = Math.floor(Math.random() * 10 + 1); 
var total = 0;
var lose = 0;
var win = 0;

function reset()
{
    random = Math.floor(Math.random() * 100 + 10);
    $("#randomnumber").text(random);
    total = 0;
    $("#score").text("0");
}

function compare()
{
    if(total > random)
    {
        lose++;
        $("#countLose").text(lose);
        window.alert("You Lost !!!");
        reset();
    }

    else if(total === random)
    {
        win++;
        $("#countWin").text(win);
        window.alert("You Win !!!");
        reset();
    }
}

$("#randomnumber").text(random);
$(".crystal1").on("click", function()
{
    total += crystal1; 
    $("#score").text(total);
    compare();
}
);  

$(".crystal2").on("click", function()
{
    total += crystal2;
    $("#score").text(total);
    compare();
}
);

$(".crystal3").on("click", function()
{
    total += crystal3;
    $("#score").text(total);
    compare();
}
);

$(".crystal4").on("click", function()
{
    total += crystal4;
    $("#score").text(total);
    compare();
}
);