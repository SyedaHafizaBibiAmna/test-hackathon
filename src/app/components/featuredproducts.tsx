import Image from 'next/image'
import React from 'react'

const FeaturedProducts = () => {
  return (
    <div> <div className="container mx-auto px-4 py-20">
    <span className="text-2xl font-sans font-bold">FEATURED PRODUCTS</span>
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
    </div></div>
  )
}

export default FeaturedProducts