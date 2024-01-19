import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl ,newsUrl, author, date, source}=this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zIndex:'1', left:'50%'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://images.wsj.net/im-807957/social"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="cart-text"> <small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small> </p>
            <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-dark">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
