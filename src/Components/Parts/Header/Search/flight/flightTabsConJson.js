import RoundTrip from './RoundTrip/roundTrip.js'
import OneWay from './OneWay/oneWay.js'
import MultiCity from './MultiCity/multiCity.js'

const FlightsTabsCon = [
  {
    id : 'roundTrip',
    className : 'tab-pane active',
    content : <RoundTrip />
  },
  {
    id : 'oneway',
    className : 'tab-pane fade',
    content : <OneWay />
  },
  {
    id : 'multiCity',
    className : 'tab-pane fade',
    content : <MultiCity />
  }
]

export default FlightsTabsCon;
