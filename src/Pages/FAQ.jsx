import React from 'react';
import { motion } from "motion/react"

const FAQ = () => {
    return (
         <motion.div  initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} >
                <title>FAQ</title>
   <div className='flex justify-center items-center '>
       <div className=" join  join-vertical bg-linear-to-r from-blue-400/20 to-blue-800/20 md:w-3/4 w-100  shrink-0 shadow-2xl text-slate-300">
  <div className="collapse collapse-arrow join-item border-blue-200 border ">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-blue-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-blue-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">How do I update my profile information?</div>
    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-blue-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">What genres of games are available?</div>
    <div className="collapse-content text-sm"> "GameHUBX offers  variety of genres, including FPS, RPG, adventure, strategy, sports, puzzle, and more."</div>
  </div>
  <div className="collapse collapse-arrow join-item border-blue-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">How do I stay updated with new games and updates?</div>
    <div className="collapse-content text-sm"> "For any assistance, reach out to our support team at support@gamehubx.com or use the live chat feature on the website."</div>
  </div>
</div>
   </div>
   </motion.div>
    );
};

export default FAQ;