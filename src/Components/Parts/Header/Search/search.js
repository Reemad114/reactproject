import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Flight from './flight/flight.js'
import Hotel from './hotel/hotel.js'
import Car from './car/car.js'
import './search.css'

class Search1 extends React.Component{
  render() {
    return (
      <Tabs className="search mt-4 p-2">

        <TabList>
          {this.props.data.Maintabitems.map(item =>
            <Tab id={item.id}>
                {item.title} <i className={item.icon}></i>
            </Tab>
          )}
        </TabList>

        <TabPanel><Flight data={this.props.data.Flight}/></TabPanel>
        <TabPanel><Hotel data={this.props.data.Hotel}/></TabPanel>
        <TabPanel><Car data={this.props.data.Car}/></TabPanel>

      </Tabs>
    )
  }
}
export default Search1
