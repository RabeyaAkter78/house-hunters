import AllHouses from "../../AllHouses/AllHouses";
import FeaturedItems from "../../FeaturedItems/FeaturedItems";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <FeaturedItems></FeaturedItems>
         <AllHouses></AllHouses>
        </div>
    );
};

export default Home;