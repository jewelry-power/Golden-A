import React from "react";
import { Link } from "react-router-dom";

function Prud() {
  return (
    <div>
      <>
        {/* Container for demo purpose */}
        <div>
          {/* Section: Design Block */}
          <section className="mb-40">
            <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 flex items-center">
                  <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                    <div
                      className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                      style={{
                        background: "hsla(0, 0%, 100%, 0.55)",
                        backdropFilter: "blur(30px)",
                      }}
                    >
                      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12 text-neutral-900">
                        The best offer % <br />
                        <span className="text-neutral-900 ">
                          for your product
                        </span>
                      </h1>
                      <Link
                        className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-neutral-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-neutral-900 hover:shadow-lg focus:bg-neutral-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        to="product"
                        role="button"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <img
                      src="https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="w-96 h-96 rounded-lg shadow-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
        <div className="con1">
          <div class="  lg:grid-cols-3 justify-center">
            {/* <div></div> */}
            <Link to="product" class="group block overflow-hidden">
              <div class="relative h-[350px] sm:h-[450px] w-[300px]">
                <Link to="product">
                  <img
                    src="https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.pexels.com/photos/7407599/pexels-photo-7407599.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
                <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                  39% OFF
                </span>
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
                   src="https://images.pexels.com/photos/12217206/pexels-photo-12217206.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                   alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                     src="  https://images.pexels.com/photos/12865908/pexels-photo-12865908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                     alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
                <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                  39% OFF
                </span>
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
                   src="https://images.pexels.com/photos/5442447/pexels-photo-5442447.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                   alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                     src="https://images.pexels.com/photos/5370706/pexels-photo-5370706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                     alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
                <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                  39% OFF
                </span>
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
                    src="https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.pexels.com/photos/7407599/pexels-photo-7407599.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="product image"
                    class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  />
                </Link>
                <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                  39% OFF
                </span>
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
      </>
    </div>
  );
}

export default Prud;
