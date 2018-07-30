import { TYPES } from './action';

const initialState = {
    currentIndex: 0,
    reviewType: '',
    reviewIndex: null,
    pages: [
        {
            image: 'https://img00.deviantart.net/2aa4/i/2011/248/d/f/tbv_alisa_bosconovitch_2_by_guppri04-d48wzjd.jpg',
            name: 'Alisa Bosconovitch',
            type: 'Family Practice',
            rate: 'fair',
            address: '5400 W Rosecrans Ave - 0.3 miles',
            reviews: [
                {
                    date: 'Jun 10, 2016',
                    name: 'Red Panda',
                    body: `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `
                },
                {
                    date: 'Jun 10, 2016',
                    name: 'Orange Elephant',
                    body: `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `
                } 
            ]
        },
        {
            image: 'https://lh3.googleusercontent.com/-W2rI3XXz4BI/AAAAAAAAAAI/AAAAAAAAAmw/fc1B9tNvVPI/s640-il/photo.jpg',
            name: 'Ling Xiaoyu',
            type: 'Internal Medicine',
            rate: 'high',
            address: '516 W 219th st',
            reviews: [
                {
                    date: 'Jun 10, 2016',
                    name: 'Josie Rizal',
                    body: `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `
                },
                {
                    date: 'Jun 10, 2016',
                    name: 'Miguel Callebejo Roja',
                    body: `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `
                } 
            ]
        },
        {
            image: 'http://pm1.narvii.com/6600/289ed77608b9c0d32a96bc76cbfb64dfd595dcaa_00.jpg',
            name: 'Sergie Dragunov',
            type: 'Dentist',
            rate: 'low',
            address: '2175 Park Place',
            reviews: [
                {
                    date: 'Jun 10, 2016',
                    name: 'Paul Phoenix',
                    body: `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `
                },
                {
                    date: 'Jun 10, 2016',
                    name: 'Marshall Law',
                    body: `
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    `
                } 
            ]
        }
    ]
}

export const currentIndexReducer = (state = initialState.currentIndex, action) => action.type === TYPES.CHANGE_PAGE ? action.payload : state;
export const pagesReducer = (state = initialState.pages, action) => action.type === TYPES.UPDATE_PAGES ? action.payload : state;
export const reviewTypeReducer = (state = initialState.reviewType, action) => action.type === TYPES.CHANGE_REVIEW ? action.payload : state;
export const reviewIndexReducer = (state = initialState.reviewIndex, action) => action.type === TYPES.CHANGE_REVIEW_INDEX ? action.payload : state;