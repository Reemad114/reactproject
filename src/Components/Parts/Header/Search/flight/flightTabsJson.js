const FlightsTabs = [
  {
    className : 'nav-item',
    a : {
      className : 'nav-link active',
      datatoggle : 'tab',
      href: '#roundTrip',
      icon : 'fas fa-plane-departure',
      title : 'RoundTrip'
    }
  },
  {
    className : 'nav-item',
    a : {
      className : 'nav-link',
      datatoggle : 'tab',
      href: '#oneway',
      icon : 'fas fa-hotel',
      title : 'OneWay'
    }
  },
  {
    className : 'nav-item',
    a : {
      className : 'nav-link',
      datatoggle : 'tab',
      href: '#multiCity',
      icon : 'fas fa-car',
      title : 'MultiCity'
    }
  }
]

export default FlightsTabs;
