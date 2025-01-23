import { Link } from "react-router-dom"

const EventCard = ({ event }) => {
    return (
        <Link to={`/${event.title}`}>
            <div className="bg-white w-[360px] rounded shadow">
                <img src={event.imgUrl} alt="" className="w-full h-[350px] object-cover rounded" />
                <div className="p-4 flex flex-col">
                    <span>{event.date}</span>
                    <h2 className="font-semibold text-gray-800">{event.title}</h2>
                    <p className="text-gray-600">{event.description}</p>

                    <div className="w-full flex justify-between items-center">
                        <span className="text-gray-600 text-sm">From KES {event.ticketPrice}</span>

                        <button className="py-2 px-4 rounded-lg font-semibold text-white bg-[#113939] hover:bg-black">
                            Buy Tickets
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventCard
