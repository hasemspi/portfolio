import React from 'react';

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
                    <h1 className="text-3xl font-bold">Abul Hasem</h1>
                    <p className="py-2">Full Stock Developer</p>
                    <button className="btn btn-primary">Download CV</button>
                </div>
            </div>
        </div>
        
    );
};

export default Profile;