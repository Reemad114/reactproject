import React from 'react';

import MainTabNav from '../../../General/TabNav/tabsNav.js';
import MainTabItems from "./MainTabItems.js";
import TabItem from '../../../General/TabNav/tab.js'

import TabNavContent from '../../../General/TabNav/tabsContent.js'
import TabItemContent from '../../../General/TabNav/tabcontent.js'
import TabContent from './tabcontents.js'

import './search.css'

class Search extends React.Component{
  render() {
    const maintabs = MainTabItems.map(item =>
        <TabItem
          className = {item.className}
          aClassName = {item.a.className}
          datatoggle = {item.a.datatoggle}
          href = {item.a.href}
          icon = {item.a.icon}
          title = {item.a.title}
          />
        )
    const tabscontent = TabContent.map(item =>
        <TabItemContent
          id = {item.id}
          className = {item.className}
          content = {item.content}
          />
        )
    return (
      <div className="search shadow mx-5 mt-5 p-2">
        <MainTabNav id="main-tabs" className="nav nav-tabs mt-5" maintabs={maintabs}  />
        <TabNavContent tabscontent={tabscontent} />
      </div>
    )
  }
}
export default Search
