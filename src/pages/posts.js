import { useState, useEffect, useRef, useMemo } from 'react';
import { posts } from '../data/post-data.js';
import '../styling/posts.css';

//autoscrolls by selecting the last element posted and scrolling it into view
function autoScroll() {
    let toScroll = document.querySelector('.all-user-posts');
    toScroll?.lastElementChild?.setAttribute('style', `margin-bottom: 300px`);
    toScroll?.lastElementChild?.scrollIntoView(true);
    toScroll?.lastElementChild?.setAttribute('style', `margin-bottom: 0px`);
}

//deals with all sent and received posts
export function Posts() {
    const [count, setCount] = useState(0); //count used to assist with the tracking of incoming posts
    const allPostsRef = useRef(null); //references post container
    let sentLength = posts?.sent.length; //length of sent post array that holds all incoming messages

    //acts as the posting mechanism that is called on every interval
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

    //calls posting function when the length of sent message array is changed (sent message array is changed whenever saveMessage() is called in community.js)
    useEffect(() => { 
        let length = 1;  
        if (length < sentLength) {
            length += 1;
            setTimeout(postUserMessage, 500)
        }
    },[sentLength])

    //first part of a two-step process of simulating a live chat by updating the index after a set interval of time
    useEffect(() => {
        const interval = setInterval(() => {
            if ((count <= posts?.recieved?.length)) {
                setCount(count => count+ 1);
            }
        }, 1500);
        return () => clearInterval(interval); 
    }, [count]);

    //after setting the index above, the index is used to slice the posts array one element at a time and adds that element/post to the DOM
    useMemo(() => {  
        posts?.recieved?.slice(count-1, count).map((post)=> {
        let parent = allPostsRef.current;
        const child = document.createElement("div");
        child.classList.add("received-container");
        child.innerHTML = `
            <img class="user-picture" src="/images/egg-slice.png" alt="user" />
            <div class="user-container">
                <p class="user-name">${post?.username}</p>  
                <p class="received-contents">${post?.post}</p>
            </div>`;
        parent?.appendChild(child)
        autoScroll(); 
        return (
            null
        )
     })
    }, [count])

    return (
        <div className="all-user-posts" ref={allPostsRef}></div>
    )
}
