import React from 'react';


//Going to be used with routes so it must be exported as a class
export default class TopBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="topbar">
        <div className='topbar left'>
        </div>
        <div className='topbar right'>
        </div>
      </div>
    )
  }
}
