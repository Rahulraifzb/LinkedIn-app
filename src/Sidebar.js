import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser);

    const RecentItem = (topic) => {
        return (
            <div className="sidebar__reccentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )}

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Overview-Blog-Image-2.jpg" alt="" />
                <Avatar 
                    src={user.photoURL}
                    className="sidebar__avatar" 
                >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar__statNumber">120</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">250</p>
                </div>
            </div>
            <div className="sidebar__button">
                <p>Recent</p>
                {RecentItem("ReactJs")}
                {RecentItem("Python")}
                {RecentItem("Javascript")}
                {RecentItem("Java")}
                {RecentItem("Programming")}
            </div>
        </div>
    )
}

export default Sidebar
