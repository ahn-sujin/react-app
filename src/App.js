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
      Subject:{title:'WEB', sub:'world wide web!'}
    }
  }

  render() {
    return (

      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}

export default App;
