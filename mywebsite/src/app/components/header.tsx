import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { GiSofa } from 'react-icons/gi';
import { LuShoppingCart } from 'react-icons/lu';
import { MdCheck } from 'react-icons/md';
import { PiNumberCircleTwoFill } from 'react-icons/pi';


// const Upperheader = () => {
//   return (
//     <div className="flex items-center justify-between h-12 w-full bg-[#272343] px-4 md:px-12 lg:px-24">
//       {/* Left Section */}
//       <span className="text-[#a399d4] flex items-center gap-2 text-sm">
//         <MdCheck className="text-[#a399d4]" />
//         Free shipping on all orders over $50
//       </span>

//       {/* Right Section */}
//       <div className="text-[#a399d4] flex items-center gap-6 text-sm">
//         <select className="bg-[#272343] text-[#a399d4]   px-2 py-1 rounded">
//           <option value="english">Eng</option>
//         </select>
//         <a href="/faqs" className="hover:underline">
//           Faqs
//         </a>
//         <span className="flex items-center gap-1">
//           <AiOutlineExclamationCircle />
//           <a href="/help" className="hover:underline">
//             Need Help
//           </a>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Upperheader;


// middle header
export const Middleheader = () => {
    return (
      <div className="flex items-center justify-between h-16 w-full mt-6 px-4 md:px-12 lg:px-24 bg-gray-100">
        {/* Left Section */}
        <header className="flex items-center">
          <a
            href="/"
            className="flex items-center title-font font-medium text-gray-900"
          >
            <GiSofa className="text-blue-600 text-3xl mr-2" />
            <span className="text-2xl md:text-3xl font-semibold text-[#272343]">
              Comforty
            </span>
          </a>
        </header>
  
        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            {/* <LuShoppingCart className="text-gray-600 text-2xl" /> */}
            <span className="text-[#272343] flex justify-center items-center gap-3 text-sm md:text-base ml-2">
            <LuShoppingCart className="text-[#272343] text-2xl" />
                Cart
            <PiNumberCircleTwoFill className=" text-blue-600 text-3xl" />
            </span>
            {/* <PiNumberCircleTwoFill className="absolute -top-2 -right-2 text-blue-600 text-xl" /> */}
          </div>
        </div>
      </div>
    );
  };

//   lower header

// export const Lowerheader = () => {
//     return (
//       <div className="flex items-center justify-between h-16 w-full mt-6 px-4 md:px-12 lg:px-24 bg-white shadow">
//         {/* Navigation Section */}
//         <header className="flex items-center">
//           <div className="text-[#736c90] flex flex-wrap px-1">
//             <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
//               <a href="/" className="hover:text-blue-600 transition-colors duration-300">
//                 Home
//               </a>
//               <a href="/shop" className="hover:text-blue-600 transition-colors duration-300">
//                 Shop
//               </a>
//               <a href="/products" className="hover:text-blue-600 transition-colors duration-300">
//                 Products
//               </a>
//               <a href="/pages" className="hover:text-blue-600 transition-colors duration-300">
//                 Pages
//               </a>
//               <a href="/about" className="hover:text-blue-600 transition-colors duration-300">
//                 About
//               </a>
//             </nav>
//           </div>
//         </header>
  
//         {/* Contact Section */}
//         <div className="flex items-center gap-2">
//           <span className="text-[#736c90] text-sm md:text-base">
//             Contact:
//           </span>
//           <span className="text-[#272343] font-medium text-sm md:text-base">
//             (808) 555-0111
//           </span>
//         </div>
//       </div>
//     );
//   };
  


// export const Lowerheader = () => {
//   return (
//     <div className= "flex items-center justify-between h-16 w-full mt-6 px-4 md:px-12 lg:px-24 bg-white shadow">
//     <header className="flex items-center">
//       <div className="container text-[#736c90] mr-3 flex flex-wrap px-1 flex-col md:flex-row items-center">   
//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
//           <a className="mr-5 hover:text-blue-600">Home</a>
//           <a className="mr-5 hover:text-blue-600">Shop</a>
//           <a className="mr-5 hover:text-blue-600">Products</a>
//           <a className="mr-5 hover:text-blue-600">Pages</a>
//           <a className="mr-5 hover:text-blue-600">About</a>
//         </nav>
//       </div>
//     </header>
//     {/* right section */}
//     <div className="flex items-center gap-2">
//             <span className="text-[#736c90] text-sm md:text-base ml-2">
//                 Contact:
//             </span>
//             <span className='text-[#272343]'>
//             (808) 555-0111
//             </span>
           
          
//         </div>
//   </div>
//   )
// }


