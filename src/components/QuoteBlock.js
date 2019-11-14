import React, {Component} from "react";

export default class QuoteBlock extends Component {
    render() {
        return <div className="quoteblock">
            {this.props.imageUrl ? <img className="image" src={this.props.imageUrl}/> : null}
            <div className="quote-author">
                {this.props.author}
            </div>
            <div className="quote-text">
                {this.props.quoteText}
            </div>
        </div> 
    }
}