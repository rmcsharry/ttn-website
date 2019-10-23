import React from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

import styles from './section-column.module.scss'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BlockQuote from "./blockquote";

const Title3 = ({ children }) => <h3 className="is-3">{children}</h3>


const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => {
      console.log('node', node)
      return <Title3>{children}</Title3>
    },
    [BLOCKS.QUOTE]: (node) => {
      console.log(node)
      return <BlockQuote data={node}/>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log('here', node)
      const { title, description, file } = node.data.target.fields
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <img className={styles.image}
            title={ title ? title['en-US'] : null}
            alt={description ?  description['en-US'] : null}
            src={file['en-US'].url}
          />
        case 'application':
          return <a
            alt={description ?  description['en-US'] : null}
            href={file['en-US'].url}
            >{ title ? title['en-US'] : file['en-US'].details.fileName }
          </a>
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
    },
  }
}

const getColumnClasses = (columnType) => {
  switch (columnType) {
    case 'Image':
    case 'Video':
      return "column is-narrow"
    case 'Text':
      return "column content"
  }
}

const SectionColumn = (props) => {
  const column = props.data.column
  const style = {color: `${props.data.color}`}
  return (
    <div className={getColumnClasses(column.columnType)} style={style}>
      {documentToReactComponents(column.childContentfulSectionColumnColumnContentRichTextNode.json, richTextOptions)}
    </div>
  )
}

export default SectionColumn