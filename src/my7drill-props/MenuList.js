import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

const MenuLink = (props) =>{
    return <a style={{color: "Green" }} href={props.menu.path}>{props.menu.name}</a>
}

const MenuList = () => {

    const menus =[
        {name: "Name", path: "/names"},
        {name: "Firstname", path: "/firstname"},
        {name: "Lastname", path: "/lastname"},
        {name: "Age", path: "/age"},
        {name: "About", path: "/about"},
    ]

    return (
        <div>
            <h4 style={{color:"green"}}>
                Simple link list: </h4>
            <ul>
                {
                menus.map(m => {
                    return(
                        <li>
                            <MenuLink menu={m}/>
                        </li>
                    )
                })
                }
            </ul>
            
        </div>
    );
};

export default MenuList;