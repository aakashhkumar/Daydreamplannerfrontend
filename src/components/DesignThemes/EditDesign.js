import { useParams } from "react-router-dom";
import Design_Theme_Form from "./Design_Theme_Form";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditDesign(){

    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", price: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://daydreamer-backend.onrender.com/weddingRoute/update-design_themes/"+id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, price } = res.data;
                    setInitialValue({ name, price});
                }

                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { name: newData[0], price: newData[1]};
        Axios.put("https://daydreamer-backend.onrender.com/weddingRoute/update-design_themes/"+id,data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));


    }

    return(
        <form onSubmit={handleSubmit}>
            <Design_Theme_Form   getState={getState}
                                 nameValue={initialValue.name}
                                priceValue={initialValue.price} />
        </form>
    )
}
export default EditDesign;
