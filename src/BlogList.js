const BlogList = ({blogs, title, handleDelete}) => {
    
    return ( 
        <div className="home">
            <h2>{title}</h2>
          {blogs.map((blog)=>(
           <div className="blog-preview" key={blog.id}>
             <h2>
               {blog.title}
               </h2>
               <p>
                written by {blog.author}
                <button onClick={()=>handleDelete(blog.id)}>Delete blog</button>
               </p>
           </div>
          ))}
          
        </div>
     );
}
 
export default BlogList;