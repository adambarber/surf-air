var Reflux = require('reflux');

var DestinationStore = Reflux.createStore({
  destinations: [
    {
      name: 'Burbank / LA Metro',
      slug: 'burbank',
      image: 'la-metro',
      loc: {lat: 34.200615, lng: -118.364356},
      airportName: 'Atlantic Aviation',
      address: '10750 Sherman Way Burbank, CA 91505',
      blurb: 'Service to Oakland starts September 14, 2015. Located within the San Fernando Valley, this airport is easily accessible from Hollywood, Pasadena, and downtown L.A.'
    },
    {
      name: 'NAPA',
      slug: 'napa',
      image: 'napa',
      loc: {lat: 38.217231, lng: -122.272952},
      airportName: 'Napa County Airport',
      address: '2030 Airport Rd Napa, CA 94558',
      blurb: 'Located just five miles south of downtown Napa, this airport gives convenient access to the scenic Napa and Sonoma valleys and all Wine Country has to offer.'
    },
    {
      name: 'Sacramento',
      slug: 'sacramento',
      image: 'sacramento',
      loc: {lat: 38.660107, lng: -121.392318},
      airportName: 'McClellan Jet Services',
      address: '3028 Peacekeeper Way McClellan Park, CA 95652',
      blurb: 'Located on Sacramento’s northeast side, McClellan Jet Services gives access to both the bustling state capitol and its surrounding agricultural communities.'
    },
    {
      name: 'Truckee / Lake Tahoe',
      slug: 'truckee',
      image: 'tahoe',
      loc: {lat: 39.318283, lng: -120.143046},
      airportName: 'Truckee Tahoe Airport',
      address: '10356 Truckee Airport Rd. Truckee, CA 96161',
      blurb: 'Tucked away in the scenic mountains of North Lake Tahoe less than two miles east of Truckee, Truckee Tahoe Airport is an ideal destination for outdoor excursions and weekend getaways.'
    },
    {
      name: 'Oakland / SF Bay Area',
      slug: 'oakland',
      image: 'bay-area',
      loc: {lat: 37.729935, lng: -122.212876},
      airportName: 'Landmark Aviation',
      address: '8433 Earhart Rd. Oakland, CA 94621',
      blurb: 'Located on the northeast side of Oakland International Airport, Landmark Aviation is ideally situated for travel in and out of the East Bay, with easy access to downtown San Francisco.'
    },
    {
      name: 'San Carlos / SF Bay Area',
      slug: 'san-carlos',
      image: 'bay-area',
      loc: {lat: 37.510097, lng: -122.250473},
      airportName: 'San Carlos County Airport',
      address: '795 Skyway Rd. San Carlos, CA 94070',
      blurb: 'Surf Air flies to the Bay Area peninsula through the San Carlos County Airport, conveniently located between downtown San Francisco and the heart of Silicon Valley.'
    },
    {
      name: 'Monterey',
      slug: 'monterey',
      image: 'monterey',
      loc: {lat: 36.588201, lng: -121.856906},
      airportName: 'Del Monte Aviation',
      address: '100 Sky Park Drive Monterey, CA 93940',
      blurb: 'This airport is located just three miles southeast of the City of Monterey, accessible to and from Carmel, the Salinas Valley, and Big Sur.'
    },
    {
      name: 'Las Vegas',
      slug: 'las-vegas',
      image: 'las-vegas',
      loc: {lat: 36.080268, lng: -115.171019},
      airportName: 'Signature Flight Support',
      address: '6005 S. Las Vegas Blvd. Las Vegas, NV 89119'
    },
    {
      name: 'Santa Barbara',
      slug: 'santa-barbara',
      image: 'santa-barbara',
      loc: {lat: 34.422421, lng: -119.835457},
      airportName: 'Atlantic Aviation',
      address: '404 Moffet Place Goleta, CA 93117',
      blurb: 'Flying into the Santa Barbara Atlantic Aviation Airport gives you access to beaches, historic sites, business and educational centers, and the picturesque Pacific Coast Highway.'
    },
    {
      name: 'Hawthorne / LA Metro',
      slug: 'hawthorne',
      image: 'la-metro',
      loc: {lat: 33.922263, lng: -118.327310},
      airportName: 'Jet Center Los Angeles',
      address: '12101 S. Crenshaw Blvd. Hawthorne, Ca 90250',
      blurb: "Located on LA's Westside (only three and a half miles from LAX), Hawthorne Airport provides easy access to downtown LA, Beverly Hills, the Silicon Beach, and the world-famous LA coast."
    },
    {
      name: 'Palm Springs',
      slug: 'palm-springs',
      image: 'palm-springs',
      loc: {lat: 33.745641, lng: -116.270726},
      airportName: 'Bermuda Dunes Airport',
      address: '79880 Ave. 42 Bermuda Dunes, CA 92203',
      blurb: 'Centrally located near the Palm Desert, Bermuda Dunes offers a close proximity to Indio and La Quinta within the Coachella Valley and easy access to Joshua Tree National Park.'
    },
    {
      name: 'Carlsbad',
      slug: 'carlsbad',
      image: 'carlsbad',
      loc: {lat: 33.126585, lng: -117.278839},
      airportName: 'Premier Jet',
      address: '2100 Palomar Airport Road Carlsbad, CA 92011',
      blurb: 'Surf Air operates out of Premier Jet at McClellan-Palomar Airport, just three miles from downtown Carlsbad and thirty miles from San Diego.'
    }
  ]
});

module.exports = DestinationStore;