import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navigationData=[
    {
        name:"Home",
        path:"/home",
        id:1
    },
    {
        name:"About us",
        path:"/about-us",
        id:2
    },
    {
        name:"Services",
        path:"/services",
        id:3
    },
    {
        name:"Contact",
        path:"/contact",
        id:4
    },
    {
        name:"Blog",
        path:"/blog",
        id:5
    },
]
const Navbar = () => {

    const [open,setOpen] = useState(true)

    const handleMenu=()=>{
        setOpen(!open)
    }

    const links = navigationData.map(route=>
        <li >
            <a href={route.path}>{route.name}</a>
        </li>)
    return (
        <div className='flex justify-between mx-10 mt-10'>
            <div className='flex'>
                <span onClick={handleMenu}>
                    {open? 
                    <Menu className='md:hidden'></Menu>
                    :
                    <X className='md:hidden'></X>}
                </span>
                <ul className={`md:hidden absolute bg-orange-200  duration-1000 ${open?'-top-40':'top-16'}`}>
                    {links}
                </ul>
                <span>My navbar</span>
            </div>
            <div>
            <ul className='md:flex hidden gap-4'>
            {
               links
            }
            </ul>
            </div>
            <div>Sign IN</div>
        </div>
    );
};

export default Navbar;