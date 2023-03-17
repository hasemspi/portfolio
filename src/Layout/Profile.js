import React from 'react';

import {FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='hidden sm:block'>
            <div className="text-center artboard bords_profile rounded-l-lg">
                <div className="mt-[70px] mb-5 avatar online">
                    <div className="w-40 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="max-w-md">
                    
                    <h1 className="text-3xl text-[36px] text-[#fff] font-semibold">Abul Hasem</h1>
                    <p className="py-2 text-[18px] text-[#fff]">Full Stock Developer</p>
                    <ul className="menu menu-horizontal bg-base-100 rounded-box mt-1">
                        <li>
                            <a>
                            <FaFacebook/>
                            </a>
                        </li>
                        <li>
                            <a>
                            <FaTwitter/>
                            </a>
                        </li>
                        <li>
                            <a>
                            <FaLinkedin/>
                            </a>
                        </li>
                    </ul>
                    <div>
                    <button className="btn btn-secondary mt-[80px]">Download CV</button>
                    </div>
                    
                    <footer className="footer footer-center p-10 text-base-content rounded">
                    <div>
                        <p>Copyright © 2023 - All right reserved</p>
                    </div>
                    </footer>
                </div>
            </div>
        </div>
        
    );
};

export default Profile;