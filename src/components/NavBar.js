import React from "react"
// import{Link} from "react-router-dom"
const NavBar = () => {
     return(
          <div className="navbar navbar-expand-sm">
               <div className="container">
               <a href="#" className="navbar-brand">
                    <img src="/img/Frame.png" />
               </a>

               <ul className="navbar-nav">
                    <li className="nav-item">
                         <a href="#" className="nav-link">Jamiyat haqida</a>
                    </li>
                    {/*  */}
                    <li className="nav-item">
                         <a href="#" className="nav-link">Struktura</a>
                    </li>
                    {/*  */}
                    <li className="nav-item">
                         <a href="#" className="nav-link">Yangiliklar</a>
                    </li>
                    {/*  */}
                    <li className="nav-item">
                         <a href="#" className="nav-link">Elektron murojaatlar</a>
                    </li>
                    {/*  */}
                    <li className="nav-item">
                         <a href="#" className="nav-link">Interaktiv xizmatlar</a>
                    </li>
                    {/*  */}
                    <li className="nav-item">
                         <a href="#" className="nav-link">Aloqa</a>
                    </li>

               </ul>
               </div>
               
          </div>
     )
}

export default NavBar