"use client"; 
import React, { useState, useRef } from "react";
import Image from "next/image"; 

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const faqs = [
    { id: 1, question: "who am i?", answer: "hi, im punked! im a aussie" },
    { id: 2, question: "how do i get in contact with you?", answer: "uhh just add me on discord: lbacp." },
    { id: 3, question: "are you sigma?", answer: "of course bbg :3"},
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300">
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="none">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 0H800V600H0z"/>
            <path d="M0 0C111 148 222 296 333 444S444 592 555 740c111 148 222 296 333 444V0H0z" />
          </g>
        </svg>
      </div>
      
      {/* Main Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-pink-300 to-pink-600">
        <div className="flex items-center justify-between max-w-6xl mx-8 space-x-8">
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-white transition-transform duration-500 transform hover:scale-110 animate-pulse">
              hi, im punked!
            </h1>
            <p className="mt-4 text-lg text-gray-300 hover:scale-110 transition-transform duration-155">
              hi, im punked, and im a coder :3
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                className="bg-gradient-to-r from-pink-500 font-inter font-bold to-pink-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
                href="/invalid"
              >
                Projects
              </a>
              <a
                className="bg-gradient-to-r from-pink-500 font-inter font-bold to-pink-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
                href="/invalid"
              >
                Contact
              </a>
            </div>
            <p className="mt-4 text-lg text-gray-300 hover:scale-110 transition-transform duration-5">
                Languages: C#
                      {/* 🔴🟠🟢 */}
            </p>
            <div className="mt-5 flex space-x-6">
            <br />
            <img src="https://cdn.discordapp.com/attachments/1295488636485369960/1296467862558343168/c-sharp-c-icon-1822x2048-wuf3ijab.png?ex=67126549&is=671113c9&hm=169bcf540285fce6cbd69ec4b386947e7b135ac6625a3a16f13cfe3ed81a5005&" alt=""  className="size-10 rounded-sm hover:scale-110 transition-transform duration-50"/>
            </div>
          </div>
          <div className="relative w-1/2">
            <Image
              src="https://cdn.discordapp.com/avatars/1236179472336814160/6f6e42d7b5be5a54fdc883c05e5d4825.png?size=1024"
              alt="Vortex Product"
              width={800}
              height={800}
              className="relative shadow-lg rounded-full hover:scale-110 transition-transform duration-155"
            />
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-b from-pink-600 to-pink-300 text-center py-20">
      <h2 className="text-4xl font-bold text-white mb-12 animate-pulse hover:scale-110 transition-transform duration-155">my socials :3</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl mb-12 transition-transform duration-500 hover:scale-105">
          <p className="text-white text-lg font-sans py-2 px-4 font-semibold max-w-xs bg-gradient-to-r from-pink-600 to-pink-400 bg-opacity-90 rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105">
            my discord: <b>lbacp.</b>
          </p>
          <br />
          <p className="text-white text-lg py-2 px-4 font-sans font-semibold max-w-xs bg-gradient-to-r from-pink-600 to-pink-400 bg-opacity-90 rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105">
            my youtube: <b>none</b>
          </p>
          <br />
          <p className="text-white text-lg py-2 px-4 font-sans font-semibold max-w-xs bg-gradient-to-r from-pink-600 to-pink-400 bg-opacity-90 rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105">
            my tiktok: <b>none</b>
          </p>
          <br />
          <p className="text-white text-lg py-2 px-4 font-sans font-semibold max-w-xs bg-gradient-to-r from-pink-600 to-pink-400 bg-opacity-90 rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:scale-105">
            my discord server: <b>dont have one</b>
          </p>
        </div>
      </div>
    </div>



      {/* FAQ Section */}
      <div ref={faqRef} className="bg-gradient-to-b from-pink-300 to-pink-600 text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fadeIn animate-pulse hover:scale-110 transition-transform duration-155">about me :3</h2>
        <div className="max-w-4xl mx-auto px-4">
          <ul className="text-gray-400 text-lg space-y-4">
            {faqs.map((faq) => (
              <li
                key={faq.id}
                className="cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className={`bg-gradient-to-r from-pink-300 to-pink-600 p-6 rounded-lg shadow-lg transition-all duration-300 ${expandedFAQ === faq.id ? "bg-gray-600" : ""}`}>
                  <p className={`text-white font-semibold ${expandedFAQ === faq.id ? "text-blue-400" : ""}`}>
                    {faq.question}
                  </p>
                  {expandedFAQ === faq.id && (
                    <p className="text-gray-300 mt-2">{faq.answer}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          </div>
          <br />
          <br />
      </div>
    </div>
  );
}