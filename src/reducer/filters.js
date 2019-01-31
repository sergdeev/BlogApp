import { CHANGE_DATE_RANGE, CHANGE_SELECTION } from '../constants'

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SELECTION:
      return { ...filtersState, selected: payload.selected }

    case CHANGE_DATE_RANGE:
      return { ...filtersState, dateRange: payload.dateRange }
  }

  return filtersState
}
