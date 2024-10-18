import React from 'react'
import "./home.css";
// import "../App.scss";
import { ClipboardList, FileVideo, Play, Scroll, Wand } from 'lucide-react';
import Prepers from './_components/Prepers';
import Testimonal2 from './_components/Testimonial2';

function page() {
  return (
    <>
      <section className="main flex flex-col items-center bg-[#000000] text-white">
        <nav className="navbar flex flex-row justify-evenly items-center text-gray-300 bg-black">
          <div className="logo">
            <img className="mt-7" src="./newLogo.jpg" alt="logo" />
          </div>
          <ul className="flex flex-row justify-end items-center p-10">
            <li><a href="">Home</a></li>
            <li><a href="/create-new">Create New</a></li>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Subscriptions</a></li>
          </ul>
          <button className="flex justify-center items-center bg-white text-black">Sign in</button>
        </nav>
        <main className="content flex flex-col justify-center items-center">
            <div class="stars">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
          <div className="content1 flex flex-col justify-end items-center gap-6">
            <button className="flex justify-center items-center text-white gap-3">
              {/* <i class="fa-regular fa-wand-magic-sparkles"></i> */}
              <Wand />
              Ai in Visualization</button>
            <h1 className="flex justify-center items-center">Build With Ai</h1>
            <p className="flex justify-center items-center">Your Ultimate guide to Video Generation and Webscraping tools</p>
          </div>
          <div className="content2 flex flex-row justify-center items-center gap-6">
            <button className="b1 flex justify-center items-center text-black">Get Started</button>
            <button className="b2 flex justify-center items-center gap-2">
              {/* <i class="fa-solid fa-play"></i> */}
              <Play />
              How it works</button>
          </div>
          <div className="content3 flex flex-row justify-evenly items-center">
            <div className="box">
              {/* <i className="fa-solid fa-scroll"></i> */}
              <Scroll />
              <h1>Script Writing</h1>
              <p className="text-zinc-400">AI can generate scripts by analyzing existing scripts, understanding prompts, and creating original content based on patterns and styles.</p>
            </div>
            <div className="box">
              {/* <i className="fa-regular fa-file-video"></i> */}
              <FileVideo />
              <h1>Video Generation</h1>
              <p className="text-zinc-400">AI can generate videos by analyzing existing footage, understanding prompts, and creating original visuals based on patterns and styles.</p>
            </div>
            <div className="box">
              {/* <i className="fa-solid fa-clipboard-list"></i> */}
              <ClipboardList />
              <h1>Summary</h1>
              <p className="text-zinc-400">AI can summarize long texts by identifying key points, extracting relevant information, and condensing it into a concise summary.</p>
            </div>
          </div>
        </main>
        {/* prepars  */}
        {/* <Prepers /> */}

        {/* testimonial  */}
        {/* <Testimonal2 /> */}
      </section>

      {/* prepars */}
      <Prepers />

      {/* testimonial  */}
      <Testimonal2 />
    </>
  );
}

export default page
