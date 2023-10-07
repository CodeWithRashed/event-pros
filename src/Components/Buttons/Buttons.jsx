const MainButton = (props) => {
    let buttonText = props.buttonText

  return (
    <div className="bg-[#FFF] text-color-main font-medium hover:bg-color-primary px-6 py-2 rounded-full inline-block transition-all ease-in-out hover:scale-105"  >
      {buttonText}
    </div>
  )
}


const SubButton = (props) => {
    let buttonText = props.buttonText

  return (
    <div className="bg-color-secondary text-[#FFFFFF] font-medium hover:bg-color-primary px-6 py-2 rounded-full inline-block transition-all ease-in-out hover:scale-105" >
      {buttonText}
    </div>
  )
}

export  {MainButton, SubButton} 
