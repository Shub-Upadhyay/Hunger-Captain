import Dishes from "../components/Dishes"
export default function Menu ({menus})
{
    
    let abc = menus.categories
    console.log("menu data", abc);
    return (
       
        
            
        abc.map(a => 
            <div>
            <img src={a.strCategoryThumb} alr="image" />
            <p>{a.strCategory}</p>
            </div>)
       
      
    )
}

