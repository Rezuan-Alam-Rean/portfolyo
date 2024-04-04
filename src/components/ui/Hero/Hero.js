import React, { useEffect, useState } from 'react';

const Hero = ({ about }) => {
    const [socialHandles, setSocialHandles] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
            const data = await response.json();
            setSocialHandles(data.user.social_handles.filter(item => item.enabled === true));
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row md:max-h-screen md:px-28 px-8 p-5 bg-black text-white gap-20  ">
            <div className='w-full lg:w-1/2  p-4 md:mt-12 '>
                <div className="text-white text-lg mt-4 font-semibold max-w-2xl">
                    HELLO, <span className='text-red-400 '>MY NAME IS</span>
                    <div className="text-red-400 mt-4 mb-4 text-8xl font-serif">
                        JOHN  <span className='text-white'>DOE</span>
                    </div>
                    <span className="text-xl mt-6">
                        I am a  {about?.title}

                    </span>
                </div>
                <p className="text-white  mt-2 text-base font-thin whitespace-pre-wrap ">
                    {about?.description}
                </p>

                <div className="flex flex-row justify-start mt-5 mb-5 space-x-4">
                    {socialHandles?.map((social, index) => (
                        <a key={index} className="w-8 h-8" target="_blank" rel="nofollow" href={social.url}>
                            <img className="w-full h-full object-cover rounded-full" src={social.image.url} alt={social.platform} />
                        </a>
                    ))}
                </div>
                   <div className=' mt-7 ' >
                    
                <button className="btn btn-outline btn-error mr-6">Get Started</button>
                <button className="btn btn-outline btn-error">Get Started</button>
                    </div>     
            </div>
            <div className='w-full lg:w-1/2 p-4 relative   '>
                <img className="w-full h-full   object-cover rounded-full" src={about?.avatar?.url} />


                <div className="absolute bottom-28 left-0   bg-black border border-red-400 px-8 p-2 rounded-full ">
                    <span className="text-lg font-bold">
                        {about?.exp_year }
                    </span>
                    <span className="text-base">
                    {""}  Years of <br /> <strong className='text-red-400' >Experience</strong>
                    </span>
                </div>
                <div className="absolute bottom-5 right-0  bg-black border border-red-400 px-8 p-2 rounded-full ">
                    <span className="text-lg font-bold">{about?.some_total }</span>
                    <span className="text-base">
                       {""} Completed <br /> <strong className='text-red-400' >Projects</strong>
                    </span>
                </div>


            </div>
        </div>
    );
};

export default Hero;
