import Footer from "../component/Footer";
import Menubar from "../component/Menubar";


const MasterLayout = ({children}) => {
    return (
      <div>
        <Menubar />
        <div>{children}</div>

        <Footer/>
      </div>
    );
};

export default MasterLayout;