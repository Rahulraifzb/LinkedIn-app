import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import {db} from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const  [input,setInput] = useState("")
    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id:doc.id,
                data:doc.data(),
            })))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoURL:user.photoURL || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                            type="text" 
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                        <button type="submit" 
                        onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* Input Option */}
                    <InputOption 
                        Icon={ImageIcon}
                        title="Photo" 
                        color="#70b5f9"
                    />
                    <InputOption 
                        Icon={SubscriptionsIcon}
                        title="Video" 
                        color="#7FC15E"
                    />
                    <InputOption 
                        Icon={EventNoteIcon}
                        title="Event" 
                        color="#E7A33E"
                    />
                    <InputOption 
                        Icon={CalendarViewDayIcon}
                        title="Write article" 
                        color="#F5987E"
                    />
                </div>
            </div>
            {/* Posts */}
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoURL}}) => {
                return (
                    <Post 
                        key={id}
                        name={name} 
                        description={description}
                        message={message}
                        photoURL={photoURL}
                    />
                ) 
            })}
            </FlipMove>
        </div>
    )
}

export default Feed
