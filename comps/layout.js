import Footer from "./footer";
import Navbar from "./navbar";


const Layout = ({children}) => {
    return (
        <div className="content relative min-h-screen">
            <Navbar/>
            {children}
            <Footer/>
        </div>
      );
}
 
export default Layout;