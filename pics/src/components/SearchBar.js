import React from 'react'

class SearchBar extends React.Component {
   // constructor(props){ // method 1 for solving binding issue
   //    super(props);
   //    this.onFormSubmit = this.onFormSubmit.bind(this);
   // }
   state = {
      term: ''
   };

   // onFormSubmit(e){ // turning this function into arrow function solved binding issue.
   //    e.preventDefault();
   //    console.log(this.state.term);
   // }

   onFormSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state.term);
      this.props.onsubmit(this.state.term);
   }

   render() {
      return (
         <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
               {/* another method for solving binding issue */}
               {/* <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}> */}
               <div className="field">
                  <label>Image Search</label>
                  <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
               </div>
            </form>
         </div>
      )
   }
}

export default SearchBar
