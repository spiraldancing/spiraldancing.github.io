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