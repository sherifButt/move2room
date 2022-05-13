import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
const rooms = [
   {
      id: 1,
      name: "Charming Studio < 10 Miles to Wells' Beaches",
      pricePerNight: '$140',
      description:
         'A friendly atmosphere and natural delights await your visit to the town of Wells! Stay at this well-equipped 1-bath studio and enjoy easy access to several beaches, including Wells Beach and Drakes Island Beach, as well as Rachel Carson National Wildlife Refuge - the best spot for wildlife viewing just 8 miles away. Not to mention, with the downtown area just 10 minutes from the vacation rental,',
      address: '4667 Bicetown Street, New York, NY, 10004',
      href: '#',
      rating: 3,
      reviewCount: 38,
      imageSrc:
         'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
      imageAlt:
         'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
   },
   // More rooms...
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}
const Home = () => {
   return (
      <section id='rooms' className='bg-white'>
         <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold text-gray-900'>
               Stay in New York
            </h2>
            <h3 className="my-4">← Back to Search</h3>

            <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
               {rooms.map(product => (
                  <div key={product.id}>
                     <div className='relative'>
                        <div className='relative w-full h-72 rounded-lg overflow-hidden'>
                           <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className='w-full h-full object-center object-cover'
                           />
                        </div>
                        <div className='relative mt-4'>
                           <h3 className='text-sm font-medium text-gray-900'>
                              {product.name}
                           </h3>
                           <p className='mt-1 text-sm text-gray-500'>
                              {product.description.substring(0, 80)}
                              ...
                           </p>
                        </div>

                        <div className='mt-3 flex flex-col'>
                           <p className='sr-only'>
                              {product.rating} out of 5 stars
                           </p>
                           <div className="flex items-center gap-2">
                             <div className='flex items-center'>
                                {[0, 1, 2, 3, 4].map(rating => (
                                   <StarIcon
                                      key={rating}
                                      className={classNames(
                                         product.rating > rating
                                            ? 'text-yellow-400'
                                            : 'text-gray-200',
                                         'flex-shrink-0 h-5 w-5'
                                      )}
                                      aria-hidden='true'
                                   />
                                ))}
                             </div>
                             <p className='mt-1 text-sm text-gray-500'>
                                ({product.reviewCount} reviews)
                             </p>
                           </div>
                        </div>

                        <div className='absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden'>
                           <div
                              aria-hidden='true'
                              className='absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50'
                           />
                           <p className='relative text-lg font-semibold text-white'>
                              {product.pricePerNight}{' '}
                              <span className='font-light text-sm text-gray-300 '>
                                 / night
                              </span>
                           </p>
                        </div>
                     </div>
                     <div className='mt-6'>
                        <a
                           href={product.href}
                           className='relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200'>
                           View Details
                           <span className='sr-only'>
                              , {product.name}
                           </span>
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Home
