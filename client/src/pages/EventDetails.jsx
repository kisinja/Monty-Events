import { useLocation } from "react-router-dom";
import { events } from "../../data";
import formatEventDate from "../../formatDate";

const EventDetails = () => {
    const location = useLocation();
    const title = location.pathname.split("/")[2].replace("%20", " ");
    const event = events.find((event) => event.title === title);

    return (
        <section className="min-h-screen bg-black text-white py-10 px-6">
            {event ? (
                <div className="max-w-4xl mx-auto">
                    {/* Event Banner */}
                    <div className="relative border-r-4 border-[#fff] rounded-r-lg">
                        <img
                            src={event.imgUrl}
                            alt={event.title}
                            className="w-full h-80 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                            <h1 className="text-3xl font-bold uppercase">{event.title}</h1>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                        <ul className="space-y-2 ">
                            <li>
                                <span className="font-bold">Date:</span> {formatEventDate(event.date)}
                            </li>
                            <li>
                                <span className="font-bold">Location:</span> {event.location}
                            </li>
                            <li>
                                <span className="font-bold">Available Tickets:</span> {event.availableTickets}
                            </li>
                            <li>
                                <span className="font-bold">Ticket Price:</span> {
                                    event.ticketPrice ? `KES ${event.ticketPrice}` : "FREE ENTRY"
                                }
                            </li>
                            <li>
                                <span className="font-bold">Policy:</span> {event.policy}
                            </li>
                        </ul>
                    </div>

                    {/* Gallery */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {event.gallery.map((img, index) => (
                                <div key={index} className="overflow-hidden rounded-lg">
                                    <img
                                        src={img}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover transform hover:scale-110 transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Event not found</h1>
                </div>
            )}
        </section>
    );
};

export default EventDetails;