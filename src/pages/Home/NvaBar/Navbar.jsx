import { Link } from "react-router-dom";


const Navbar = () => {
    const link = <>
        <li> <Link className="rounded-none text-slate-50 font-bold hover:!text-[#A855F7]  hover:border-[#A855F7] hover:border-b-2 transition duration-300" to={'/'}>Home</Link> </li>
        <li> <Link className="rounded-none text-slate-50 font-bold hover:!text-[#A855F7]  hover:border-[#A855F7] hover:border-b-2 transition duration-300" to={'/'}>Find Doctors</Link> </li>
        <li> <Link className="rounded-none text-slate-50 font-bold hover:!text-[#A855F7]  hover:border-[#A855F7] hover:border-b-2 transition duration-300" to={'/'}>About Us</Link> </li>
    </>
    return (
        <div className='bg-[#FFF7E2] '>
            <div className="navbar  max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;