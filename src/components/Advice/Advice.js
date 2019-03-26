import React from "react";
// Elements
import AnalyticsRow from "../elements/AnalyticsRow/AnalyticsRow";
import VisitorBlock from "../elements/VisitorBlock/VisitorBlock";
import ActivityBlock from "../elements/ActivityBlock/ActivityBlock";
import FeedbackBlock from "../elements/FeedbackBlock/FeedbackBlock";
import SearchExitBlock from "../elements/SearchExitBlock/SearchExitBlock";
import SearchRefinementBlock from "../elements/SearchRefinementBlock/SearchRefinementBlock";
import EngagementBlock from "../elements/EngagementBlock/EngagementBlock";
import NavBounceBlock from "../elements/NavBounceBlock/NavBounceBlock";

const Advice = () => {
  return (
    <div className="page-main">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Acas beta website performance dashboard</h1>
          </div>
          <AnalyticsRow>
            <div className="col-xs-12">
              <h2>This week's activity</h2>
            </div>
            <ActivityBlock />
          </AnalyticsRow>

          <AnalyticsRow>
            <div className="col-xs-12">
              <h2>Visitors</h2>
            </div>
            <VisitorBlock />
          </AnalyticsRow>

          <AnalyticsRow>
            <div className="col-xs-12">
              <h2>Can people find what they are looking for?</h2>
            </div>
            <FeedbackBlock />
            <SearchExitBlock />
            <SearchRefinementBlock />
          </AnalyticsRow>

          <AnalyticsRow>
            <div className="col-xs-12">
              <h2>Engagement with the site</h2>
            </div>
            <EngagementBlock />
            <NavBounceBlock />
          </AnalyticsRow>
        </div>
      </div>
    </div>
  )
}

export default Advice;
