import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // Capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // Set title
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`
  }, [props.category])

  // Initial fetch (componentDidMount)
  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, [])

  const updateNews = async () => {

    props.setProgress(10)
    setLoading(true)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=679d1731ebd54d988677d42951341247&page=1&pageSize=${props.pageSize}`

    let data = await fetch(url)

    props.setProgress(50)

    let parsedData = await data.json()

    props.setProgress(100)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  const fetchMoreData = async () => {

    props.setProgress(10)

    let nextPage = page + 1
    setPage(nextPage)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=679d1731ebd54d988677d42951341247&page=${nextPage}&pageSize=${props.pageSize}`

    let data = await fetch(url)

    props.setProgress(50)

    let parsedData = await data.json()

    props.setProgress(100)

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <div className="container my-3">

      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="row mx-0">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageURL={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            )
          })}
        </div>

      </InfiniteScroll>

    </div>
  )
}

// Default Props
News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general"
}

// Prop Types
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News