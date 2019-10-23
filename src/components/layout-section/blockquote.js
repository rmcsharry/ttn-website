import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './blockquote.module.scss';

const BlockQuote = (props) => {
  console.log('block', props.data)
  return (
    <div className="content">
      {documentToReactComponents(props.data)}
    </div>
  )
}

export default BlockQuote
