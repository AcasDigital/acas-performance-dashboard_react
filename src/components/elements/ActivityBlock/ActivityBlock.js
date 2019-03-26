import React, { Component} from "react";
import APIAccessor from "../../../utilities/APIAccessor/APIAccessor";
import { Line } from 'react-chartjs-2';

let daysArray = [],
    dailySessionsArray = [];

class ActivityBlock extends Component {
  state = {
    data: {}
  }

  componentDidMount = async() => {
    const results = await APIAccessor.searchItems("sessions-by-day");
    const data = await this.setupWeeklySessions(results);
    this.setState({data: data})
  }

  setupWeeklySessions = (arr) => {

    for(var i = 0; i < arr.length; i++) {
      daysArray.push(arr[i].dayOfWeekName);
      dailySessionsArray.push(parseFloat(arr[i].sessions.replace(/,/g, '')));
    }
  
    const data = {
      labels: daysArray,
      datasets: [{
        label: "Sessions",
        data: dailySessionsArray,
        borderColor: "#008c95",
        backgroundColor: "#008c95",
        fill: false,
        hoverRadius: 6,
        radius: 6,
        maintainAspectRatio: true
      }]
    };

    return data;
  }

  render() {
    return(
      <article className="col-xs-12 col-md-10 col-lg-9">
        <div className="analytics-block">
        {
          this.state.data !== {} ? 
            <Line data={this.state.data} />
          : null
        }
        </div>
      </article>
    )
  }
}

export default ActivityBlock;