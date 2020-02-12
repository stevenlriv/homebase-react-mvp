const initState = [
    {
      city: 'San Juan, Puerto Rico',
      state: 'PR',
      img: './assets/img/cities/puerto-rico.jpg',
      uri: '/cities/san-juan',
    },
    {
      city: 'San Francisco, California',
      state: 'CA',
      img: './assets/img/cities/san-francisco.jpg',
      uri: '/cities/san-francisco',
    },
    {
      city: 'Santiago, Chile',
      state: '',
      img: './assets/img/cities/chile.jpg',
      uri: '/cities/santiago',
    }
];

const citiesReducer = (state = initState, action) => {
    return state;
}

export default citiesReducer;
