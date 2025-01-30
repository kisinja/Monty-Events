import { events } from "../../data";
import EventCard from "./EventCard";

const FeaturedEvents = () => {

    return (
        <section className="mt-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Featured Events</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
                {
                    events.map((item, index) => (
                        <EventCard event={item} key={index} />
                    ))
                }
            </div>
        </section>
    );
};

export default FeaturedEvents;