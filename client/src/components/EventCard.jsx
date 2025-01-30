import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import formatEventDate from "../../formatDate";

const EventCard = ({ event }) => {
    return (
        <Link to={`/events/${event.title}`} onClick={() => scrollTo(0, 0)}>
            <div className="w-full md:w-[360px] rounded shadow-lg overflow-hidden" style={{ backgroundColor: event.color }}>
                <img src={event.imgUrl} alt={event.title} className="w-full h-[350px] object-cover" />
                <div className="p-4 flex flex-col text-white gap-3">
                    <span className="text-sm opacity-80 flex gap-2 items-center">
                        <CiCalendarDate size={20} />
                        {formatEventDate(event.date)}
                    </span>
                    <h2 className="font-semibold text-lg">{event.title}</h2>
                    {event.description && (
                        <p className="text-sm opacity-80">{event.description}</p>
                    )}
                    <span className="text-sm font-medium">📍 {event.location}</span>
                    <div className="w-full flex justify-between items-center mt-3">
                        {
                            event.ticketPrice ? (
                                <span className="text-sm font-medium">From KES {event.ticketPrice}</span>
                            ) : (
                                <span className="text-sm font-medium">FREE ENTRY</span>
                            )
                        }
                        <button className="py-2 px-4 rounded-lg font-semibold text-white bg-black hover:bg-opacity-80">
                            Buy Tickets
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;