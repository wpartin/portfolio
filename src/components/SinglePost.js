import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const code = `
package main

import (
    "fmt"
    "os"
)

func main () {
    var s, sep string

    for i := 0; i < len(os.Args); i++ {
        s += sep + os.Args[i]
        sep = " "
    }
    fmt.Println(s)
}
`;

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  const serializers = {
    types: {
      code: ({ node }) => {
        let language;
        if (node.language === "golang") {
          language = "go";
        } else if (node.language === "sh") {
          language = "shellSession";
        }
        return (
          <SyntaxHighlighter language={language} style={a11yDark}>
            {node.code}
          </SyntaxHighlighter>
        );
      },
    },
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-6 lg:p-12">
      <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-4 lg:p-8">
            <div className="bg-white bg-opacity-75 rounded p-6 lg:p-12">
              <h1 className="poppins text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <p className="poppins flex items-center pl-2 text-2xl"></p>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-8 lg:px-48 py-6 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            serializers={serializers}
            projectId="22eiy0sq"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
