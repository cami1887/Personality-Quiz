import EmojiPicker from 'emoji-picker-react';
import Posts from './posts.js';
import '../styling/community.css'

function showEmoji() {
    if (document.querySelector('.emoji-picker').style.display === 'none') {
        document.querySelector('.emoji-picker').style.display = 'inline-block';
    }
    else {
        document.querySelector('.emoji-picker').style.display = 'none';
    }
}

const input = document.getElementById('status-bar');
let message = '';
function postMessage() {
    message = input.value;
    console.log(typeof message)
}

export default function Forum() {
    return (
        <>
            <header>
                    <h1>Community</h1> 
                   <div className='title-two'>
                        <h1>Forum</h1>
                        <h2>It's kind of like therapy, <br/>if your therapist sucked </h2> 
                   </div>
            </header>
            
            <Posts />

            {/* {message && <div className="posted-message-container">
                <div className="post-container" key={Math.floor(Math.random()*10000)}>
                    <img className="user-picture" src="/images/egg-slice.png" alt="user" />
                    <div className="user-container">
                        <p className="user-name">badGuy666</p>  
                        <p className="post-contents">{message}</p>
                    </div>  
                </div> 
            </div>} */}

            <div className="status-container">
                    <input type="text" id="status-bar" placeholder='Post Something'/>
                <button onClick={postMessage}>
                    <img src="/images/send.png" alt="send" />
                </button>
                <button onClick={showEmoji}>
                    <img src="/images/egg-emoji.png" alt="clown" />
                </button>
                <div className="emoji-picker" style={{display: 'none'}}>
                    <EmojiPicker /> 
                </div>
            </div>
        </>
    )
}