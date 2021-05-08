import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import TabsJson from './TabsJson.js'
import MultiCity from './MultiCity/multiCity.js'
import RoundTrip from './RoundTrip/roundTrip.js'
import OneWay from './OneWay/oneWay.js'
import './flight.css'

class Flight extends React.Component{
  render() {
    return (
      <Tabs className="mt-4 ml-5">
        <TabList>
        {
          this.props.data.Tabs.map(item =>
            <Tab id={item.id}>
                {item.title}
            </Tab>
          )
        }
        </TabList>
        <TabPanel>
          <RoundTrip data={this.props.data.Content.Round}/>
        </TabPanel>
        <TabPanel>
          <OneWay data={this.props.data.Content.Oneway}/>
        </TabPanel>
        <TabPanel>
          <MultiCity data={this.props.data.Content.Multi}/>
        </TabPanel>
      </Tabs>
    )
  }
}
export default Flight
