import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
   // const images = props.images.map(({id, urls, description}) => {
   const images = props.images.map((image) => {
      return (
         // <img src={urls.regular} alt={description} key={id}/>
         <ImageCard image={image} key={image.id}/>
      )
   });

   return (
      <div className="image-list">
         {images}
      </div>
   )
}

export default ImageList
