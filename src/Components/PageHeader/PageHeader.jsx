import FooterBg from "../../assets/footer_bg.jpg";
const PageHeader = ({title}) => {
  return (
    <div>
      <header
        className="header bg-color-sub/[.15] mt-3 h-[20vh] text-[#FFF]  flex justify-center items-center"
        style={{ backgroundImage: `url('${FooterBg}')` }}
      >
       <h1 className="font-bold text-6xl text-color-primary drop-shadow-lg">{title}</h1>
      </header>
    </div>
  )
}

export default PageHeader
