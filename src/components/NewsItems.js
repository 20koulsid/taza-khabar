import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <>
        <div className='my-3'>
            <div className="card" >
            <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%" , zIndex:"15"}}>{source}</span>
                <img src={!imageUrl?"https://g.foolcdn.com/editorial/images/793955/person-holding-cash-bills-money-hundred-dollar-fifty-dividend-income-invest-retire-spend-getty.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small class="text-body-secondary">By {!author?"Unknwon":author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default NewsItems
