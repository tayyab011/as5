import Blog from "../component/Blog";
import Hero from "../component/Hero";

import MasterLayout from "../MasterLayout/MasterLayout";
import BlogPage from "./BlogPage";


const Home = () => {
    return (
      <MasterLayout>
      <Hero/>  
      <Blog/>
      </MasterLayout>
    );
};

export default Home;