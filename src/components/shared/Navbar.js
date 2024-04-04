"use client";



const Navbar = () => {

    const menus = (
        < >


            <li className="current">
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#works">Works</a>
            </li>
            <li>
                <a href="#blog">Blog</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>

        </>
    );






    return (
        <div>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div className=" text-white font-bold ">
                                {menus}
                            </div>
                        </ul>
                    </div>
                    <div className="text-red-400 mt-4 mb-4 text-2xl font-serif">
                        JOHN  <span className='text-white'>DOE</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1">
                        <div className="flex text-white font-bold ">
                            {menus}
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;