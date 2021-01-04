const movies = [
    {
        _id:'dfsjkdsfksdf32432',
        title:'abc',
        genre:{ _id:1, name:'Action'},
        numberInStock:6,
        dailyRentalRate:2.5,
        publishDate:'2018-01-03T19:04:28.809z',
        like:false
    },
    {
        _id:'sdfd324cxve445',
        title:'abc',
        genre:{ _id:1, name:'Action'},
        numberInStock:2,
        dailyRentalRate:1,
        publishDate:'2018-01-03T19:04:28.809z',
        like:false
    },
    {
        _id:'vcbv56543g78888887',
        title:'abc',
        genre:{ _id:2, name:'Comedy'},
        numberInStock:3,
        dailyRentalRate:3,
        publishDate:'2018-01-03T19:04:28.809z',
        like:false
    },
    {
        _id:'sdfdsfsdfsvrrrr4332',
        title:'abc',
        genre:{ _id:2, name:'Comedy'},
        numberInStock:5,
        dailyRentalRate:4,
        publishDate:'2018-01-03T19:04:28.809z',
        like:false
    },
    {
        _id:'sdfjuy45345df345345',
        title:'abc',
        genre:{ _id:3, name:'Thiller'},
        numberInStock:7,
        dailyRentalRate:5.5,
        publishDate:'2018-01-03T19:04:28.809z',
        like:false
    },
    {
        _id:'bvhhuyyr453534cfef34',
        title:'abc',
        genre:{ _id:3, name:'Thriller'},
        numberInStock:8,
        dailyRentalRate:4.5,
        publishDate:'2018-01-03T19:04:28.809z',
        like:false
    }
]

export function getMovies(){
    return movies;
}

