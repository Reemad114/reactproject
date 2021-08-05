import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MultiCity from './MultiCity/multiCity.js'
import RoundTrip from './RoundTrip/roundTrip.js'
import OneWay from './OneWay/oneWay.js'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import './flight.css'

class Flight extends React.Component{
  render() {
    return (
      <div className="row">
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
            <RoundTrip />
          </TabPanel>
          <TabPanel>
            <OneWay />
          </TabPanel>
          <TabPanel>
            <MultiCity />
          </TabPanel>
        </Tabs>
        <div className="col-2">
          <label>Class:</label>
          <Dropdown
            baseClassName="rdn"
            className="class"
            clearIcon={<span className="clear">X</span>}
            isClearable
            matcher={function noRefCheck(){}}
            menu="div"
            onChange={function noRefCheck(){}}
            onClose={function noRefCheck(){}}
            onOpen={function noRefCheck(){}}
            options={[
              'Economy',
              'First Class',
              'Business Class'
            ]}
            value="Economy"
          />
        </div>
        <div className="col-2">
          <label>Passengers:</label>
          <Dropdown
            baseClassName="rdn"
            className="passenger"
            clearIcon={<span className="clear">X</span>}
            isClearable
            matcher={function noRefCheck(){}}
            menu="div"
            onChange={function noRefCheck(){}}
            onClose={function noRefCheck(){}}
            onOpen={function noRefCheck(){}}
            options={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6'
            ]}
            value="1"
          />
        </div>
      </div>
    )
  }
}
export default Flight
