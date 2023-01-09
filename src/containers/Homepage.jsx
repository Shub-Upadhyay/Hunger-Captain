import Buttons from "../components/buttons";
import Image1 from "../images/top-image.png";
import Image2 from "../images/header.png";
import Image3 from "../images/header-bottom-img.png"
import Image4 from "../images/yellow-line.png"
import "../containers/Homepage.css"
import { useEffect , useState } from "react";
import Menu from "../components/Menu";

export default function HomePage()
{
    const [user, setUser] = useState([]);

    const fetchData = () => {
    return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setUser(data));
    }

    useEffect(()=>{
        fetchData();
    },[])

    
    const menus = user
    console.log("homepage" + user);
    
    
    return (
        <div>
        <img className="background-top"  src={Image1} alt="aas"/>
        <img className="headers" src={Image2} alt="aas2" />
        <div className="headerText" >
        <p>Good food is</p>
        <p>The Foundation of</p>
        <p>GENUINE HAPPINESS</p>
        </div>
        <img className="header-bottom" src={Image3} alt="ass3" />
        <p className="sub-heading" >Our Most Popular Recipes</p>
        <img className="yellow-line"  src={Image4} alt="aas4" />
        <p className="short-des" >Try our Most Delicious food and it usually take minutes to deliver!</p>



        <Buttons name={"All"}/>
        <Buttons name={"HOT"}/>
        <Buttons name={"COLD"}/>
        <Buttons name={"BAGEL"}/>
        <br/> <br/>
        <br/> <br/>
        <br/> <br/>
        <br/> <br/>
        <br/> <br/> 

        <div className="dishItems">
        <Menu menus={menus} />
        </div>

        

        

        </div>
    );
}