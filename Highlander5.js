function myFunction()
{ 
	var carname = "Highlander";
	document.getElementById("demo").innerHTML = carname;
}

function changeColour(colourChoice)
{ 
	if (colourChoice == "light")
	{
		document.body.style.backgroundColor = "linen";
		document.body.style.color = "red";
	}
	else
	{
		if (colourChoice == "dark")
		{
			document.body.style.backgroundColor = '#40312A';
			document.body.style.color = '#F0C2A0';
		}	
		else
		{
			document.body.style.backgroundColor = '#A83738';
			document.body.style.color = '#F3CB60';
		}
	}
}

function todaysDate()
{
 
	 var rightNow2 =  new Date();
	 var theMonth = 0, todaysDate = "";  
	 theMonth = rightNow2.getMonth() + 1;
	 todaysDate = theMonth + '-' + rightNow2.getDate() 
                + '-' + rightNow2.getFullYear();
	 document.getElementById("showDate").innerHTML = todaysDate;	
	
}
function list()
{
	document.getElementsByClassName("listcontainer")[0].innerHTML = 
	"Three languages at work<ol><li>html</li><li>css</li><li>javascript</li></ol>";
}