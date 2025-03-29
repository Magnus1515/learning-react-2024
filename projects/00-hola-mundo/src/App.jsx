import React from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard.jsx'

export default function App () {
    
    return (
        <>
            <TwitterFollowCard userName="Magnus_151" name="David Eliseo Roldan" initialIsFollowing={true}>
                <strong>David Eliseo Roldan</strong>
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev" name="Miguel Duran">
                <strong>Elon Musk</strong>
            </TwitterFollowCard>
            
        </>
    )
}