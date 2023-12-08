import { useState} from  "react";   
function Product(props)
{
    let [isAvailable, setIsAvailable] = useState("In Stock")
    function OutOfStock()
    {
      setIsAvailable("Out Of Stock");
    }
      return(

        <div className="Product">
            <img className="img" src={props.url}/>
             <h3>{props.name}</h3>
             <p>Rs.{props.price}</p>
             <button>Add</button>
             <p>{isAvailable}</p>
             <button onClick={OutOfStock}>Check Availabily</button>
        </div>
      )


}
export default Product;