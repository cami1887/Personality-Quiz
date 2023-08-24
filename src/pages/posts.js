import user from './user.png';

export default function Posts() {
    const posts = [
        {username: 'baddie40234', post: 'I cant stand studio ghibli movies and women with body hair'}, 
        {username: 'MLMgirlie8008', post:'Hey girlies! Hit me up if you want to make money on your own time through Amway ;) Let me tell you its soooo easy to join just hit me up if you want to start your own business. You go boss babes <3'},
        {username: 'baddie40234', post: 'I cant stand studio ghibli movies and women with body hair'},
        {username: 'baddie40234', post: 'I cant stand studio ghibli movies and women with body hair'},
        {username: 'baddie40234', post: 'I cant stand studio ghibli movies and women with body hair'},
        {username: 'baddie40234', post: 'I cant stand studio ghibli movies and women with body hair'}
    ]

    return (
        <div>{posts.map((post)=> 
            <div key={Math.floor(Math.random()*10000)}>
            <div> 
               <img src={user} alt="User" />
               <p>{post.username}</p>  
            </div>
            <p>{post.post}</p>
            </div>
            )}
        </div>
    )
}