import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import SlideBar from '../SlideBar'
import SlidePage from '../SlidePage'

import './index.css'

const originalSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Main extends Component {
  state = {
    activeSlide: originalSlidesList[0],
    initialSlidesList: originalSlidesList,
    isHeadingClicked: false,
    isParaClicked: false,
  }

  updateActiveSlide = slide => {
    this.setState({activeSlide: slide})
  }

  updateActiveSlideHeading = value1 => {
    const {activeSlide} = this.state
    const id1 = activeSlide.id
    const description1 = activeSlide.description
    const updateHeading = {id1, value1, description1}
    this.updateActiveSlide(updateHeading)
  }

  onClickedHeading = () => {
    this.setState({isHeadingClicked: true})
  }

  updateInitialSlidesList = slide => {
    const {initialSlidesList, activeSlide} = this.state
    const index = initialSlidesList.indexOf(activeSlide)
    console.log(index)
    const prevList = initialSlidesList.slice(0, index + 1)
    const nextList = initialSlidesList.slice(index + 1)
    const newSlide = {id: uuidv4(), ...slide}
    const updatedSlidesList = [...prevList, newSlide, ...nextList]
    console.log(updatedSlidesList)
    this.setState(
      {initialSlidesList: updatedSlidesList},
      this.updateActiveSlide(newSlide),
    )
  }

  render() {
    const {
      activeSlide,
      initialSlidesList,
      isHeadingClicked,
      isParaClicked,
    } = this.state
    return (
      <div className="main-container">
        <Header />
        <div className="body-container">
          <SlideBar
            initialSlidesList={initialSlidesList}
            activeSlide={activeSlide}
            updateActiveSlide={this.updateActiveSlide}
            updateInitialSlidesList={this.updateInitialSlidesList}
          />
          <SlidePage
            activeSlide={activeSlide}
            updateActiveSlideHeading={this.updateActiveSlideHeading}
            isHeadingClicked={isHeadingClicked}
            isParaClicked={isParaClicked}
            onClickedHeading={this.onClickedHeading}
          />
        </div>
      </div>
    )
  }
}
export default Main
