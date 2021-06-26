import './post.css'
import {Link} from 'react-router-dom'

export default function Post({post}){
    const PF = 'http://localhost:5000/images/';
    return(
        <div className = 'post'>
            {post.photo && (
            <img className = 'postImage'
               src = {PF + post.photo}>
            </img>
            )}
            <div className = 'postInfo'>
                <div className = 'postCategories'>{
                    post.categories.map((c)=>(
                        <span className = 'postCategory'>{c.name}</span>
                    ))
                }
            </div>
            <Link to={`/post/${post._id}`} className = 'link'>
            <span className = 'postTitle'>
                {post.title}
            </span>
            </Link>
            </div>
            <p className = 'postDesc'>
            {post.desc}
            </p>
        </div>
    )
}