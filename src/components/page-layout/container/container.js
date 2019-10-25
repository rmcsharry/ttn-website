import React from 'react'

// handleScroll = e => {
//   let element = e.target
//   if (element.scrollHeight - element.scrollTop === element.clientHeight) {
//     console.log('SCROLL****')
//     // do something at end of scroll
//   }
// }

export default ({ children }) => (
  <div className="main-container" style={{ margin: '0 auto' }} >
    {children}
  </div>
)
