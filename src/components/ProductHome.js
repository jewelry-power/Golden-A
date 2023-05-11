// import React, { Component } from 'react'

import React from 'react'
import { Link } from "react-router-dom";

function Pro() {
  return (
    <div>
      <section>
     
        <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8 mt-[8rem]">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-neutral-900 ">
                  Our Collection product's
                </h2>
                <p className="mt-4 text-black-600 ">
                  Jewelry is a form of personal adornment that encompasses a
                  wide range of decorative items typically worn by individuals.
                  It often includes accessories such as necklaces, bracelets,
                  earrings, rings, brooches, and watches, which are crafted
                  using various precious metals, gemstones, and other materials.
                </p>
                <Link
                  to="product"
                  className="mt-8  inline-block rounded border border-neutral-900 bg-neutral-900 px-12 py-3 bg-neutral-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-neutral-900 hover:shadow-lg focus:bg-neutral-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  View more
                </Link>
              </div>
            </div>
          </div>
        </div>
      
        <div className="con1  mt-[10rem]">
          <div class="  lg:grid-cols-3 justify-center">
            {/* <div></div> */}
            <Link to="product" class="group block overflow-hidden">
              <div class="relative h-[350px] sm:h-[450px] w-[300px]">
                <Link to="product">
                  <img
                  src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                  src="https://images.pexels.com/photos/234798/pexels-photo-234798.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
               
              </div>

              <div class="relative bg-white pt-3">
                <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  golden-Whissper-Jeweelry-Ring's{" "}
                </h3>
                <p>
                  <span class="text-3xl  text-black">$449</span>
                  <span class="text-sm text-black line-through">$699</span>
                </p>
              </div>
            </Link>
          </div>
          <div class="  lg:grid-cols-3 justify-center">
            {/* <div></div> */}
            <Link to="product" class="group block overflow-hidden">
              <div class="relative h-[350px] sm:h-[450px] w-[300px]">
                <Link to="product">
                  <img
                  src="https://images.pexels.com/photos/4019460/pexels-photo-4019460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                  src="https://images.pexels.com/photos/10037655/pexels-photo-10037655.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
                
              </div>

              <div class="relative bg-white pt-3">
                <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                golden Whissper-Jewelry Necklace{" "}
                </h3>
                <p>
                  <span class="text-3xl  text-black">$449</span>
                  <span class="text-sm text-black line-through">$699</span>
                </p>
              </div>
            </Link>
          </div>
          <div class="  lg:grid-cols-3 justify-center">
            {/* <div></div> */}
            <Link to="product" class="group block overflow-hidden">
              <div class="relative h-[350px] sm:h-[450px] w-[300px]">
                <Link to="product">
                  <img
                  src="https://images.pexels.com/photos/5442475/pexels-photo-5442475.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                     src="https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                     alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
              
              </div>

              <div class="relative bg-white pt-3">
                <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  golden-Whissper-Jeweelry-Ring's{" "}
                </h3>
                <p>
                  <span class="text-3xl  text-black">$449</span>
                  <span class="text-sm text-black line-through">$699</span>
                </p>
              </div>
            </Link>
          </div>
          <div class="  lg:grid-cols-3 justify-center">
            <Link to="product" class="group block overflow-hidden">
              <div class="relative h-[350px] sm:h-[450px] w-[300px]">
                <Link to="product">
                  <img
                  src="https://images.pexels.com/photos/12290109/pexels-photo-12290109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.pexels.com/photos/7407599/pexels-photo-7407599.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
              
              </div>

              <div class="relative bg-white pt-3">
                <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  golden-Whissper-Jeweelry-Ring's{" "}
                </h3>
                <p>
                  <span class="text-3xl  text-black">$449</span>
                  <span class="text-sm text-black line-through">$699</span>
                </p>
              </div>
            </Link>
          </div>
          </div>

       
        
</section>
        </div>
       
               
             
  );
}

export default Pro