import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


//컴포넌트를 만드는 코드 템플릿 
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text Markup Language.'},
        {id:2, title:'CSS', desc:'CSS id for design'},
        {id:3, title:'JavaScript', desc:'JavaScript id for interactive'}
      ]
    }
  }

  render() {
    return (

      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}

export default App;
