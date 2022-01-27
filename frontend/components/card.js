import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
            
            <p id="date" className="uk-text-large">
              {article.attributes.date}
            </p>
            
          </div>
        </div>
      </a>

            



    </Link>
  )
}

export default Card
