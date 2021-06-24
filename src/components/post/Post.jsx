import './post.css'


export default function Post(){
    return(
        <div className = 'post'>
            <img className = 'postImage'
               src = 'https://savvybites.co.uk/wp-content/uploads/2019/07/Soft-chewy-Chocolate-chip-cookies-1-of-1.jpg'>
            </img>
            <div className = 'postInfo'>
                <div className = 'postCategories'>
                <span className = 'postCategory'>Vegan recipes</span>
                <span className = 'postCategory'>Vegeterian recipes</span>
                <span className = 'postCategory'>Baking</span>
            </div>
            <span className = 'postTitle'>
                Vegan Chocolate Chip Cookies Recipe
            </span>
            </div>
            <p className = 'postDesc'>
            Do you ever get home from vacation with a fierce craving for freshly made home baked goods but have exactly no eggs and zero butter in the fridge? If that sounds familiar, this vegan chocolate chip cookie situation is for you!
            </p>
        </div>
    )
}