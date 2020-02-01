import React,{Component} from 'react';
import './style.css';
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
  handleSelected=(e)=>{
    var answers=this.state.answers;
    if(e.target.name == 'answer1'){
      answers.answer1=e.target.value;
    
    }
    else if(e.target.name == 'answer2'){
      answers.answer2 = e.target.value;
     

    }
    else if(e.target.name == 'answer3'){
      answers.answer3 = e.target.value;
    
    }
    this.setState({answers:answers},()=>{
      console.log(this.state);
    })
  }
  questionSubmit=(e)=>{
    e.preventDefault();
    this.setState({isSubmitted:true})
  }
  render(){
  var studentName;
  var questions;
  if(this.state.studentName === '' && this.state.isSubmitted === false){
    studentName = <div className="studentInfo">
    <h1>hey student, please let us know your name:</h1>
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="name.." ref="name" />
    </form>
    </div>
    questions='';
  }
  else if(this.state.studentName != '' && this.state.isSubmitted==false){
    studentName=<h1> hey, {this.state.studentName}</h1>
    questions=<div className="feedback">
    <h2>Here are some questions</h2>
    <form onSubmit={this.questionSubmit}>
    <div className="card">
       <label>What kind of courses you like the most:</label><br />
       <input class="with-gap" type="radio" name="answer1" value="technology" onChange={this.handleSelected} />Technology
       <input class="with-gap" type="radio" name="answer1" value="design" onChange={this.handleSelected} />Design
       <input class="with-gap" type="radio" name="answer1" value="marketing" onChange={this.handleSelected} />Marketing
    </div>
    <div className="card">

          <label>You are a:</label><br />
       <input type="radio" name="answer2" value="student" onChange={this.handleSelected} />student
       <input type="radio" name="answer2" value="in-job" onChange={this.handleSelected} />In-job
       <input type="radio" name="answer2" value="looking-for" onChange={this.handleSelected} />looking-for
    </div>
    <div className="card">

          <label>Is online learning helpful : </label><br />
          <input type="radio" name="answer3" value="yes" onChange={this.handleSelected} />yes
          <input type="radio" name="answer3" value="no" onChange={this.handleSelected} />no
          <input type="radio" name="answer3" value="maybe" onChange={this.handleSelected} />maybe

    </div>
    <input className="button" type="submit" value="submit"/>
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
