import React, { Component } from "react";
import QuoteBlock from "./QuoteBlock";


export default class Quoteboard extends Component {

    state = {
        quotes: [
            { id: 1, author: "Henry Ford", quoteText: "If we’d asked the customers what they wanted, they would have said “faster horses”.", imageUrl: "https://images.unsplash.com/photo-1573020568125-d15af9c3e777?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200" },
            { id: 2, author: "Fred Brooks", quoteText: "What one programmer can do in one month, two programmers can do in two months.", imageUrl: "https://images.unsplash.com/photo-1572391642723-93686163161e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200" },
            { id: 3, author: "Douglas Crockford", quoteText: "It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading.", imageUrl: "https://images.unsplash.com/photo-1572016874827-00983478b54e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200" },
        ]
    }

    render() {
        const quotes_copy = [...this.state.quotes];
        quotes_copy.sort((a, b) => b.author - a.author);

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
            quoteText={quote.quoteText}
            imageUrl={quote.imageUrl}
            key={quote.id} />
                
        );
    }





}