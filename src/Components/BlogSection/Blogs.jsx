import Card from "./Card"

const Blogs = ({blogData}) => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between items-center" >
  {
    blogData?.map(singleBlog => (
        <div  key={singleBlog.id}>
            <Card singleBlog={singleBlog} ></Card>
        </div>
    ))
  }
    </div>
  )
}

export default Blogs
