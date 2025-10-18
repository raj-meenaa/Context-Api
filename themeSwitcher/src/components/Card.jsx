// import React from 'react'

// function Card() {
//   return (
//     <div className="bg-gray-100">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:max-w-none py-4">
//           <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

//           <div className=" space-y-12 lg:space-y-0 lg:gap-x-6">
            
//               <div className="group relative">
//                 <img
//                   alt='sdfjd'
//                   src='https://www.figma.com/community/resource/f70b8507-702f-4663-98c2-f354a6ded497/thumbnail'
//                   className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
//                 />
//                 <h3 className=" text-sm text-gray-500">
//                   <a href="https://www.figma.com/community/resource/f70b8507-702f-4663-98c2-f354a6ded497/thumbnail">
//                     <span className="absolute inset-0" />
//                     Collection 1
//                   </a>
//                 </h3>
//                 <p className="text-base font-semibold text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, porro odit iusto pariatur quae dolorem enim sint laudantium inventore voluptas eveniet numquam nemo nesciunt consequuntur, eaque maxime animi velit deleniti?</p>
//               </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card


import React from 'react'

function Card() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800  transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none py-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Collections</h2>

          <div className="space-y-12 lg:space-y-0 lg:gap-x-6">
            <div className="group relative">
              <img
                alt="sdfjd"
                src="https://www.figma.com/community/resource/f70b8507-702f-4663-98c2-f354a6ded497/thumbnail"
                className="w-full rounded-lg bg-white dark:bg-gray-700 object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="text-sm text-gray-500 dark:text-gray-400">
                <a href="https://www.figma.com/community/resource/f70b8507-702f-4663-98c2-f354a6ded497/thumbnail">
                  <span className="absolute inset-0" />
                  Collection 1
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, porro odit iusto pariatur quae dolorem enim sint laudantium inventore voluptas eveniet numquam nemo nesciunt consequuntur, eaque maxime animi velit deleniti?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
