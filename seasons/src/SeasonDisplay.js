import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, month) => {
   if(month > 2 && month < 9){
      return lat > 0 ? 'summer' : 'winter';
   } else {
      return lat > 0 ? 'winter' : 'summer';
   }
};

const seasonConfig = {
   summer: {
      text: 'Let\'s have some fun in the sun!',
      iconName: 'sun' 
   },
   winter: {
      text: 'Time to go skiing!!',
      iconName: 'snowflake'
   }
};

const SeasonDisplay = (props) => {
   const season = getSeason(props.lat, new Date().getMonth());
   // const text = season === 'WINTER' ? 'Snuggle up and stay warm' : 'Stay hydrated and drink water';
   // const icon = season === 'WINTER' ? 'snowflake' : 'sun';
   const {text, iconName} = seasonConfig[season];

   return (
      <div className={`season-display ${season}`}>
         <i className={`${iconName} icon massive icon-left`}/>
         <h1>{text}</h1>
         <i className={`${iconName} icon massive icon-right`}/>
      </div>
   )
}

export default SeasonDisplay
