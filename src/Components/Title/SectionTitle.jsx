
const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="space-y-3 text-center mb-16">
      <h3 className="font-medium text-3xl font-pacifico text-color-main">{subtitle}</h3>
      <h2 className="font-bold text-4xl font-rubik text-color-secondary">{title}</h2>
    </div>
  )
}

export default SectionTitle
