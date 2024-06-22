import React from "react"


class App extends React.Component {
  constructor(){
    super();

    this.state = { showCounter: false } //é uma variável para mostrar ou não o conteúdo
  }

  //setState({  }) = atualiza uma variável
  // tudo que esteja entre '{  }' é um código em javascript dentro do react
  //this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador' = esse tipo de sintaxe é um operador ternário
  render() {
    return (
      <div>
        <h1>Ciclo de Vida no React</h1>

        <button onClick={() => {
          this.setState({ showCounter: !this.state.showCounter });
        }}>{ this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador' }</button> {/* caso o estado da variável seja verdadeiro, irá mostrar 'Remover Contador', caso contrário 'Mostrar Contador' */}
      </div>
    );
  }
}

export default App;
