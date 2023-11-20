"use client";

import { useRef } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import WordTransition from "./components/styleTitle";
import Image from "next/image";
import { images } from "@/next.config";

export default function Home() {
  return (
    <>
      <div className="items-auto relative">
        <div
          className="ml-4 md:ml-96 mt-16 md:mt-64 absolute items-center justify-center text-center"
          style={{ zIndex: 1 }}
        >
          <Typography variant="h1" className="text-4vw md:text-9vw">
            <WordTransition />
          </Typography>
          <Typography
            variant="h3"
            className="mt-4 text-2vw md:text-3vw lg:text-4vw"
          >
            Our <span className="text-yellow-500">&nbsp;style</span>, our{" "}
            <span className="text-green-500">&nbsp;planet</span>, our future
          </Typography>
        </div>
        <div className="relative bg-cover bg-full h-full v-full flex items-center">
          <video
            className="relative inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            style={{ opacity: 1 }}
          >
            <source src="/cloth.mp4" type="video/mp4" />
            Your browser doesn't support this video.
          </video>
        </div>
        <div
          className="bg-cover bg-full h-full min-h-screen flex rounded"
          style={{ backgroundImage: "url(/4.jpg)" }}
        >
          <div className="bg-cover bg-left w-1/3 min-h-full bg-black/25">
            <div className="bg-vintage-pattern text-white p-8">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
                  <div className="w-3/4 text-left md:w-/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl mt-16 drop-shadow-2xl"
                    >
                      ReVint Vintage Clothing
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 drop-shadow-2xl mt-4"
                    >
                      ReVint Vintage is the best place to recirculate vintage
                      fashion. We want our users to buy and re-sell their
                      quality clothes while contributing to the environment.
                    </Typography>
                    <div className="flex justify-left gap-2">
                      <Link href="/">
                        <Button className="text-sm btn btn-ghost text-white">
                          Explore Gallery
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 bg-fack -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg -mt-16">
                  <div className="flex justify-center">
                    <div className="-mt-8 inline-block rounded-full bg-brown p-4 text-primary shadow-md">
                      <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                      >
                        <path
                          fill="#000000"
                          d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold text-black">
                      Create your own products
                    </h6>
                    <p className="mt-2 mb-4 text-black">
                      Create your products and publish them never been so easy,
                      follow certain parameters and look for potential
                      costumers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg  -mt-24">
                  <div className="flex justify-center ">
                    <div className="-mt-8 rounded-full p-4 shadow-md bg-brown">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox=""
                        color="black"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="h-7 w-8"
                      >
                        <path
                          fill="#00000"
                          d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold text-black">
                      Like products that you like{" "}
                    </h6>
                    <p className="mt-2 mb-4 text-black">
                      Create your own lists of favorites by liking products,
                      then visit them whenever you want!
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg -mt-16">
                  <div className="flex justify-center">
                    <div className="-mt-8 inline-block rounded-full bg-brown  p-4 text-primary shadow-md">
                      <svg
                        viewBox="0 -8 72 72"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9"
                      >
                        <path d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89,0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold text-black">
                      Contact the seller{" "}
                    </h6>
                    <p className="mt-2 mb-4 text-black">
                      Want to buy a product? Contact the seller to know more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto bg-black/25 rounded-xl">
                <h3 className="text-3xl mb-2 font-semibold leading-normal mt-8">
                  About us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  We are software development students who been motivated by the
                  non-existent or non-functional online vintage stores in
                  Uruguay. Our mindset is letting users to feel free by selling
                  their products, the goal is connect those users with people
                  who would want to buy them.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  We are also concerned about the environment, that's why we
                  want to help people to recycle their clothes and give them a
                  second life. So we encourage you to buy and sell your clothes
                  in our website.
                </p>
                <a
                  href="https://github.com/laurolamas/revint-landing-page"
                  className="font-bold text-gray-800 mt-8"
                >
                  Feel free to contact us
                </a>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-green-600">
                  <img
                    alt="..."
                    src="/bag.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-green-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white text-right">
                      Impact
                    </h4>
                    <p className="text-md font-light mt-2 text-white text-right">
                      According to figures from the United Nations Environment
                      Programme, producing a pair of jeans requires 7,500 liters
                      of water, which could quench a person's thirst for seven
                      years. Additionally, throughout the entire process (from
                      growing the cotton to transporting it to the store), 33.4
                      kilograms of carbon equivalent are emitted. If this is
                      just for one pair of jeans, let's consider the
                      environmental cost of what is in all of our closets.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-full bg-cover bg-center opacity-80 mb-20 bg-brown">
          <h1 className="text-3xl font-bold border-t-4 text-prussian border-beige flex items-center justify-center">
            Meet our team
          </h1>
          <div className="w-full flex flex-wrap justify-evenly mb-32 bg-prussian">
            <div className="w-full sm:w-1/2 md:w-96 lg:w-1/4 mb-8 shadow-xl">
              <figure className="px-4 pt-4 flex justify-center">
                <img
                  src="./igni.jpg"
                  alt="foto"
                  className="max-w-[60%] max-h-[60%] h-auto rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-brown flex text-xl items-center justify-center mt-10">
                  Ignacio Llanes - Front-End Developer
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-96 lg:w-1/4 mb-8 shadow-xl">
              <figure className="px-4 pt-4 flex justify-center">
                <img
                  src="./a.jpeg"
                  alt="foto"
                  className="max-w-[60%] max-h-[65%] h-auto rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center mb-8">
                <h3 className="text-brown flex text-xl items-center justify-center mt-10">
                  Facundo Machado - Back-End Developer / Project Manager
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-96 lg:w-1/4 mb-8 shadow-xl">
              <figure className="px-4 pt-4 flex justify-center">
                <img
                  src="./ale.jpeg"
                  alt="foto"
                  className="max-w-[60%] max-h-[60%] h-auto rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-brown flex text-xl items-center justify-center mt-10">
                  Alejandro Rivello - Front-End Developer
                </h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-96 lg:w-1/4 mb-8 shadow-xl">
              <figure className="px-4 pt-4 flex justify-center">
                <img
                  src="./c.jpeg"
                  alt="foto"
                  className="max-w-[60%] max-h-[60%] h-auto rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-brown flex text-xl items-center justify-center mt-10">
                  Lauro Lamas - Full-Stack Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
