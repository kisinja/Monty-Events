import { MdArrowDropDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

const Dropdown = ({ isOpen, setIsOpen, user, setUser }) => {

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    return (
        <div className="relative inline-block text-left">
            <MdArrowDropDown
                className="cursor-pointer text-gray-600"
                onClick={toggleDropdown}
                size={23}
            />

            {isOpen && (
                <div className="absolute right-0 w-40 mt-2 bg-[#9333ea] shadow-lg rounded-md">
                    <ul>
                        <li className="px-4 py-2 text-gray-800 hover:bg-[#9333ea]/30 cursor-pointer flex justify-between items-center">
                            👋
                            <span>User</span>
                        </li>
                        <li className="px-4 py-2 text-gray-800 hover:bg-[#9333ea]/30 cursor-pointer flex items-center justify-between">
                            <FaUser className="text-xl" />
                            <span>Account</span>
                        </li>
                        <li
                            className="px-4 py-2 text-gray-800 hover:bg-[#9333ea]/30 cursor-pointer flex items-center justify-between"
                            onClick={
                                () => {
                                    navigate('/login');
                                    scrollTo(0, 0);
                                    setUser(!user);
                                }}
                        >
                            <FaSignOutAlt className="text-xl text-red-500" />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;