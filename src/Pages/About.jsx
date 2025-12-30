import React from 'react';
import { motion } from "motion/react"

const About = () => {
    return (
      <motion.h1  initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} class="bg-[#0f172a] text-gray-300 py-16 px-6 text-center">
        <title>About</title>
  <div class="max-w-3xl mx-auto">
<h2 className="text-4xl font-bold text-[#38bdf8] mb-6">
  About{" "}
  <a className="text-[#38bdf8] text-4xl uppercase font-bold">
    game<span>HUB</span>
    <span className="text-4xl text-blue-500">X</span>
  </a>
</h2>

<p className="text-lg leading-relaxed">
  Welcome to <span className="text-[#38bdf8] font-semibold">GAMEHUBX</span> — your ultimate gaming universe!  
  We bring together gamers from around the world to explore, discover, and play the best games across all genres.  
  Whether you are a casual player or a competitive pro, GameHubX is your one-stop hub for the latest gaming news, reviews, updates, and downloads.
</p>

<p className="text-lg leading-relaxed mt-4">
  Our mission is to build a community where gaming is more than just fun — it's a lifestyle.  
  We believe games have the power to connect people, spark creativity, and create unforgettable experiences.  
  That’s why we focus on delivering high-quality content, trusted recommendations, and a platform built by gamers, for gamers.
</p>

<p className="text-lg leading-relaxed mt-4">
  With a sleek design, lightning-fast performance, and carefully curated collections, GameHubX makes it easy to find your next favorite game.  
  From action-packed adventures and immersive RPGs to competitive multiplayer and strategic classics, there’s something here for everyone.
</p>

<p className="text-lg leading-relaxed mt-4">
  We’re constantly evolving, adding new features, expanding our library, and listening to our community to improve your experience.  
  GameHubX isn’t just a platform — it’s a growing ecosystem where players connect, compete, and celebrate gaming culture together.
</p>

<p className="text-lg mt-6 font-semibold text-[#38bdf8]">
  Level up your gaming experience with GAMEHUBX — Play. Connect. Conquer. 🎮
</p>

  </div>
</motion.h1>

    );
};

export default About;