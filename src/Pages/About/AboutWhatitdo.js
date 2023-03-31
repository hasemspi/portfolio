import React from 'react';
import { FaStore } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
const AboutWhatitdo = () => {
    return (
        <div>
              <h2 className="mx-5 my-5 text-3xl font-semibold">What I  <span className='text-rose-600'>Do</span></h2>
            <div class="flex flex-col gap-5 md:flex-row">
              <div class="basis-6/12 justify-center md:basis-12/12 mx-5 ">
               <FaStore color='red' size={50}/>
                 <h2 className='text-2xl font-bold py-3'>Ecommerce</h2>
                 <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, 
                  sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
              </div>
              <div class="basis-6/12 justify-center md:basis-12/12 mx-5">
               <FiEdit2 color='red' size={50}/>
                 <h2 className='text-2xl font-bold py-3'>Copywriting</h2>
                 <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, 
                  sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
              </div>
            
          </div>
            <div class="flex flex-col gap-5 my-5 md:flex-row">
              <div class="basis-6/12 justify-center md:basis-12/12 mx-5">
               <FaStore color='red' size={50}/>
                 <h2 className='text-2xl font-bold py-3'>Ecommerce</h2>
                 <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, 
                  sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
              </div>
              <div class="basis-6/12 justify-center md:basis-12/12 mx-5">
               <FiEdit2 color='red' size={50}/>
                 <h2 className='text-2xl font-bold py-3'>Copywriting</h2>
                 <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, 
                  sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
              </div>
          </div>
        </div>
    );
};

export default AboutWhatitdo;