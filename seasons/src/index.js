import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

// const App = () => {
//    window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       err => console.log(err)
//    );
//    return <div>Latitude: </div>
// }

class App extends React.Component {
   // constructor(props) {
   //    super(props);

   //    this.state = {
   //       lat: null, // null - the default when we expect the value to be a number
   //       errorMessage: ''
   //    };

   //    // window.navigator.geolocation.getCurrentPosition(
   //    //    (position) => {
   //    //       console.log(position);
   //    //       this.setState({ lat: position.coords.latitude })
   //    //    },
   //    //    err => {
   //    //       console.log(err);
   //    //       this.setState({ errorMessage: err.message });
   //    //    }
   //    // );
   // }

   state = {
      lat: null, // null - the default when we expect the value to be a number
      errorMessage: ''
   };

   componentDidMount() {
      console.log('componentDidMount');

      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ lat: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })
      );
   }

   // componentDidUpdate(){console.log(componentDidUpdate);} // deprecated

   renderContent(){
      if (this.state.errorMessage && !this.state.lat) {
         return <div>Error: {this.state.errorMessage}</div>
      }
      if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat}/>
      }
      return <Spinner message="Finding location..."/>
   }

   render() {
      // return (
      //    <div>
      //       <p>Latitude: {this.state.lat}<br/>Error: {this.state.errorMessage}</p>
      //    </div>
      // )
      // if (this.state.errorMessage && !this.state.lat) {
      //    return <div>Error: {this.state.errorMessage}</div>
      // }
      // if (!this.state.errorMessage && this.state.lat) {
      //    return <SeasonDisplay lat={this.state.lat}/>
      // }
      // return <Spinner message="Finding location..."/>
      return (
         <div>
            {this.renderContent()}
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'))