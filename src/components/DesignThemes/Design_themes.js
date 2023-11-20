import Axios from "axios";
import { useEffect, useState } from "react";
import DesignThemesRow from "./DesignThemesRow";
function Design_themes(){

    const [arr,setArr] = useState([]);

    useEffect(()=>{
        Axios.get("https://daydreamer-backend.onrender.com/weddingRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  
            return <DesignThemesRow obj={val}/>
        })
    }

    return(
        <table  class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Action</th>

                </tr>
            </thead>
          <tbody>
            {ListItems()}
          </tbody>
        </table>

    )
}
export default Design_themes;
