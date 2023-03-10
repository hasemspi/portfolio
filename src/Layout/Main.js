import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Navber';
import Profile from './Profile';

const Main = () => {
    return (
        <>
        <div class="flex flex-row my-[100px]">
            <div class="basis-[1250px]">
                <div className="card card-side bg-base-100 shadow-xl">
                    <Profile></Profile>
                        <div className="card-body">
                            <Outlet></Outlet>  
                        </div>
                </div>
            </div>
            <div class="basis-[50px]"></div>
            <div class="basis-[150px]">
                
                <Navber></Navber>
            </div>
        </div>

        </>
       
        
    );
};

export default Main;