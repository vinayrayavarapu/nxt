import './index.css'

const SlideItem = props => {
  const {eachSlide, number, isActive, updateActiveSlide} = props

  const bgClass = isActive
    ? 'slide-item-active-bg-container'
    : 'slide-item-bg-container'

  const onClickedSlideItem = () => {
    updateActiveSlide(eachSlide)
  }

  return (
    <li
      className={`slide-item-row-container ${bgClass}`}
      testid={`slideTab${number + 1}`}
    >
      <p className="slide-item-number">{number + 1}</p>
      <button
        type="button"
        className="side-item-button"
        onClick={onClickedSlideItem}
      >
        <div className="slide-item-card-container">
          <h1 className="slide-item-heading">{eachSlide.heading}</h1>
          <p className="slide-item-para">{eachSlide.description}</p>
        </div>
      </button>
    </li>
  )
}

export default SlideItem
