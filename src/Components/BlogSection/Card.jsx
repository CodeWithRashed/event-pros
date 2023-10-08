import { Link } from "react-router-dom"

const Card = ({singleBlog}) => {
    const {image, title, id} = singleBlog
  return (
    <Link to={`/blogs/${id}`}>  
    <div className="bg-color-sub/[.10] p-3 rounded-lg h-[350px] shadow-lg hover:scale-[103%] transition-all ease-in-out">
      <div className="image  w-[350px] h-[250px]">
        <img className="object-cover rounded-lg h-full w-full" src={image} alt="" />
      </div>
    <div className="text-content my-3">
        <h1 className="text-lg font-bold">{title}</h1>
    </div>
    </div>
    </Link>
    
  )
}

export default Card
