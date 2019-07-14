function signUpFunc()
{
	var modal = document.getElementById("signUpModal");
	var span = document.getElementsByClassName("close")[1];
	modal.style.display = "block";
	span.onclick = function() 
	{
 			modal.style.display = "none";
	}
	window.onclick = function(event) 
	{
	  if (event.target == modal) 
	  {
	    modal.style.display = "none";
	  }
	}
}
function signInFunc()
{
	var modal = document.getElementById("signInModal");
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	span.onclick = function() 
	{
 			modal.style.display = "none";
	}
	window.onclick = function(event) 
	{
	  if (event.target == modal) 
	  {
	    modal.style.display = "none";
	  }
	}
}
function nam()
{
	var signin = document.getElementById("signInModal");
	var signup = document.getElementById("signUpModal");
	signUpFunc();
	signin.style.display = "none";
}
/****************************** BLOGLIST.JS ************************************/

function trashmodal1()
{
	var trashmodal1 = document.getElementById('trash_modal');
	trashmodal1.style.display = "block";
	window.onclick = function(event) {
  if (event.target == trashmodal1) {
    trashmodal1.style.display = "none";
  }
}
}
