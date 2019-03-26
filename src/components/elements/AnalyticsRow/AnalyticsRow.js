import React from "react";
import "./AnalyticsRow.css";

const AnalyticsRow = ({
  children
}) => (
  <section className="row">
    {children}
  </section>
);

export default AnalyticsRow;