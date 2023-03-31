import React from 'react';
import AboutWhatitdo from './About/AboutWhatitdo';
import Priceing from './About/Priceing';

const About = () => {
    return (
        <div className="h-[100vh] overflow-auto touch-pan-x rounded-lg bg-neutral-100 p-3 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
          <h2 className="mx-5 my-5 text-3xl font-semibold">About <span className='text-rose-600'>Me</span></h2>
            <div class="flex flex-col gap-5 md:flex-row">
              <div class="basis-8/12 justify-self-auto md:basis-12/12">
                <p className='my-5 mx-5'>Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor
                  nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor,
                    eget imperdiet mauris.
                  Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.</p>
              </div>
              <div class="basis-4/12 justify-self-auto md:basis-12/12 mx-5" >
                <p><span className='text-rose-600 text-1xl font-semibold'>Age</span> 32</p>
                <p><span className='text-rose-600 text-1xl font-semibold'>Residence</span> Bangladash</p>
                <p><span className='text-rose-600 text-1xl font-semibold'>Address</span> 70/c pantopath Greed Road Dhaka</p>
                <p><span className='text-rose-600 text-1xl font-semibold'>e-mail</span> Hasemspi@gmail.com</p>
                <p><span className='text-rose-600 text-1xl font-semibold'>Phone</span> +8801644415771</p>
            </div>
          </div>
       <AboutWhatitdo/>
       <Priceing/>

      </div>
    );
};

export default About;