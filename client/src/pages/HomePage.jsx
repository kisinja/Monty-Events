import FeaturedEvents from "../components/FeaturedEvents"
import Header from "../components/Header"
import HomeSearch from "../components/HomeSearch"

const HomePage = () => {
    return (
        <div>
            <Header />
            <HomeSearch />
            <FeaturedEvents />
        </div>
    )
}

export default HomePage
