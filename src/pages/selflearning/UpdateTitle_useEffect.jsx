import { useState, useEffect } from "react";

function UpdateTitle_useEffect() {
    // 1. callbaks luôn được gọi sau khi component mounted 
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [showGoTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);

            });

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 100){
                setShowGoToTop(true);
            }else{
                setShowGoToTop(false);
            }

    } 
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    //document.title = title
    
    return (
        <div>
            <h1>UpdateTitle_useEffect</h1>
            {/* <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /> */}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {showGoTop && (
                <button style={{position: "fixed", right: 20, bottom: 20, backgroundColor: "pink"}}>Go to Top</button>        
            )}
        </div>
    );
}

export default UpdateTitle_useEffect;
