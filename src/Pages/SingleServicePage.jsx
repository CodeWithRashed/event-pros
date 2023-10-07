import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchData } from "../Hooks/fetchData"

const SingleServicePage = () => {
  const [mainData, setMainData] = useState([])

  let id = useParams()

  useEffect(()=>{
    fetchData()
    .then(data => setMainData(data.services))
    .catch(error => console.log(error))
  }, [])


  const filteredData = mainData.filter((singleData) => singleData.id == id.id);-
  console.log(filteredData)
  
  return (
   
    <div>
      Hello {filteredData[0]?.name}
    </div>
  )
}

export default SingleServicePage
