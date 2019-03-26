import React, { Component} from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";

class EngagementBlock extends Component {
  state = {
    engagementRate: "",
  }

  componentDidMount = async() => {
    this.parseUrls(["engagement-event-action", "sessions-pageviews-advice"]);
  }

  parseUrls = async(urlArray) => {
    await Promise.all(
      [
        APIAccessor.searchItems(urlArray[0]), 
        APIAccessor.searchItems(urlArray[1]), 
      ]
    ).then(results => {
      this.toHierarchy(results[0], results[1]);
    })
  }

  toHierarchy = (eventAction, pageViews) => {
    /* Engaged users - on advice pages for over 10 seconds */
    var engagedUsers = (parseFloat(eventAction[0].uniqueEvents.replace(/,/g, '')) / parseFloat(pageViews[0].uniquePageviews.replace(/,/g, ''))) * 100;
    this.setState({
      engagementRate: engagedUsers.toFixed(0)
    });
  };

  render() {
    return(
      <article className="col-xs-12 col-sm-6 col-md-4">
        <div className="analytics-block analytics-block--shorter">
          <div className="analytics-block--figure">
            <span id="analytics--sessions-total">
              {this.state.engagementRate !== 0 ?
                this.state.engagementRate 
              : null}
            </span>
            <span>%</span>
          </div>
          <div className="analytics-block--description">
            <p>users engaged with advice content</p>
          </div>
        </div>
        <div className="analytics-block--subtitle">
          <span className="analytics-block--length">Last 7 days, </span>
          <span className="analytics-block--type">time on page at least 10 seconds</span>
        </div>
      </article>
    )
  }
}

export default EngagementBlock;