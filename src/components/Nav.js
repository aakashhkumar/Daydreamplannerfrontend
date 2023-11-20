import {Link} from "react-router-dom";

export function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3">Design Themes</Link>
            <div class="nav">
                <Link to="/create-design_themes" class="nav-link">Create Design Themes</Link>
                <Link to="/design_themes" class="nav-link">Design Themes List</Link>  {/* design Themes List */}
                
            </div>
        </nav>
    )
}
