import React from 'react';


//Going to be used with routes so it must be exported as a class
export default class TopBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="topbar">
        <div className='topbar-section left'>
        </div>
        <div className='topbar-section right'>
          <i className="fa fa-user-circle fa-5x hover" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
