import { useEffect, useState } from 'react';
import { useLocation,Link } from 'react-router-dom'
import './singlePost.css'
import axios from 'axios'

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post,setPost] = useState({});
    const PF = 'http://localhost:5000/images/';

    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get('/posts/'+path);
            setPost(res.data)
        }
        getPost();
    },[path]);
    return (
        <div className = 'singlePost'>
            <div className = 'singlePostWrapper'>
                {post.photo &&(
                <img className = 'singlePostImage'
                src = {PF + post.photo}>
                </img>
                )}
                <h1 className = 'singlePostTitle'>
                    {post.title}
                    <div className = 'singlePostEdit'>
                        <i className = 'singlePostIcon far fa-edit'></i>
                        <i className = 'singlePostIcon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className = 'singlePostInfo'>
                    <span className = 'singlePostAuthor'>
                        Author: <Link to={`/?user=${post.username}`} className='link'>
                        <b>{post.username}</b> </Link>
                    </span>
                </div>
                <p className = 'singlePostDesc'>
                {post.desc}
                </p>
            </div>
        </div>
    )
}
