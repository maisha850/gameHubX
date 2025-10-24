import React from 'react';
import { motion } from "motion/react"

const About = () => {
    return (
      <motion.h1  initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} class="bg-[#0f172a] text-gray-300 py-16 px-6 text-center">
        <title>About</title>
  <div class="max-w-3xl mx-auto">
    <h2 class="text-4xl font-bold text-[#38bdf8] mb-6">About  <a  className=" text-[#38bdf8] text-4xl g uppercase font-bold">game<span>HUB</span><span className='text-4xl text-blue-500'>X</span></a></h2>
    <p class="text-lg leading-relaxed">
      Welcome to <span class="text-[#38bdf8] font-semibold">GAMEHUBX</span> — your ultimate gaming universe!  
      We bring together gamers from around the world to explore, discover, and play the best games across all genres.  
      Whether you’re a casual player or a pro, GameHubX is your one-stop hub for the latest gaming news, reviews, and downloads.
    </p>
    <p class="text-lg leading-relaxed mt-4">
      Our mission is to build a community where gaming is more than just fun — it's a lifestyle.  
      With a sleek design, fast performance, and curated collections, GameHubX makes it easy for you to find your next favorite game.  
      Dive into the world of action, adventure, strategy, and more — all in one place.
    </p>
    <p class="text-lg mt-6 font-semibold text-[#38bdf8]">
      Level up your gaming experience with GAMEHUBX — Play. Connect. Conquer. 🎮
    </p>
  </div>
</motion.h1>

    );
};

export default About;