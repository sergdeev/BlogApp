import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from "react-redux";
import { changeDateRange } from "../../actions";

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props;
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range;
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}


const mapStateToProps = (storeState) => ({
  range: storeState.filters.dateRange
});



export default connect(mapStateToProps, {changeDateRange})(DateRange);
