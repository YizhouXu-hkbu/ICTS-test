import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
          />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          />


          <script
            async
            src="my-project\frontend\assets\css\bulma-carousel.min.css"
          />
          <script
            async
            src="my-project\frontend\assets\css\bulma.min.css"
          />
          <script
            async
            src="my-project\frontend\assets\css\bulma.min(1).css"
          />
          <script
            async
            src="my-project\frontend\assets\css\font-awesome.min.css"
          />
          <script
            async
            src="my-project\frontend\assets\css\production.min.css"
          />
          <script
            async
            src="my-project\frontend\assets\css\ICTS.css"
          />




        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
