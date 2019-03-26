import React, { Component} from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";

class NavBounceBlock extends Component {
  state = {
    navBounceRate: 0,
  }

  componentDidMount = async() => {
    const results = await APIAccessor.searchItems("bounce-rate-landing-pages");
    this.setState({navBounceRate: results[0].bounceRate});
  }

  render() {
    return(
      <article className="col-xs-12 col-sm-6 col-md-4">
        <div className="analytics-block analytics-block--shorter">
          <div className="analytics-block--figure">
            <span id="analytics--sessions-total">
              {this.state.navBounceRate !== 0 ? 
                parseFloat(this.state.navBounceRate).toFixed(0)
                : null
              }
            </span>
            <span>%</span>
          </div>
          <div className="analytics-block--description">
            <p>users bouncing from navigation pages</p>
          </div>
        </div>
        <div className="analytics-block--subtitle">
          <span className="analytics-block--length">Last 7 days, </span>
          <span className="analytics-block--type">bounce rate</span>
        </div>
      </article>
    )
  }
}

export default NavBounceBlock;