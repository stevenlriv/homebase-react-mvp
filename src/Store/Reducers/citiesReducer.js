const initState = [
    {
      city: 'San Juan',
      state: 'PR',
      img: './assets/img/cat1.jpg',
      uri: 'san-juan',
    },
    {
      city: 'San Francisco',
      state: 'CA',
      img: './assets/img/cat2.jpg',
      uri: 'san-francisco',
    }
];

const citiesReducer = (state = initState, action) => {
    return state;
}

export default citiesReducer;
