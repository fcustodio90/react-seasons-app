import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonText = season === 'winter' ? 'Burr, it is chilly!': 'Lets hit the beach!'
  const seasonIcon = season === 'winter' ? 'snowflake' : 'sun'

  return (
    <div>
      <i className={`${seasonIcon} icon`}></i>
      <h1>{seasonText}</h1> 
      <i className={`${seasonIcon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay