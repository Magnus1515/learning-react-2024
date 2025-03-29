import { useState } from "react"

export default function TwitterFollowCard({ children, userName, initialIsFollowing}){

	const [isFollowing,setIsFollowing] = useState(initialIsFollowing);
	
	const text = isFollowing ? 'Siguiendo' : 'Seguir';
	const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}

	return(
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img className='tw-followCard-avatar' src={`https://unavatar.io/x/@${userName}`} alt="El avata de midudev"/>
				<div className='tw-followCard-info'>
						{children}
						<span className='tw-followCard-infoUserName'>@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
						{text}
				</button>
			</aside>
		</article>
  )
}