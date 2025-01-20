const HomeSearch = () => {
    return (
        <section className="bg-gradient-to-b from-blue-500 to-purple-600 px-12 flex justify-center items-center w-full h-[500px]">
            <div className="flex flex-col gap-4 items-center w-full">
                <h1 className="text-4xl font-bold text-white">Find Your Next Experience</h1>
                <p className="text-white tracking-wide text-sm font-semibold">Discover and book tickets for the best events near you</p>

                <form className="bg-white relative flex items-center rounded-full w-full md:w-[550px] mt-2 shadow-md shadow-gray-800">
                    <input
                        type="text"
                        placeholder="Search events, venues, or artists..."
                        className="w-full bg-transparent p-3 rounded-l-full pl-4 pr-12 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="cursor-pointer bg-[#9333ea] text-white font-semibold rounded-r-full py-2 px-4 absolute right-0 h-full"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HomeSearch;