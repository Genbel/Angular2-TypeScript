export class PeopleService{
    getPeople(){
        var people = [
            {
                picture: 'http://lorempixel.com/100/100/people/2/',
                name: 'Angular2',
                twitter: '@angularnetwork',
                text: 'Would you like to know about the future web developing? Go ahead',
                likes: 4,
                userLike: false
            },
            {
                picture: 'http://lorempixel.com/100/100/people/3/',
                name: 'TypeScript',
                twitter: '@teamtypescript',
                text: 'New javascript compiler. Really interesting',
                likes: 2,
                userLike: true
            },
            {
                picture: 'http://lorempixel.com/100/100/people/4/',
                name: 'NodeJS',
                twitter: '@nodesquare',
                text: 'Do you want also have your server in javascript. NodeJS is your option',
                likes: 17,
                userLike: true
            },
            {
                picture: 'http://lorempixel.com/100/100/people/13/',
                name: 'MongoDB',
                twitter: '@mongonomysql',
                text: 'Bored about relational databases? Check it out MongoDB',
                likes: 12,
                userLike: false
            }
        ];
        return people;
    }
}