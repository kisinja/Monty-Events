import { events } from "../../data";
import EventCard from "./EventCard";

const FeaturedEvents = () => {

    return (
        <section>
            <h1>Featured Events</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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