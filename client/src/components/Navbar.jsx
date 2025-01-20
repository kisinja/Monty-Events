import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './Dropdown';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="flex justify-between items-center py-3 md:px-12 sticky top-0 bg-white w-full px-4 z-[1000]">
            <div className="flex items-center gap-12">
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        navigate('/');
                        scrollTo(0, 0);
                    }}
                >
                    <span className="text-xl font-bold">MontyEvents</span>

                    {/* <img
                        src="https://ik.imagekit.io/kisinjakit/file%20(3).png?updatedAt=1737386668626" alt="Logo" width={200} height={100} className=' object-cover' /> */}
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <li>
                        <NavLink
                            to="/concerts"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Concerts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sports"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Sports
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/theatre"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Theatre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/festivals"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Festivals
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full bg-white shadow-lg p-6 md:hidden ${menuOpen ? 'block' : 'hidden'
                    } z-[50]`}
            >
                <ul className="flex flex-col gap-4">
                    <li>
                        <NavLink
                            to="/concerts"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Concerts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sports"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Sports
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/theatre"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Theatre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/festivals"
                            className={({ isActive }) =>
                                `${isActive ? 'underline text-black' : 'text-gray-600'} hover:text-black`
                            }
                        >
                            Festivals
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* User or Sign In Button */}
            <div className='flex gap-4'>
                {user ? (
                    <div>
                        <div className="flex gap-1 items-center">
                            <img
                                src="https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg"
                                alt="User Image"
                                className="w-10 h-10 rounded-full border-4 border-[#9333ea] cursor-pointer"
                                title='Signed In as User'
                                onClick={() => setIsOpen(prev => !prev)}
                            />
                            <Dropdown
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                user={user}
                                setUser={setUser}
                            />
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            navigate('/login');
                            scrollTo(0, 0);
                            setUser(!user);
                        }}
                        className="cursor-pointer bg-[#9333ea] text-white font-semibold rounded py-2 px-4 focus:scale-90 transition-transform duration-150"
                    >
                        Sign In
                    </button>
                )}

                {/* Hamburger Icon (Mobile) */}
                <button onClick={toggleMenu} className="md:hidden z-50">
                    {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;