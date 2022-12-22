import SlideItem from '../SlideItem'
import './index.css'

const SlideBar = props => {
  const {
    initialSlidesList,
    activeSlide,
    updateActiveSlide,
    updateInitialSlidesList,
  } = props

  const onClickedNew = () => {
    const newSlide = {
      heading: 'Heading',
      description: 'Description',
    }
    updateInitialSlidesList(newSlide)
  }

  return (
    <div className="slide-main-container">
      <button type="button" className="new-button" onClick={onClickedNew}>
        <img
          alt="new plus icon"
          className="new-plus-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
        />
        New
      </button>
      <ol className="slide-bar-ordered-list-container">
        {initialSlidesList.map(eachSlide => (
          <SlideItem
            eachSlide={eachSlide}
            key={eachSlide.id}
            number={initialSlidesList.indexOf(eachSlide)}
            isActive={activeSlide.id === eachSlide.id}
            updateActiveSlide={updateActiveSlide}
          />
        ))}
      </ol>
    </div>
  )
}

export default SlideBar
