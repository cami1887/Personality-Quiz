import { Link } from'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import Posts from './posts.js';

function showEmoji() {
    if (document.querySelector('.emoji-picker').style.display === 'none') {
        document.querySelector('.emoji-picker').style.display = 'inline-block';
    }
    else {
        document.querySelector('.emoji-picker').style.display = 'none';
    }
}

export default function Forum() {
    return (
        <>
            <header>
                <h1>Community Forum</h1> 
                <h2>It's like therapy...except your therapist sucks</h2> 
                <Link to='/login'>Login</Link>
            </header>
            <Posts />
            <div className="status-container">
                <div className="input-container">
                    <input type="text" id="status-bar" placeholder='Post Something'/>
                    <button type="submit">Post</button>
                </div>
                <button onClick={showEmoji}>
                    <img src="/images/clown.png" alt="clown" />
                </button>
                <div className="emoji-picker" style={{display: 'none'}}>
                    <EmojiPicker /> 
                </div>
            </div>
        </>
    )
}