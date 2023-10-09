import { useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { Posts } from './posts.js';
import { posts } from '../data/post-data.js';
import '../styling/community.css';

export default function Forum() {
    const statusBarRef = useRef(null);
    const [text, setText] = useState('');

    function addEmoji(props) { 
        let stuff = statusBarRef.current.value;
        setText(stuff + props.emoji);
    }

    function changeText() {
        let stuff = statusBarRef.current.value;
        setText(stuff);
    }

    function showEmoji() {
        if (document.querySelector('.emoji-picker').style.display === 'none') {
            document.querySelector('.emoji-picker').style.display = 'inline-block';
        }
        else {
            document.querySelector('.emoji-picker').style.display = 'none';
        }
    }

    function saveMessage() {
        let input = statusBarRef.current.value;
        
        if (input) {
            posts.sent.push(text);
            setText('');
        }
    }

    return (
        <>
            <header>
                <h1>Community</h1> 
                <div className='title-two'>
                    <h1>Chat</h1>
                    <h2>For The Immoral, <br/>...by The Immoral </h2> 
                </div>
            </header>
            
            <Posts />
            
            <div className="status-container">
                <input type="text" onChange={changeText} value={text}  ref={statusBarRef} placeholder='Post Something'/>
                <button onClick={saveMessage}>
                    <img src="/images/send.png" alt="send" />
                </button>
                <button onClick={showEmoji}>
                    <img src="/images/egg-emoji.png" alt="clown" />
                </button>
                <div className="emoji-picker" style={{display: 'none'}}>
                    <EmojiPicker  onEmojiClick={addEmoji} emoji={''} /> 
                </div>
            </div>
        </>
    )
}

