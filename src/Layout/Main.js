import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Navber';
import Profile from './Profile';

const Main = () => {
    return (
        <>

        <div class="flex flex-row my-[100px]">
            <div class="basis-11/12">
                <div className="card card-side bg-base-100 shadow-xl">
                    <Profile></Profile>
                        <div className="card-body">
                            <Outlet></Outlet>  
                        </div>
                </div>
            </div>
            <div class="basis-[40px]"></div>
            <div class="basis-1.5/12">
                <Navber></Navber>
            </div>
        </div>




        </>
       
        
    );
};

export default Main;