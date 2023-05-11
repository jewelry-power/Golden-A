
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function CardsOnHome() {
      const [products, setProducts] = useState([]);

   
  useEffect(() => {
  axios
    .get('https://fakestoreapi.com/products/category/jewelery')
    .then((response) => {
      const data = response.data;
      setProducts(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

  return (
    <div className="con1">
{products.map((product) => (
 
    <div class="  lg:grid-cols-3 justify-center mt-[6rem]">
    <Link to="product" class="group block overflow-hidden">
      <div class="relative h-[350px] sm:h-[450px] w-[300px]">
        <Link to="product">
          <img
            src={product.image}
            alt="product image"
            class="absolute border-2 border-solid border-gray-500 inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
             src="https://images.pexels.com/photos/12217206/pexels-photo-12217206.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product image"
            class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </Link>
       
      </div>

      <div class="relative bg-white pt-3">
        <p class="text-sm  w-72 text-gray-700 group-hover:underline group-hover:underline-offset-4">
        {product.title}
        </p>
        <p>
          <span class="text-3xl  text-black">$449</span>
          <span class="text-sm text-black line-through">$699</span>
        </p>
      </div>
    </Link>
  </div>
 ))}
    </div>
    // <div className="flex flex-wrap flex-direction justify-center">
    //   {products.map((product) => (
    //     <div key={product.id} className=" con1">
          
    //       <div class="  lg:grid-cols-3 justify-center ">
    //         <div></div>
    //         <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border  shadow-md ">
    //           <Link
    //             class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
    //             to="product"
    //           >
    //             <img
    //               class="peer absolute top-0 right-0 h-full w-full object-cover"
    //               src={product.image}
    //               alt={product.title}
    //               // width={90}
    //               // height={90}
    //             />

    //             <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
    //               39% OFF
    //             </span>
    //           </Link>
    //           <div class="mt-4 px-5 pb-5">
    //             <a href="#">
    //               <h5 class="text-xl tracking-tight text-black">
    //                 {product.title}
    //               </h5>
    //             </a>
    //             <div class="mt-2 mb-5 flex items-center justify-between">
    //               <p>
    //                 <span class="text-3xl font-bold text-black">
    //                   Price: ${product.price}
    //                 </span>
    //                 <br/>
    //                 <span class="text-sm text-black ">
    //                   Category: {product.category}
    //                 </span>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
