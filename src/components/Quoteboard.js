import React, { Component } from "react";
import QuoteBlock from "./QuoteBlock";


export default class Quoteboard extends Component {
  
    state = {
        quotes : null
      }
    async componentDidMount(){
        this.getQuote();
    }

    getQuote = async() => {
        const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en");
        const json = await response.json();
        // setState
        //this.setState({itemData : [...this.state.itemData, { ...json, imgUrl: `https://source.unsplash.com/random/${790 + Math.round(Math.random() * 50)}x600`}]})
        this.setState({quotes : json})
    };




    render() {
        if (this.state.quotes == null){
            return <div>Even wachten...</div>
        }
        const quotes_copy = [...this.state.quotes];
        quotes_copy.sort((a, b) => a.author.localeCompare(b.author));
        

        return (
            <div className="quoteboard">
                <h1>Selected Quotes:</h1>
                <ul>
                    {quotes_copy.map(this.renderQuote)}
                </ul>
            </div>
        );




    }

    renderQuote = quote => {
        return (
            <QuoteBlock id={quote.id}
            author={quote.author}
            quoteText={quote.en}
            // imageUrl={quote.imageUrl}
            key={quote.id} />
                
        );
    }





}