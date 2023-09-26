import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, url, author, date, source} = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className="badge rounded-pill bg-danger">
   {source}
  </span>
          </div>
        
  <img src={!imageUrl?"https://i.insider.com/64df7ff3b698ac0019dc43a3?width=1200&format=jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a  href={url}  className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
