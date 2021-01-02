import React, { Component } from 'react'

export class ImageCard extends Component {
   constructor(props){
      super(props);

      this.state = {spans:0};

      this.imageRef = React.createRef();
   }

   componentDidMount(){
      // console.log(this.imageRef);
      this.imageRef.current.addEventListener('load', this.setSpans);
   }

   setSpans = () => {
      // console.log(this.imageRef.current.clientHeight);
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10 + 1);
      this.setState({ spans });
   }

   
   render() {
      const {urls, description} = this.props.image;

      return (
         <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            <img
               src={urls.regular}
               alt={description}
               ref={this.imageRef}
            />
         </div>
      )
   }
}

export default ImageCard

