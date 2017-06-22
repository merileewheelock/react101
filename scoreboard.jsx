// Make a component calaled "Application" that returns a single DOM element.
// Components should be uppercase.
// Add props param so we can get properties sent by component rendering this component.
// class = className in JSX

// The app works, but it's big. It's no better than if we just copy and pased it into our HTML file.
// If it gets any bigger, we are in trouble because we have to manage both JSX and HTML.
// Let's break the app into components:
// 1. Header
// 2. Multiple teams
// 3. Each team has a header

// STATE.
// Props are immutable. They do not change.
// State is a piece of data that DOES change.
// State has:
// 1. An initial value
// 2. (Infinite number of) changed values
// In the case of the NL East, all games back start at 0
// Some kind of mutation occurs (namely, someone loses or wins a game)

// In ES5, to use state, React provides a component class for us to use.
// It takes an obejt as a param.

// ANY TIME STATE CHANGES, THE COMPONENT WILL RE-RENDER


var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Miami"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadelphia"
	}
]

function Header(props){
	return(
		<div className="container">
			<h1>{props.title}</h1>
		</div>
	)
}

// Create a new component called Team to be used by Application. We can use it twice with props!
function Team(props){
	return(
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// var with the name of the component
// The only REQUIRED property is render
var Counter = React.createClass({

	// A set React property (like render) is getInitialState
	getInitialState: function() {
		// This function sets the initial state value of a variable
		// It returns a single object
		var stateObject = {
			gamesBack: 0
		}
		return stateObject;
	},

	addGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack + 0.5
		})
		// DO NOT DO THIS: this.state.gamesBack++; LET REACT MUTATE THIS ITSELF SO IT WILL RE-RENDER
	},

	loseGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack - 0.5
		})
	},

	render: function(){
		return(
			<div className="counter">
				<button onClick={this.addGame} className="btn btn-success">+</button>
				<div className="games-back">{this.state.gamesBack}</div>
				<button onClick={this.loseGame} className="btn btn-danger">-</button>
			</div>
		)
	}
})


function Application(props){
	return(

		// Use map to loop through the teams array.
		// We no longer need:
		// 	<Team name="Braves" score="0" />
		// 	<Team name="Brewers" score="0" />
		// props.teams is an array with team objects
		// Send Team the team object, in map, ES6 style

		<div className="container">
			{ /* <h1>props.title</h1> */}
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}

// Add aprop to send the title to the Application component
ReactDOM.render(
	<Application title="NL East Scoreboard" teams={teams} />,
	document.getElementById('root')
)