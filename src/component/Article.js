import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return (this.props.new.map((articles) =>
            <div>
                <h1 key={articles.id}> {articles.titre} </h1>
                <p> {articles.texte} </p>
                <span> {articles.auteur} </span>
                
            </div>
        ))
    }
}

export default Article
