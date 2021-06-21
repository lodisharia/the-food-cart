import './header.css'

export default function Header() {
    return (
        <div className = 'header'>
            <div className = 'headerTitles'>
                <span className = 'headerTitleOne'>Blog1</span>
                <span className = 'headerTitleTwo'>Blog2</span>
            </div>
            <img 
            className = 'headerImage'
            src = 'https://blog.americanmedical-id.com/wp-content/uploads/2016/04/Food-Blog.jpg'
        ></img>
        </div>
    )
}
