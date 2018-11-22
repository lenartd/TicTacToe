
function imgClick(id)
{
	let player = document.getElementById('player').innerHTML;
	if(player == 1)
	{
		document.getElementById(id).src='img/x.png';
		document.getElementById("player").innerHTML = "2";
	}
	else
	{
		document.getElementById(id).src='img/circle.png';
		document.getElementById("player").innerHTML = "1";
	}
	
	$('#' + id).removeAttr('onClick');
	checkWin();
}
function checkWin()
{
	let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for(let i=0; i<=8; i++)
	{
		if(document.getElementById('image'+i).getAttribute('src') == 'img/empty.png')
        {
			board[i] = 0;
        }
		if(document.getElementById('image'+i).getAttribute('src') == 'img/x.png')
		{
			board[i] = 1;
		}
		if(document.getElementById('image'+i).getAttribute('src') == 'img/circle.png')
		{
			board[i] = 2;
		}
	}
	if(checkLanes(1, board) == 1)
	{
		document.getElementById("win").innerHTML = "The winner is player 1";
		disable();
	}
	else if(checkLanes(2, board) == 2)
	{
		document.getElementById("win").innerHTML = "The winner is player 2";
		disable();
	}
	
}
function checkLanes(index, board)
{
	if(board[0] == index && board[1] == index && board[2] == index)
	{
		return index;
	}
	else if(board[3] == index && board[4] == index && board[5] == index)
	{
		return index;
	}
	else if(board[6] == index && board[7] == index && board[8] == index)
	{
		return index;
	}
	else if(board[0] == index && board[3] == index && board[6] == index)
	{
		return index;
	}
	else if(board[1] == index && board[4] == index && board[7] == index)
	{
		return index;
	}
	else if(board[2] == index && board[5] == index && board[8] == index)
	{
		return index;
	}
	else if(board[0] == index && board[4] == index && board[8] == index)
	{
		return index;
	}
	else if(board[2] == index && board[4] == index && board[6] == index)
	{
		return index;
	}
	else
	{
		return 0;
	}
}
function reset()
{
	for(let i=0; i<=8; i++)
	{
		document.getElementById('image'+i).src='img/empty.png';
		$('#image'+i).attr('onclick', 'imgClick('+"'"+'image'+i+"'"+')');
	}
	document.getElementById("win").innerHTML = " ";
}
function disable()
{
	for(let i=0; i<=8; i++)
	{
		$('#image'+i).removeAttr('onClick');
	}
}