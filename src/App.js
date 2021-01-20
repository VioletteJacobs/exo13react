
import './App.css';
import Article from "./component/Article"
import React, { Component } from 'react'

export class App extends Component {
  state = {
    articles:[
      {
        id:1,
        titre: "semaine1",
        texte: "lorem15 zeibfkqez lizehfilqhze frilherilfhu e",
        auteur: "Théo",
      },
      {
        id:2,
        titre: "semaine2",
        texte: "lorem15 zeibfkqez lizehfilqhze frilherilfhu e",
        auteur: "Léo",
      },
      {
        id:3,
        titre: "semaine3",
        texte: "lorem15 zeibfkqez lizehfilqhze frilherilfhu e",
        auteur: "mart"
      },
      {
        id:4,
        titre: "semaine4",
        texte: "lorem15 zeibfkqez lizehfilqhze frilherilfhu e",
        auteur: "megane"
      }
    ]
  }

  render() {
    return (
      <div>
        <Article new = {this.state.articles} />
      </div>
    )
  }
}

export default App
