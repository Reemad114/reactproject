import React from 'react';

import Tabs from '../../../../General/TabNav/tabsNav.js';
import TabItem from '../../../../General/TabNav/tab.js'
import FlightsTabs from './flightTabsJson.js'

import TabNavContent from '../../../../General/TabNav/tabsContent.js'
import TabItemContent from '../../../../General/TabNav/tabcontent.js'
import FlightsTabsCon from './flightTabsConJson.js'

import './flight.css'

class Flight extends React.Component{
  render() {
    const flightabs = FlightsTabs.map(item =>
        <TabItem
          className = {item.className}
          aClassName = {item.a.className}
          datatoggle = {item.a.datatoggle}
          href = {item.a.href}
          icon = {item.a.icon}
          title = {item.a.title}
          />
        )
    const tabscontent = FlightsTabsCon.map(item =>
        <TabItemContent
          id = {item.id}
          className = {item.className}
          content = {item.content}
          />
        )
    return (
      <div className="flight mx-5 p-2">
        <Tabs id="flight-tabs" className="nav nav-tabs mt-5" maintabs={flightabs}  />
        <TabNavContent tabscontent={tabscontent} />
      </div>
    )
  }
}
export default Flight
