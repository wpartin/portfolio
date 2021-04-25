import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import about from "../about.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img
        src={about}
        alt="calm stones"
        className="absolute object-cover h-screen w-full"
      />
      <div className="p-5 pt-10 md:p-10 lg:pt-24 container mx-auto relative">
        <section className="bg-blue-800 bg-opacity-90 rounded-lg shadow-2xl lg:flex p-6 lg:p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 lg:mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="poppins text-2xl lg:text-6xl text-blue-300 mt-4 mb-4">
              Hey there, I'm{" "}
              <span className="text-blue-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="22eiy0sq"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
