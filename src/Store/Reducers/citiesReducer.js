const initState = [
    {
      tagLine: 'San Juan, Puerto Rico',
      city: 'San Juan',
      state: 'PR',
      country: 'United States',
      img: '/assets/img/cities/puerto-rico.jpg',
      uri: '/cities/san-juan',
    },
    {
      tagLine: 'San Francisco, California',
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
      img: '/assets/img/cities/san-francisco.jpg',
      uri: '/cities/san-francisco',
    },
    {
      tagLine: 'Santiago, Chile',
      city: 'Santiago',
      state: '',
      country: 'Chile',
      img: '/assets/img/cities/chile.jpg',
      uri: '/cities/santiago',
    }
];

const citiesReducer = (state = initState, action) => {
    return state;
}

export default citiesReducer;
