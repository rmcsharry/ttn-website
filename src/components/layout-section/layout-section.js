import React from 'react'
import SectionColumn from './section-column.js'
import styles from './layout-section.module.scss'

const getSectionStyle = colorName => {
  switch (colorName) {
    case 'ttn-red':
      return {
        backgroundColor: 'hsla(350, 83%, 53%, 1)',
        color: 'white'
      };
    case 'ttn-white':
      return {
        backgroundColor: 'white',
        color: 'black'
      };
    case 'ttn-black':
      return {
        backgroundColor: 'black',
        color: 'white'
      }
    default:
      return {
        backgroundColor: 'white',
        color: 'black',
      };
  }
}
const LayoutSection = props => {
  console.log(props, 'SECTION PROPS')
  console.log(props.data.sectionBackgroundColor.colorName);
  console.log(getSectionStyle(props.data.sectionBackgroundColor.colorName))
  let columnCount = props.data.sectionColumns.length
  let columns = props.data.sectionColumns.map(function(column, index){
    return <SectionColumn key={index} data={column} />;
  })

  return (
    <section style={getSectionStyle(props.data.sectionBackgroundColor.colorName)}>
      <div className="container">
        <div className="columns">
          {columns}
        </div>
      </div>
    </section>
  )
}

export default LayoutSection
