import { useLocation } from "react-router-dom";
import { events } from "../../data.js";
import EventCard from "../components/EventCard.jsx";

const Category = () => {
    const location = useLocation();
    const category = decodeURIComponent(location.pathname.split("/")[2]); // Handles spaces properly
    const items = events.filter(event => event.category === category);

    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/d2/78/71/d2787164c66218c9baad1f26b41244d0.jpg')",
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Hero Section */}
            <div className="relative text-white py-20 text-center bg-black/50">
                <h1 className="text-5xl font-bold capitalize">{category}</h1>
                <p className="mt-2 text-lg">Discover exciting events in {category}!</p>
            </div>

            {/* Event Grid */}
            <div className="relative container mx-auto px-5 py-10">
                {items.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg shadow-lg"
                                style={{ backgroundColor: item.color || "#1a1a1a" }} // Use event color dynamically
                            >
                                <EventCard event={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-300 text-lg mt-10">
                        No events found in this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Category;