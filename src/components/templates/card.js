import React from 'react';


//Going to be used with routes so it must be exported as a class
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "/login"
    }
  }

  componentDidMount() {
    this.setState({
      location: location.pathname.match(/^\/\w*/),
    })
  }

  componentWillReceiveProps() {
    this.setState({
      location: location.pathname.match(/^\/\w*/),
    })
  }

  render() {
    var toShow = (
    <div>
  	  {/*<TopBar/>*/}
      <div className="col-main">
        {this.props.children}
      </div>
    </div>
    )
    if (this.state.location == "/login") {
      toShow = (
        <div className="col-main" style={{margin: "auto", width: "100%"}}>
          {this.props.children}
        </div>
      )
    }
    return (
      <div>
        {toShow}
      </div>
    )
  }
}
