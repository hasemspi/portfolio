import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Navber';
import Mobile from './Mobile';
import Profile from './Profile';

const Main = () => {
    return (
        <>

        <div className="flex flex-row md:mt-[100px]" id='theme_color'>
            <div className="basis-full md:mr-8">
                <div className="card card-side bg-base-100 shadow-xl">
                    <Profile></Profile>

                    <div className="basis-full">
                            <Mobile></Mobile>
                            <Outlet></Outlet> 
                    </div>
                </div>
            </div>
             <div className="basis-[40px] hidden sm:hidden"></div>
            <div className="basis-1.5/12">
                <Navber></Navber>
            </div> 
        </div>




        </>
       
        
    );
};

export default Main;