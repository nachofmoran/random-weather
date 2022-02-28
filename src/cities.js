const cities = [
  {
    id: 3433955,
    name: 'Buenos Aires',
    country: 'Argentina',
    zone: 2,
    temp: 100,
    imgId: '2428501',
    lon: -58.381557,
    lat: -34.603683,
    zoom: 10
  },
  {
    id: 5128581,
    name: 'New York',
    country: 'U.S.',
    zone: 1,
    temp: '',
    imgId: '1850129',
    lon: -74.005974,
    lat: 40.712776,
    zoom: 10
  },
  {
    id: 3117735,
    name: 'Madrid',
    country: 'Spain',
    zone: 3,
    temp: '',
    imgId: '191617',
    lon: -3.703790,
    lat: 40.416775,
    zoom: 10
  },
  {
    id: 2279755,
    name: 'Yamoussoukro',
    country: 'Ivory Coast',
    zone: 4,
    temp: '',
    imgId: '6289446',
    lon: -5.273733,
    lat: 6.822211,
    zoom: 8
  },
  {
    id: 170654,
    name: 'Damascus',
    country: 'Syria',
    zone: 5,
    temp: '',
    imgId: '4033533',
    lon: 36.276527,
    lat: 33.513805,
    zoom: 10
  },
  {
    id: 2063523,
    name: 'Perth',
    country: 'Australia',
    zone: 6,
    temp: '',
    imgId: '5257076',
    lon: 115.8604796,
    lat: -31.9527121,
    zoom: 10
  },
  {
    id: 3871336,
    name: 'Santiago',
    country: 'Chile',
    zone: 2,
    temp: '',
    imgId: '4141951',
    lon: -70.6504502,
    lat: -33.4377756,
    zoom: 10
  },
  {
    id: 5391959,
    name: 'San Francisco',
    country: 'U.S.',
    zone: 1,
    temp: '',
    imgId: '1633204',
    lon: -122.419906,
    lat: 37.7790262,
    zoom: 10
  },
  {
    id: 1835847,
    name: 'Seoul',
    country: 'South Korea',
    zone: 5,
    temp: '',
    imgId: '636113',
    lon: 126.9782914,
    lat: 37.5666791,
    zoom: 10
  },
  {
    id: 3995465,
    name: 'Monterrey',
    country: 'Mexico',
    zone: 1,
    temp: '',
    imgId: '3990850',
    lon: -100.315258,
    lat: 25.6802019,
    zoom: 10
  },
  {
    id: 964137,
    name: 'Pretoria',
    country: 'South Africa',
    zone: 4,
    temp: '',
    imgId: '1036572',
    lon: 28.1879444,
    lat: -25.7459374,
    zoom: 10
  },
  {
    id: 2968815,
    name: 'Paris',
    country: 'France',
    zone: 3,
    temp: '',
    imgId: '6544420',
    lon: 2.320041,
    lat: 48.8588897,
    zoom: 10
  },
  {
    id: 2193732,
    name: 'Auckland',
    country: 'New Zealand',
    zone: 6,
    temp: '',
    imgId: '73230',
    lon: 174.7631803,
    lat: -36.852095,
    zoom: 10
  },
  {
    id: 3530597,
    name: 'Mexico City',
    country: 'Mexico',
    zone: 1,
    imgId: '5293010',
    lon: -99.127663,
    lat: 19.428471,
    zoom: 10
  },
  {
    id: 2553604,
    name: 'Casablanca',
    country: 'Morocco',
    zone: 4,
    imgId: '1091462',
    lon: -7.619169,
    lat: 33.592781,
    zoom: 10
  },
  {
    id: 1850147,
    name: 'Tokyo',
    country: 'Japan',
    zone: 5,
    imgId: '4807294',
    lon: 139.691711,
    lat: 35.689499,
    zoom: 10
  },
  {
    id: 2198148,
    name: 'Suva',
    country: 'Fiji',
    zone: 6,
    imgId: '4440185',
    lon: 178.44148,
    lat: -18.141609,
    zoom: 10
  },
  {
    id: 3911925,
    name: 'La Paz',
    country: 'Bolivia',
    zone: 2,
    imgId: '2773765',
    lon: -68.150002,
    lat: -16.5,
    zoom: 10
  },
  {
    id: 3451190,
    name: 'Rio de Janeiro',
    country: 'Brazil',
    zone: 2,
    imgId: '809756',
    lon: -43.2075,
    lat: -22.902781,
    zoom: 10
  },
  {
    id: 3169070,
    name: 'Rome',
    country: 'Italy',
    zone: 3,
    imgId: '4583598',
    lon: 12.4839,
    lat: 41.894741,
    zoom: 10
  },
  {
    id: 3413829,
    name: 'Reykjavík',
    country: 'Iceland',
    zone: 3,
    imgId: '3905006',
    lon: -21.895411,
    lat: 64.135483,
    zoom: 10
  },
  {
    id: 184742,
    name: 'Nairobi',
    country: 'Kenya',
    zone: 4,
    imgId: '2770345',
    lon: 36.833328,
    lat: -1.28333,
    zoom: 10
  },
  {
    id: 1283240,
    name: 'Kathmandu',
    country: 'Nepal',
    zone: 5,
    imgId: '2470062',
    lon: 85.316666,
    lat: 27.716667,
    zoom: 10
  },
  {
    id: 4035413,
    name: 'Apia',
    country: 'Samoa',
    zone: 6,
    imgId: '213160',
    lon: -171.766663,
    lat: -13.83333,
    zoom: 10
  },
  {
    id: 6173331,
    name: 'Vancouver',
    country: 'Canada',
    zone: 1,
    imgId: '3576062',
    lon: -123.119339,
    lat: 49.24966,
    zoom: 10
  },
  {
    id: 3688689,
    name: 'Bogota',
    country: 'Colombia',
    zone: 2,
    imgId: '4457801',
    lon: -74.081749,
    lat: 4.60971,
    zoom: 10
  },
  {
    id: 3067696,
    name: 'Prague',
    country: 'Czech Republic',
    zone: 3,
    imgId: '5302626',
    lon: 14.42076,
    lat: 50.088039,
    zoom: 10
  },
  {
    id: 360630,
    name: 'Cairo',
    country: 'Egypt',
    zone: 4,
    imgId: '6853376',
    lon: 31.24967,
    lat: 30.06263,
    zoom: 10
  },
  {
    id: 1566083,
    name: 'Ho Chi Minh',
    country: 'Vietnam',
    zone: 5,
    imgId: '4384252',
    lon: 106.666672,
    lat: 10.75,
    zoom: 10
  },
  {
    id: 2158177,
    name: 'Melbourne',
    country: 'Australia',
    zone: 6,
    imgId: '951349',
    lon: 144.963318,
    lat: -37.813999,
    zoom: 10
  },
  {
    id: 3553478,
    name: 'Havana',
    country: 'Cuba',
    zone: 1,
    imgId: '4027210',
    lon: -82.383041,
    lat: 23.13302,
    zoom: 10
  },
  {
    id: 3936452,
    name: 'Lima',
    country: 'Peru',
    zone: 2,
    imgId: '5343696',
    lon: -77.0311,
    lat: -12.00389,
    zoom: 10
  },
  {
    id: 2950158,
    name: 'Berlin',
    country: 'Germany',
    zone: 3,
    imgId: '6975808',
    lon: 13.41053,
    lat: 52.524368,
    zoom: 10
  },
  {
    id: 148730,
    name: 'Zanzibar',
    country: 'Tanzania',
    zone: 4,
    imgId: '5135407',
    lon: 39.197929,
    lat: -6.16394,
    zoom: 10
  },
  {
    id: 1796236,
    name: 'Shanghai',
    country: 'China',
    zone: 5,
    imgId: '5852019',
    lon: 121.458061,
    lat: 31.222219,
    zoom: 10
  },
  {
    id: 2147714,
    name: 'Sydney',
    country: 'Australia',
    zone: 6,
    imgId: '3381786',
    lon: 151.207321,
    lat: -33.867851,
    zoom: 10
  },
  {
    id: 5419384,
    name: 'Denver',
    country: 'U.S.',
    zone: 1,
    imgId: '2786472',
    lon: -104.984703,
    lat: 39.739151,
    zoom: 10
  },
  {
    id: 3646738,
    name: 'Caracas',
    country: 'Venezuela',
    zone: 2,
    imgId: '6180006',
    lon: -66.879189,
    lat: 10.48801,
    zoom: 10
  },
  {
    id: 264371,
    name: 'Athens',
    country: 'Greece',
    zone: 3,
    imgId: '12044',
    lon: 23.716221,
    lat: 37.97945,
    zoom: 10
  },
  {
    id: 2240449,
    name: 'Luanda',
    country: 'Angola',
    zone: 4,
    imgId: '5139571',
    lon: 13.23432,
    lat: -8.83682,
    zoom: 10
  },
  {
    id: 1871856,
    name: 'Pyongyang',
    country: 'North Korea',
    zone: 5,
    imgId: '3326425',
    lon: 125.754318,
    lat: 39.033852,
    zoom: 10
  },
  {
    id: 2179537,
    name: 'Wellington',
    country: 'New Zealand',
    zone: 6,
    imgId: '2144119',
    lon: 174.766663,
    lat: -41.283329,
    zoom: 10
  }

];

export default cities;