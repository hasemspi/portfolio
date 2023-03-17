import React from 'react';
import { Link } from 'react-router-dom';
import { ImHome,ImUser } from "react-icons/im";
import { FaGraduationCap,FaBriefcase,FaEnvelope } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
const Navber = () => {
    const navbarse =<React.Fragment>
<li>
    <Link to={'/'}>
    <ImHome/>
    </Link>
</li>
<li>
    <Link to={'/about'}>
    <ImUser/>
    </Link>
</li>
<li>
    <Link to={'/resum'}>
    <FaGraduationCap/>
    </Link>
</li>
<li>
    <Link to={'/resum'}>
   <FaBriefcase/>
    </Link>
</li>
<li>
    <Link to={'/'}>
   <FiBook/>
    </Link>
</li>
<li>
    <Link to={'/'}>
   <FaEnvelope/>
    </Link>
</li>
    </React.Fragment>

    return (
        <div className=''>
           <ul className="menu bg-base-100 rounded-box hidden sm:block text-[25px]">
            {navbarse} 
            </ul>



            {/* <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">Open drawer</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {navbarse} 
                    </ul>
                </div>
                </div>  */}
        </div>
    );
};

export default Navber;