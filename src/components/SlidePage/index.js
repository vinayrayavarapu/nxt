import './index.css'

const SlidePage = props => {
  const {
    activeSlide,
    isHeadingClicked,
    isParaClicked,
    onClickedHeading,
    updateActiveSlideHeading,
  } = props

  const onHeadingClicked = () => {
    onClickedHeading()
  }

  const onLostFocusHeading = event => {
    updateActiveSlideHeading(event.target.value)
  }

  const onLostFocusPara = () => {}

  const onClickedPara = () => {}

  return (
    <div className="slide-page-main-container">
      <div className="slide-page-card-container">
        {isHeadingClicked ? (
          <input
            className="slide-page-input-heading"
            type="text"
            value={activeSlide.heading}
            onChange={onLostFocusHeading}
          />
        ) : (
          <h1 className="slide-page-heading" onClick={onHeadingClicked}>
            {activeSlide.heading}
          </h1>
        )}

        {isParaClicked ? (
          <input
            type="text"
            className="slide-page-input-para"
            value={activeSlide.description}
            onBlur={onLostFocusPara}
          />
        ) : (
          <p className="slide-page-para" onClick={onClickedPara}>
            {activeSlide.description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SlidePage
