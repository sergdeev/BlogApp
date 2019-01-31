import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../actions'
import { articlesListSelector, selectedSelector } from '../../selectors'

class SelectFilter extends Component {
  handleChange = (selected) => this.props.changeSelection(selected)

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

const mapStateToProps = (state) => ({
  selected: selectedSelector(state),
  articles: articlesListSelector(state)
})

export default connect(
  mapStateToProps,
  { changeSelection }
)(SelectFilter)
