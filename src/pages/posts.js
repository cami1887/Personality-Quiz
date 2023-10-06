import { useState, useEffect, useRef, useMemo } from 'react';
import { posts } from '../data/post-data.js';
import '../styling/posts.css';

// scrolls by selecting last post and scrolling into view
function autoScroll() {
    let toScroll = document.querySelector('.all-user-posts');
    toScroll?.lastElementChild?.setAttribute('style', `margin-bottom: 300px`);
    toScroll?.lastElementChild?.scrollIntoView(true);
    toScroll?.lastElementChild?.setAttribute('style', `margin-bottom: 0px`);
}

//all sent and received posts
export function Posts() {
    const [count, setCount] = useState(1); //count used for mapping each received post one slice at a time
    const allPostsRef = useRef(null); //references container of all posts
    let sentLength = posts?.sent.length; //length of sent post array
    
    //posts your message by creating new child and appending to last child of post container
    function postUserMessage() {
        let parent = allPostsRef?.current;
        const child = document.createElement("div");
        child.classList.add("sent-container");
        child.innerHTML = `
                <div class="your-user-container">
                    <p class="your-user-name">urabadperson</p>
                    <p class="sent-contents">${posts?.sent[posts?.sent.length-1]}</p>  
                </div>
                <img class="user-picture" src="/images/egg-slice.png" alt="user" />`;
        parent.appendChild(child);
        posts?.sent?.pop();
        autoScroll();  
    }

    // posts message when the length of sent message array is changed
    useEffect(() => { 
        let length = 1;  
        if (length < sentLength) {
            length += 1;
            setTimeout(postUserMessage, 500)
        }
    },[sentLength])

    useEffect(() => {
        const interval = setInterval(() => {
            if ((count <= posts?.recieved?.length)) {
                setCount(count => count+ 1);
            }
        }, 1200);
        return () => clearInterval(interval); 
    }, [count]);

    // let postingMessages = 
        useMemo(() => {  
            posts?.recieved?.slice(count-1, count).map((post)=> {
            console.log("posting replies");
            let parent = allPostsRef?.current;
            const child = document.createElement("div");
            child.classList.add("received-container");
            child.innerHTML = `
                <img class="user-picture" src="/images/egg-slice.png" alt="user" />
                <div class="user-container">
                    <p class="user-name">${post.username}</p>  
                    <p class="post-contents">${post.post}</p>
                </div>`;
            parent?.appendChild(child)
            autoScroll(); 
            return (
                null
            )
        })
    }, [count])

    return (
        <div className="all-user-posts" ref={allPostsRef}>
            {/* {postingMessages} */}
        </div>
    )
}
