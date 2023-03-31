import React from 'react';

const Priceing = () => {
    return (
        <div>
            <h2 className="mx-5 my-6 text-3xl font-semibold">We Are <span className='text-rose-600'>Pricing</span></h2>
            <div className='flex flex-col justify-around md:flex-row'>
                <div className='basis-5/12 justify-self-auto ease-linear
                    hover:-translate-y-1 hover:scale-100 hover: duration-200 md:basis-12/12 my-5'>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <p>Silver</p>
                           
                            <h1 className="card-title mt-5">100$</h1>
                            <p className='mb-5'>Multi Project</p>
                           
                            <div className="card-actions">
                            <button className="btn btn-outline btn-success btn-wide">Buy Now</button>
                            </div>
                            <p>Lorem ipsum dolor</p>
                            <p>Pellentesque scelerisque</p>
                            <p>Morbi eu sagittis</p>
                        </div>
                    </div>  
                </div>
                <div className='basis-5/12 justify-self-auto ease-linear 
                hover:-translate-y-1 hover:scale-100 hover: duration-200 md:basis-12/12 my-5'>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 class="underline decoration-wavy text-2xl font-semibold decoration-red-500/30">Gold</h2>
                            <h1 className="card-title mt-5">250$</h1>
                            <p className='mb-5'>Multi Project</p>
                           
                            <div className="card-actions">
                                <button className="btn btn-outline btn-success btn-wide">Buy Now</button>
                            </div>
                            <p>Lorem ipsum dolor</p>
                            <p>Pellentesque scelerisque</p>
                            <p>Morbi eu sagittis</p>
                        </div>
                    </div>  
                </div>
            </div>


        </div>
    );
};

export default Priceing;