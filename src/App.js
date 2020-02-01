import React,{Component} from 'react';
var firebase=require('firebase')
var uuid=require('uuid')

 var firebaseConfig = {
    apiKey: "AIzaSyB5ieBzqMxirKXZO69JY1rTN_ggHYvKHkY",
    authDomain: "usurvey-55bfe.firebaseapp.com",
    databaseURL: "https://usurvey-55bfe.firebaseio.com",
    projectId: "usurvey-55bfe",
    storageBucket: "usurvey-55bfe.appspot.com",
    messagingSenderId: "875232401604",
    appId: "1:875232401604:web:3e20f942778bee04f95191",
    measurementId: "G-G8MYJDBLEQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      uid : uuid.v1(),
      studentName:'',
      answers:{
        answer1:'',
        answer2:'',
        answer3:''
      },
      isSubmitted:false
    };
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({studentName:this.refs.name.value},()=>{console.log(this.state )})

  }
  render(){
  var studentName;
  var questions;
  if(this.state.studentName === '' && this.state.isSubmitted === false){
    studentName = <div>
    <h1>hey student, please let us know your name:</h1>
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="name.." ref="name" />
    </form>
    </div>
    questions='';
  }
  else if(this.state.studentName != ''){
    studentName=<h1> hey, {this.state.studentName}</h1>
    questions=<div>
    <h2>Here are some questions</h2>
    <form>
    <div>
       <label>What kind of courses you like the most:</label><br />
       <input type="radio" name="answer1" value="technology" onChange={this.handleSelected} />Technology
       <input type="radio" name="answe1" value="Design" onChange={this.handleSelected} />Design
       <input type="radio" name="answer1" value="Marketing" onChange={this.handleSelected} />Marketing
    </div>
    <div>

          <label>You are a:</label><br />
       <input type="radio" name="answer2" value="student" onChange={this.handleSelected} />Technology
       <input type="radio" name="answer2" value="In-job" onChange={this.handleSelected} />Design
       <input type="radio" name="answer2" value="looking-for" onChange={this.handleSelected} />Marketing

    </div>
    <div>

          <label>Is online learning helpful : </label><br />
       <input type="radio" name="answer3" value="yes" onChange={this.handleSelected} />Technology
       <input type="radio" name="answer3" value="no" onChange={this.handleSelected} />Design
       <input type="radio" name="answer3" value="maybe" onChange={this.handleSelected} />Marketing

    </div>
    <input type="submit" value="submit"/>
    </form>
    </div>
  }
  return (
    <div className="App">
     {studentName}
     ---------------------
     {questions}
    </div>
  );
}
}

export default App;
