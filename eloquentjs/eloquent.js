function chapter02Exercise01()
{
  // Your code here.
  for (var i = 0; i < 8; i++)
  {
    var nextLine = "";
    for (var j = 0; j < i; j++)
      nextLine += "#";
    console.log(nextLine + "\n");
  }
}

function chapter02Exercise02()
{
	// Your code here.
	for (var i = 1; i <= 100; i++)
	{
	  if ((i % 3 == 0) && (i % 5 != 0))
	    console.log("Fizz");
	  else if ((i % 3 != 0) && (i % 5 == 0))
	    console.log("Buzz");
	  else if ((i % 3 == 0) && (i % 5 == 0))
	    console.log("FizzBuzz");
	  else
	    console.log(i);
	}
}

function chapter02Exercise03()
{
	// Your code here.
	var size = 8;
	for (var x = 0; x < size; x++)
	{
	  var nextLine = "";
	  for (var y = 0; y < size; y++)
	  {
	    if ((x + y) % 2 == 0)
	      nextLine += " ";
	    else
	      nextLine += "#";
	  }
	  console.log(nextLine);
	}
}

function chapter03Exercise01()
{
	// Your code here.
	function min(a, b){
	  if (a < b) return a;
	  return b;
	}

	console.log(min(0, 10));
	// → 0
	console.log(min(0, -10));
	// → -10
}

function chapter03Exercise02()
{
	// Your code here.
	function isEven(a){
	  if (a < 0) return false;
	  if (a > 1) return isEven(a-2);
	  return (a == 0);
	}

	console.log(isEven(50));
	// → true
	console.log(isEven(75));
	// → false
	console.log(isEven(-1));
	// → ??
}

