import React, { Component} from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";

class FeedbackBlock extends Component {
  state = {
    feedbackRate: "",
  }

  componentDidMount = async() => {
    this.parseUrls(["feedback-event-action", "sessions-all"]);
  }

  parseUrls(urlArray) {
    Promise.all(
      [
        APIAccessor.searchItems(urlArray[0]), 
        APIAccessor.searchItems(urlArray[1])
      ]
    ).then(results => {
      this.toHierarchy(results[0], results[1])
    });
  }

  toHierarchy = (feedbackEventAction, sessionsAllTime) => {
    /* Feedback form engagement */
    let sessions = sessionsAllTime[0].sessions.replace(/,/g, '');
    sessions = parseFloat(sessions);

    const feedbackEvents = parseFloat(feedbackEventAction[0].totalEvents);
    const feedbackRate = ((feedbackEvents / sessions) * 100).toFixed(1);
    this.setState({
      feedbackRate: feedbackRate
    });
  }
     
  render() {
    return(
      <article className="col-xs-12 col-sm-6 col-md-4">
        <div className="analytics-block analytics-block--shorter">
          <div className="analytics-block--figure">
            <span id="analytics--sessions-total">
            {
              this.state.feedbackRate !== "" ? 
                this.state.feedbackRate
              : null
            }
            </span>
            <span>%</span>
          </div>
          <div className="analytics-block--description">
            <p>users said we didn't answer their question</p>
          </div>
        </div>
        <div className="analytics-block--subtitle">
          <p>
            <span className="analytics-block--length">All time results, </span>
            <span className="analytics-block--type">feedback form</span>
          </p>
        </div>
      </article>
    )
  }
}

export default FeedbackBlock;