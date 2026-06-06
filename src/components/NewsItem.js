import React from 'react'

const NewsItem= (props) => {
    let { title, description, imageURL, newsUrl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card position-relative">

          <span 
            className="badge bg-danger position-absolute" 
            style={{ top: "1px", right: "1px", zIndex: "1" }}
          >
            {source}
          </span>

          <img 
            src={!imageURL ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : imageURL} 
            className="card-img-top" 
            alt="news" 
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>

            <a 
              href={newsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>

          </div>
        </div>
      </div>
    )
}

export default NewsItem