import { useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { Posts } from './posts.js';
import { posts } from '../data/post-data.js';
import Eggy from './eggy.js';
import '../styling/community.css';

export default function Forum() {
    const statusBarRef = useRef(null);
    const emojiRef = useRef(null);
    const emojiIconRef = useRef(null);
    const [text, setText] = useState('');

    //sets input to include selected emoji(s)
    function addEmoji(props) { 
        let stuff = statusBarRef.current.value;
        setText(stuff + props.emoji);
    }

    //whenever the input is changed, the state of the text is updated and if enter is pressed the message is saved
    function changeText(e) {
        let stuff = statusBarRef.current.value;
        setText(stuff);
        if (stuff && (e.key === 'enter')) {
            saveMessage();
        }
    }

    //shows emoji picker interface
    function showEmoji() {
        if ((emojiRef.current.style.display === 'none') && (emojiIconRef.current.style.display !== 'none')) {
            emojiRef.current.style.display = 'inline-block';
        }
        else {
            emojiRef.current.style.display = 'none';
        }
    }

    //message is pushed to the sent array in the post-data object so that posts.js can display it
    function saveMessage() {
        let input = statusBarRef.current.value;
        if (input) {
            posts.sent.push(text);
            setText('');
        }
    }

    //saves message when enter key is pressed
    function pressedEnter(e) {
        if (e.key === 'Enter') {
            saveMessage();
        }
    }

    return (
        <>
            <header>
                <h1><span className='title-span'>EGGY</span>COMMUNE</h1> 
            </header>
            <Posts />
            <Eggy style={{padding: '20px'}} position="top-right-chat" message="I'm egghausted. Maybe these other guys can babysit you instead. I'll be meditating until we move on.... ohhhhhhhhhhhmlet"/>
            <div className="status-container">
                <input type="text" onChange={changeText} onKeyDown={pressedEnter} value={text}  ref={statusBarRef} placeholder='Type Something'/>
                <button onClick={saveMessage}>
                    <img src="/images/send.png" alt="send message" />
                </button>
                <button onClick={showEmoji}>
                    <img ref={emojiIconRef} className="emoji-picker-icon" src="/images/egg-emoji.png" alt="click to choose emoji" />
                </button>
                <div className="emoji-picker" ref={emojiRef} style={{display: 'none'}}>
                    <EmojiPicker onEmojiClick={addEmoji} emoji={''} /> 
                </div>
            </div>
        </>
    )
}

