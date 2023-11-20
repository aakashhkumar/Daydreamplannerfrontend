import { useState } from "react";
import Design_Theme_Form from "./Design_Theme_Form";
import Axios from "axios";

function Createdesign_themes()
{
    const [arr,setArr] = useState([]);   //arr=[Design Name, price]

    //Declaring a argument function
    const getState = (childData) => { //childData
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name: arr[0],price:arr[1]};
        Axios.post("http://localhost:4000/weddingRoute/create-design_themes",data)
        .then((res)=>{
            if(res.status === 200)
                alert("New Design Theme added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));


    }

    return (
        <form  onSubmit={handleSubmit} >
            <Design_Theme_Form getState ={getState} />
        </form>
    )
}
export default Createdesign_themes;