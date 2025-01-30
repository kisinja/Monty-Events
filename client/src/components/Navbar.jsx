import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './Dropdown';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Club Hosting", path: "club-hosting" },
        { name: "Co-operate Events", path: "cooperate-events" },
        { name: "Apartment Life", path: "apartment-life" },
        { name: "Outdoor Events", path: "outdoor-events" },
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="flex justify-between items-center py-3 md:px-12 sticky top-0 bg-gradient-to-b from-black/70 to-[#11393951] w-full px-4 z-[1000]">
            {/* Logo */}
            <div className="flex items-center gap-12">
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        navigate('/');
                        scrollTo(0, 0);
                    }}
                >
                    <span className="text-xl font-bold text-gray-200">MontyEvents</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={`/categories/${item.path}`}
                                className={({ isActive }) =>
                                    `${isActive ? 'underline text-[#247676]' : 'text-gray-400'} hover:text-[#247676]`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-0 left-0 w-full bg-white shadow-lg p-6 md:hidden z-[50]">
                    <ul className="flex flex-col gap-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/categories/${item.path}`}
                                    className={({ isActive }) =>
                                        `${isActive ? 'underline text-[#247676]' : 'text-gray-400'} hover:text-[#247676]`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* User Profile or Sign In */}
            <div className='flex gap-4 items-center'>
                {user ? (
                    <div className="flex gap-1 items-center">
                        <img
                            src="https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg"
                            alt="User"
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
                ) : (
                    <button
                        onClick={() => {
                            navigate('/login');
                            scrollTo(0, 0);
                            setUser(!user);
                        }}
                        className="cursor-pointer bg-[#113939] text-white font-semibold rounded py-2 px-4 focus:scale-90 transition-transform duration-150"
                    >
                        Sign In
                    </button>
                )}

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden z-50">
                    {menuOpen ? <FaTimes className="text-xl text-white" /> : <FaBars className="text-xl text-white" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;