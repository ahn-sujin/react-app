import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


//컴포넌트를 만드는 코드 템플릿 
class App extends Component {
  render() {
    return (

      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>  
      </div>
      
    );
  }
  
}

export default App;
