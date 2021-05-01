import React from "react";
import image from "../bgimg.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="mountain road"
        className="absolute objec-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 md:pt-38 lg:pt-64 px-8">
        <h1 className="text-6xl md:text-8xl text-blue-100 font-bold poppins leading-none lg:leading-snug">
          Hey there,
          <br />
          I'm Weston.
        </h1>
      </section>
    </main>
  );
}
