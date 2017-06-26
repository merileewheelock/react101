// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

var data = [
  {
    author:{
      avatar: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatar: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't think you are. Know you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatar}
          alt={props.author.name}
          width="200px" height="200px"
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
      <div className="UserBadges">
        <div className="badge">{props.userBadge[0]}</div>
        <div className="badge">{props.userBadge[1]}</div>
        <div className="badge">{props.userBadge[2]}</div>
      </div>
    </div>
  );
}

function Application(props){
  console.log(props);
  var commentsArray = [];
  props.data.map((comment, index)=>{
    commentsArray.push(<Comment key={index} author={comment.author} userBadge={comment.userBadge} text={comment.text} commentHeading={comment.commentHeading} date={comment.date} />)
  })
  return(
      <div className="container">
        <h1>Some Facebook Post</h1>
        {commentsArray}
      </div>
  )
}


ReactDOM.render(
  <Application data = {data} />,
  document.getElementById('root')
)