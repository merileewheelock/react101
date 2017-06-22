// Our first component
// Must be one parent tag around the entirety of the return statement
function Application(){
	// This is a comment outside of the return statement (regular JS)
	var name = "Chad";
	console.log(React);
	return(
		<div>
			<div>
				<Message name="Shane" gender="M" />
				<Message name="Carla" />
				<Message name="Nick" />
				<Message name="Hayes" />
			</div>
			<div>
				<h2>From {name}.</h2>
			</div>
		{ /* This is how to write a comment inside the return in JSX */ }
		{ /* Anything insite of {} will be evaluated as JS */}
		</div>
	)
}

// props = property name
function Message(props){
	return(
		<h1>Hello, {props.name}. Gender: {props.gender}</h1>
	)
}

// ReactDOM is available because we included reactDOM.js
// The .render function needs React (react.js) and takes 2 arguments
// 1. The component to render.
// 2. Where to render it.
// When ReactDOM.render runs, it will OWN that element

ReactDOM.render(
	<Application />, // this is the what
	document.getElementById('container') // this is the where
)