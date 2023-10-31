const Bloglist = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map((blog)=>(
                <div className="blogs" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;