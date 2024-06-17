import React from "react";
import './styles/App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

import articleImg1 from "./assets/article1.png"
import articleImg2 from "./assets/article2.png"
import articleImg3 from "./assets/article3.png"


// Um componente é uma classe que herda uma classe component do React e retorna HTML dentro do método render.
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>

        <Counter/>
        <section id="articles">
          <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg1}/>

          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg2}/>
          
          <Article title="36 Days of Malayalam type" provider="Spaceflight Now" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg3}/>

          <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail={articleImg1}/>
        </section>
      </>
    );
  }
}

export default App;
