import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from "react-redux"
import { changeSelection } from "../../actions"


class SelectFilter extends Component {

  handleChange = (selected) => this.props.changeSelection(selected);

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = (storeState) => ({
  selected: storeState.filters.selected,
  articles: storeState.articles
})


export default connect(mapStateToProps, {changeSelection})(SelectFilter);
