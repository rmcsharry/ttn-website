import React from 'react'

import styles from './bar-chart.module.scss'

const BarChart = props => {
  console.log(props)
  let namesList = props.data.chartData.dataPointNames.map(function(name, index){
    return <div key={index} className={styles.columnText}>{name}</div>;
  })
  let valuesList = props.data.chartData.dataPointValues.map(function(value, index){
    return <div key={index} className={styles.columnText}>{value} Kg</div>;
  })

  return (
    <section className={styles.chartSection}>
      <div className={styles.heroFooter}>
        <h6 className="center is-size-7-mobile">{props.data.chartTitle}</h6>
        <div className="columns center no-margin is-size-7-mobile is-size-5-desktop">
          {namesList}
        </div>
        <div className="columns center no-margin is-size-7-mobile is-size-5-desktop has-text-weight-bold">
          {valuesList}
        </div>
      </div>
    </section>
  )
}

export default BarChart