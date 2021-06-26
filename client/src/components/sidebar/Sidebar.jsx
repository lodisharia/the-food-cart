import axios from 'axios';
import { useEffect, useState } from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        const getCategories = async ()=>
        {
            const res = await axios.get('/categories')
            setCategories(res.data)
        }
        getCategories();
    },[])
    return (
        <div className = 'sidebar'>
            <div className = 'sidebarItem'>
                <span className = 'sidebarTitle'>About Us</span>
                <img className = 'descPhoto' src = 'https://i.pinimg.com/originals/64/18/af/6418aff010f67dcb5690fd8d16add93d.jpg'></img>
                <p>
                    Sharing recipes, tips, ideas and most importantly - experiences,
                    all through the sense of taste and the art of food
                </p>
            </div>
            <div className = 'sidebarItem'>
            <span className = 'sidebarTitle'>Categories</span>
            <ul className = 'sidebarList'>
                {categories.map((c)=>(
                    <Link to = {`/?category=${c.name}`} className = 'link'>
                    <li className = 'sidebarListItem'>{c.name}</li>
                    </Link>
                ))}
            </ul>
            </div>
        </div>
    )
}
