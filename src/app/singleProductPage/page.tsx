import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const singlePage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/2.jpg"
              width={590}
            height={375}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Library Stool Chair
            </h1>
            <button className="flex justify-center items-center w-[120px] text-m text-white bg-blue-600 border-0  rounded-2xl focus:outline-none hover:bg-indigo-600  text-lg">
              $20.00 USD
            </button>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
            <div className="flex justify-center">
              <button className="flex justify-center items-center gap-2 text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <CiShoppingCart className="size-7" />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-4 py-20">
          <span className="text-2xl font-sans font-bold">
            FEATURED PRODUCTS
          </span>
          <div className="flex  -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/7.jpg"
                  width={590}
            height={375}
                />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Library Stool Chaie
                </h3>
                <p className="text-sm font-bold text-black">$99</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/1.jpg"
                  width={590}
            height={375}
                />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Library Stool Chaie
                </h3>
                <p className="text-sm font-bold text-black">$99</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/9.png"
                  width={590}
            height={375}
                />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Library Stool Chaie
                </h3>
                <p className="text-sm font-bold text-black">$99</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/3.jpg"
                  width={590}
            height={375}
                />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Library Stool Chaie
                </h3>
                <p className="text-sm font-bold text-black">$99</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/images/5.jpg"
                  width={590}
            height={375}
                />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Library Stool Chaie
                </h3>
                <p className="text-sm font-bold text-black">$99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default singlePage;
