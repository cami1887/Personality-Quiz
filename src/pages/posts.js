import { useState, useEffect, useRef } from 'react';
import { posts } from '../data/post-data.js';
import '../styling/posts.css';

function autoScroll() {
    let toScroll = document.querySelector('.all-user-posts');
    toScroll?.lastElementChild?.setAttribute('style', `margin-bottom: 300px`);
    toScroll?.lastElementChild?.scrollIntoView(true);
}

export function Posts() {
    const [count, setCount] = useState(1);
    const allPostsRef = useRef(null);
    let length = 1;
    let sentLength = posts?.sent.length;
    const [status, setStatus] = useState(false);
    
    function postUserMessage() {
        let parent = allPostsRef?.current;
        const child = document.createElement("div");
        child.classList.add("post-container");
        child.style.marginBottom = '0px';
        child.style.paddingBottom = '0px';
        child.innerHTML = `<img class="user-picture" src="/images/egg-slice.png" alt="user" />
                <div class="user-container">
                    <p class="user-name">urabadperson</p>  
                    <p class="post-contents">${posts?.sent[posts?.sent.length-1]}</p>
                </div>`;
        parent.appendChild(child);
        autoScroll();
        
    }

    useEffect(() => {   
        if (length < sentLength) {
            length += 1;
            setStatus(true);
            postUserMessage();
            console.log("posted")
        }
        else if (length === sentLength) {
            setStatus(false)
            console.log("not posted")
        }
    },[sentLength])

    useEffect(() => {
        let counter = count;
        const interval = setInterval(() => {
          if (counter >= posts.recieved.length) {
            clearInterval(interval);
          } else {
            setCount(count => count + 1);
            counter++;
          }
        }, 1500);
        return () => clearInterval(interval); 
      }, [posts]);

    let postingMessages = posts?.recieved?.slice(count-1, count).map((post)=> {
        console.log("posting replies")
        let parent = allPostsRef?.current;
        const child = document.createElement("div");
        child.classList.add("post-container");
        child.style.marginBottom = '0px';
        child.style.paddingBottom = '0px';
        child.innerHTML = `<img class="user-picture" src="/images/egg-slice.png" alt="user" />
                <div class="user-container">
                    <p class="user-name">${post.username}</p>  
                    <p class="post-contents">${post.post}</p>
                </div>`;
        parent?.appendChild(child);
        autoScroll();
        // return ( 
        //     <div className="post-container" style={{marginBottom: '0px'}} key={Math.floor(Math.random()*10000)}>
        //         <img className="user-picture" src="/images/egg-slice.png" alt="user" />
        //         <div className="user-container">
        //             <p className="user-name">{post.username}</p>  
        //             <p className="post-contents">{post.post}</p>
        //         </div>  
        //     </div>   
        // )
    })

    return (
        <div className="all-user-posts" ref={allPostsRef}>
            {postingMessages}
            
        </div>
    )
}
