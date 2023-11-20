import {  useState } from "react";

function Design_Theme_Form(props){

    const [name,setName] = useState(props.nameValue);
    const [price,setPrice] = useState(props.priceValue);


    const arr = [name,price]; 

    const handleClick = () =>{
        props.getState(arr);
    }



    return(
        <div style={{maxWidth: "40%", margin: "0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName (event.target.value)} class="form-control my-3" placeholder="Enter Design Theme Name" /> 
            <input defaultValue={props.priceValue} onChange={(event)=>setPrice (event.target.value)}  class="form-control my-3" type="number" min="1" pattern="[0-9]+" placeholder="Enter the Price ₹" />

            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Submit</button>
        </div>
    )

}
export default Design_Theme_Form;