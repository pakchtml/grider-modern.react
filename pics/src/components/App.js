import React from 'react'
// import axios from 'axios'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component {
   state = { images: [] };
   // PROMISES approach
   // onSearchSubmit(term){
   //    axios.get('https://api.unsplash.com/search/photos', {
   //       headers: {
   //          Authorization: 'Client-ID ufedRllwmn2RExikrutNpTCc2Cg0AnHNcLLMXP7XgIw'
   //       },
   //       params: {
   //          query: term
   //       }
   //    }).then(resp => console.log(resp.data.results))
   // }

   onSearchSubmit = async (term) => {
      // const resp = await axios.get('https://api.unsplash.com/search/photos', {
      const resp = await unsplash.get('/search/photos', {
         // headers: {
         //    Authorization: 'Client-ID ufedRllwmn2RExikrutNpTCc2Cg0AnHNcLLMXP7XgIw'
         // },
         params: {
            query: term
         }
      });
      // console.log(resp.data.results);
      this.setState({images: resp.data.results});
   }

   render(){
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onsubmit={this.onSearchSubmit}/>
            {/* Found: {this.state.images.length} images */}
            <ImageList images={this.state.images}/>
         </div>
      )
   }
}

export default App
