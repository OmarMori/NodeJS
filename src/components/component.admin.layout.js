import { Outlet } from "react-router-dom"

function AdminLayout(){
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark">
            <ul>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/admin"}>Acceuil</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/admin/books"}><NavLink>Livres</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/admin/categories"}><NavLink>Contact</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/admin/contact"}>Contact</li>
            </ul>
        </nav>
    )
       <Outlet/> </>

}

export default AdminLayout