import React from 'react'
import { Link } from 'gatsby'
import '../../styles/global.scss'
import Container from './container/container'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'

class PageLayout extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { location, setNavbarBackground, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    console.log('PAGE', this.props)
    return (
      <Container>
        <Navigation data={this.props.setNavbarBackground}/>
          {children}
        <Footer />
      </Container>
    )
  }
}

export default PageLayout
