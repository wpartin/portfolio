import React from "react";
import image from "../bgimg.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="mountain road"
        className="absolute object-cover w-full h-screen bg-blend-darken"
      />
    </main>
  );
}
