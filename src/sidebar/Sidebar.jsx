import './sidebar.css'

export default function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className = 'sidebarItem'>
                <span className = 'sidebarTitle'>About Me</span>
                <img className = 'descPhoto' src = 'https://i.pinimg.com/originals/64/18/af/6418aff010f67dcb5690fd8d16add93d.jpg'></img>
                <p>
                    Sharing recipes, tips, ideas and most importantly - experiences,
                    all through the sense of taste and the art of food
                </p>
            </div>
            <div className = 'sidebarItem'>
            <span className = 'sidebarTitle'>Categories</span>
            <ul className = 'sidebarList'>
                <li className = 'sidebarListItem'>Cooking tips</li>
                <li className = 'sidebarListItem'>Vegan recipes</li>
                <li className = 'sidebarListItem'>Vegeterian recipes</li>
                <li className = 'sidebarListItem'>Recipes for allergies</li>
                <li className = 'sidebarListItem'>Baking</li>
                <li className = 'sidebarListItem'>Gourmet meals</li>
            </ul>
            </div>
        </div>
    )
}
