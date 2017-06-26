


function Board(){
	return(
		<div class="row">
			<div id="board" class="col-sm-12 text-center">
				 <div class="board-row">
				 	<button id="A1" class="square">A1</button>
				 	<button id="B1" class="square">B1</button>
				 	<button id="C1" class="square">C1</button>
				 </div>
				 <div class="board-row">
				 	<button id="A2" class="square">A2</button>
				 	<button id="B2" class="square">B2</button>
				 	<button id="C2" class="square">C2</button>
				 </div>
				 <div class="board-row">
				 	<button id="A3" class="square">A3</button>
				 	<button id="B3" class="square">B3</button>
				 	<button id="C3" class="square">C3</button>
				 </div>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<Board />
		</div>
	)
}


ReactDOM.render(
	<Application />,
	document.getElementById('root')
)