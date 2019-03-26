import React, { Component } from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";

class VisitorBlock extends Component {
  state = {
    userValue: "",
  }

  componentDidMount = async() => {
    const results = await APIAccessor.searchItems("performance-static-figures");
    this.setState({userValue: results[0].users});
  }

  render() {
    return(
      <article className="col-xs-12 col-md-10 col-lg-9">
        <div className="analytics-block analytics-block--shorter">
          <div className="analytics-block--figure">
            <span id="analytics--sessions-total">{this.state.userValue}</span>
          </div>
          <div className="analytics-block--subtitle analytics-block--subtitle--inside">
            <p>
              <span className="analytics-block--length">In the last 7 days</span>
            </p>
          </div>
        </div>
      </article>
    )
  }
}

export default VisitorBlock;