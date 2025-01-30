import { useState } from "react";
import loginImage from "../assets/img.jpeg";

const Login = () => {
    const [pageType, setPageType] = useState("login");
    const [loading, setLoading] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const data = pageType === "login"
                ? { email, password }
                : { fullName, email, mobileNumber, password, confirmPassword };
            console.log(data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
                {/* Image Section */}
                <div className="hidden md:block w-1/2">
                    <img src={loginImage} alt="Login" className="h-full w-full object-cover" />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
                    <h1 className="font-semibold text-2xl mb-4 text-gray-800">
                        {pageType === "login" ? "Login" : "Register"}
                    </h1>

                    <form className={` ${pageType === "register" ? 'grid grid-cols-2 gap-4' : 'flex flex-col justify-between'} w-full`} onSubmit={handleSubmit}>
                        {pageType === "register" && (
                            <>
                                <div>
                                    <label className="block mb-1">Full Name</label>
                                    <input type="text" placeholder="Enter your full name" onChange={(e) => setFullName(e.target.value)} className="border p-3 rounded w-full focus:outline-none placeholder:text-sm" />
                                </div>
                                <div>
                                    <label className="block mb-1">Mobile Number</label>
                                    <input type="tel" placeholder="Enter your phone number" onChange={(e) => setMobileNumber(e.target.value)} className="border p-3 rounded w-full focus:outline-none placeholder:text-sm" />
                                </div>
                            </>
                        )}

                        <div className={`${pageType === "login" ? 'mb-8' : ''}`}>
                            <label className="block mb-1">Email</label>
                            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="border p-3 rounded w-full focus:outline-none placeholder:text-sm" />
                        </div>
                        <div>
                            <label className="block mb-1">Password</label>
                            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="border p-3 rounded w-full focus:outline-none placeholder:text-sm" />
                        </div>

                        {pageType === "register" && (
                            <div className="col-span-2">
                                <label className="block mb-1">Confirm Password</label>
                                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="border p-3 rounded w-full focus:outline-none placeholder:text-sm" />
                            </div>
                        )}

                        <small className="col-span-2 mt-4">
                            {pageType === "login" ? "Don't have an account?" : "Already have an account?"} &nbsp;
                            <a className="cursor-pointer underline text-blue-600" onClick={() => setPageType(pageType === "login" ? "register" : "login")}>
                                {pageType === "login" ? "Register" : "Login"}
                            </a>
                        </small>

                        <div className="col-span-2 flex justify-center mt-4">
                            <button type="submit" className="bg-[#113939] px-4 py-2 rounded-md text-white font-semibold" disabled={loading}>
                                {loading ? "Loading..." : pageType === "login" ? "Login" : "Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;