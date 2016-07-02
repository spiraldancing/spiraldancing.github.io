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