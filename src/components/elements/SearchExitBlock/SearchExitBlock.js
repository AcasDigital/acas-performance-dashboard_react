import React, { Component} from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";

class SearchExitBlock extends Component {
  state = {
    searchExitRate: 0,
  }

  componentDidMount = async() => {
    const results = await APIAccessor.searchItems("performance-static-figures");
    this.setState({searchExitRate: results[0].searchExitRate});
  }

  toHierarchy = (eventAction, pageViews, feedbackEventAction, sessionsAllTime) => {
    /* Engaged users - on advice pages for over 10 seconds */
    const engagedUsers = (parseFloat(eventAction[0].uniqueEvents.replace(/,/g, '')) / parseFloat(pageViews[0].uniquePageviews.replace(/,/g, ''))) * 100;
    document.getElementById("analytics--session-duration").innerHTML = engagedUsers.toFixed(0);
  };

  render() {
    return(
      <article className="col-xs-12 col-sm-6 col-md-4">
        <div className="analytics-block analytics-block--shorter">
          <div className="analytics-block--figure">
            <span id="analytics--sessions-total">
              {this.state.searchExitRate !== 0 ?
                parseFloat(this.state.searchExitRate).toFixed(0)
                : null
              }
            </span>
            <span>%</span>
          </div>
          <div className="analytics-block--description">
            <p>users exited the site from search</p>
          </div>
        </div>
        <div className="analytics-block--subtitle">
          <p>
            <span className="analytics-block--length">Last 7 days, </span>
            <span className="analytics-block--length">search exit rate</span>
          </p>
        </div>
      </article>
    )
  }
}

export default SearchExitBlock;