// import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import React from "react";

// import BlockQuote from "./Blockquote";

// const richTextOptions = {
//   renderNode: {
//     [BLOCKS.EMBEDDED_ASSET]: (node) => {
//       const { title, description, file } = node.data.target.fields;
//       const mimeType = file['en-US'].contentType
//       const mimeGroup = mimeType.split('/')[0]

//       switch (mimeGroup) {
//         case 'image':
//           return <img
//             title={ title ? title['en-US'] : null}
//             alt={description ?  description['en-US'] : null}
//             src={file['en-US'].url}
//           />
//         case 'application':
//           return <a
//             alt={description ?  description['en-US'] : null}
//             href={file['en-US'].url}
//             >{ title ? title['en-US'] : file['en-US'].details.fileName }
//           </a>
//         default:
//           return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
//       }
      
//     },
//     [BLOCKS.EMBEDDED_ENTRY]: (node) => {
//       const fields = node.data.target.fields;
//       switch (node.data.target.sys.contentType.sys.id) {
//         case 'blockquote':
//           return <div>
//             <BlockQuote quoteText={fields.quoteText['en-US']} quoter={fields.quoter['en-US']}/>
//           </div>
//         default:
//           return <div>??????????????? {title} </div>

//       }
//     },
//     [BLOCKS.EMBEDDED_ENTRY]: (node) => {
//       const fields = node.data.target.fields;
//       switch (node.data.target.sys.contentType.sys.id) {
//         case 'blockquote':
//           return <div>
//             <BlockQuote quoteText={fields.quoteText['en-US']} quoter={fields.quoter['en-US']}/>
//           </div>
//         default:
//           return <div>??????????????? {title} </div>

//       }
//     },    
//   }
// }

// let ContentfulRichText = function(text){
//   return documentToReactComponents(JSON.parse(text.text), richTextOptions)
// }

// export default ContentfulRichText