import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setblogs] = useState([
      {title: 'my new website', body: 'lorem ipsum...', author: 'lotiang', id: 1},
      {title: 'welcome to party!', body: 'lorem ipsum...', author: 'oliver', id: 2},
      {title: 'web dev top tips', body: 'lorem ipsum...', author: 'mary', id: 3}
    ]);
    
    const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setblogs(newBlogs);
    }
    
    useEffect(() => {
      console.log('use effect ran')
    }, [])
    return ( 
      <div className="Home">
        <BlogList blogs = {blogs} title = "All Blogs" handleDelete = {handleDelete}/>
        <BlogList blogs = {blogs.filter((blog)=>blog.author=='mary')} title = "mary's Blog"/>
      </div>
        
     );
}
 
export default Home;