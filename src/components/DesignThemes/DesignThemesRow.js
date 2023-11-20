import Axios from "axios";
import { Link } from "react-router-dom";

function DesignThemesRow(props){

    const {_id,name, price} = props.obj; 

    const handleClick = () => {
        Axios.delete("http://localhost:4000/weddingRoute/delete-design_themes/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button class="btn btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-Design/"+_id}>Edit</Link>
                     </button> &nbsp;
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default DesignThemesRow;