
import Meta from "../components/Meta";
import Footer  from "../components/Footer";
import NavBar from "../components/NavBar";
import Body from "../components/Body";




export default function Home() {
  return (
    <div className="bg-[#F7F7F7] w-full h-fit">
      <Meta/>
    {/* next layout to hold the nav and footer */}

<NavBar title="nav"/>
{/* 
 next we create the background and the login component
*/}

<Body/>

<Footer/>
                 



    </div>
  );
}
