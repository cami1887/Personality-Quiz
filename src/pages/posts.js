import '../styling/posts.css';

export default function Posts() {
    const posts = [
        {username: 'baddie40234', post: 'I cant stand studio ghibli movies and women with body hair'}, 
        {username: 'MLMgirlie8008', post:'Hey girlies! Hit me up if you want to make money on your own time ;) Let me tell you its soooo easy to join just hit me up if you want to start your own business. You go boss babes <3'},
        {username: 'injail_outsoon', post: 'Shut up.'},
        {username: 'vlogger_mommy1023', post: 'Hey everyone! Just released a new video: PRANKED MY NEWBORN | GROSS on my YT. Support me in the comments :D'},
        {username: 'egghead_007', post: 'egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg egg eggg ggggggggggg'},
        {username: 'PPpoopp', post: 'hi evryone'}
    ]

                    return (
        <div className="all-user-posts" >{posts.map((post)=> 
            <div className="post-container" key={Math.floor(Math.random()*10000)}>
                <img className="user-picture" src="/images/egg-slice.png" alt="user" />
                <div className="user-container">
                    <p className="user-name">{post.username}</p>  
                    <p className="post-contents">{post.post}</p>
                </div>  
            </div> )}
        </div>
    )
}