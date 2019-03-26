import React, { Component} from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";

class SearchRefinementBlock extends Component {
  state = {
    searchRefinementRate: 0,
  }

  componentDidMount = async() => {
    const results = await APIAccessor.searchItems("performance-static-figures");
    this.setState({searchRefinementRate: results[0].percentSearchRefinements});
  }

  render() {
    return(
      <article className="col-xs-12 col-sm-6 col-md-4">
        <div className="analytics-block analytics-block--shorter">
          <div className="analytics-block--figure">
            <span id="analytics--sessions-total">
              {this.state.searchRefinementRate !== 0 ?
                parseFloat(this.state.searchRefinementRate).toFixed(0)
                : null
              }
            </span>
            <span>%</span>
          </div>
          <div className="analytics-block--description">
            <p>users refined their site search</p>
          </div>
        </div>
        <div className="analytics-block--subtitle">
          <p>
            <span className="analytics-block--length">Last 7 days, </span>
            <span className="analytics-block--type">search refinement rate</span>
          </p>
        </div>
      </article>
    )
  }
}

export default SearchRefinementBlock;