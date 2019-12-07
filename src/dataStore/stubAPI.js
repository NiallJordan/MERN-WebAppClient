import _ from "lodash";

class StubAPI{
    constructor(){
        this.clubs = [
            {
                id:1,
                name: "Liverpool",
                picture: {logo:"./logo.png"},
                league: "Premier League",
                placeInLeague: 1,
                phone: "0151 906 1892",
                location:{
                    city:"Liverpool",
                    country:"England"
                },
                stadium:{
                    name:"Anfield",
                    capacity:54074
                },
                numberOfPlayers:37,
                yearEstablished: 1892,
                manager:{
                    name: "Jurgen Klopp",
                    titlesWon :1
                },
                players:[
                    {name:"Alisson Becker"},
                    {name:"Virgil van Dijk"},
                    {name:"Joe Gomez"},
                    {name:"Andy Robertson"},
                    {name:"Trente Alexander-Arnold"},
                    {name:"Fabinho"},
                    {name:"Gini Wijnaldum"},
                    {name:"Jordan Henderson"},
                    {name:"James Milner"},
                    {name:"Sadio Mane"},
                    {name:"Mo Salah"},
                    {name:"Roberto Firmino"}
                ]
            },
            {
                id:2,
                name: "Leicester",
                picture: {logo:"./logo.png"},
                league: "Premier League",
                placeInLeague: 2,
                phone: "1232 412 231",
                location:{
                    city:"Leicester",
                    country:"England"
                },
                stadium:{
                    name:"King Power Stadium",
                    capacity:32312
                },
                numberOfPlayers:37,
                yearEstablished: 1884,
                manager:{
                    name: "Brendan Rodgers",
                    titlesWon :0
                },
                players:[
                    {name:"Jamie Vardy"},
                ]
            },
            {
                id:3,
                name: "Man City",
                picture: {logo:"./logo.png"},
                league: "Premier League",
                placeInLeague: 3,
                phone: "3123 321 543",
                location:{
                    city:"Manchester",
                    country:"England"
                },
                stadium:{
                    name:"Etihad",
                    capacity:55097
                },
                numberOfPlayers:37,
                yearEstablished: 1880,
                manager:{
                    name: "Pep Guirdiola",
                    titlesWon :3
                },
                players:[
                    {name: "Raheem Sterling"}
                ]
            },
            {
                id:4,
                name: "Chelsea",
                picture: {logo:"./logo.png"},
                league: "Premier League",
                placeInLeague: 4,
                phone: "3567 534 766",
                location:{
                    city:"London",
                    country:"England"
                },
                stadium:{
                    name:"Stamford Bridge",
                    capacity:41631
                },
                numberOfPlayers:40,
                yearEstablished: 1905,
                manager:{
                    name: "Frank Lampard",
                    titlesWon:0
                },
                players:[
                    {name:"Ngolo Kante"}
                ]
            },
            {
                id:5,
                name: "Juventus",
                picture: {logo:"./logo.png"},
                league: "Serie A",
                placeInLeague: 1,
                phone: "0312 625 123",
                location:{
                    city:"Turin",
                    country:"Italy"
                },
                stadium:{
                    name:"Allianz Stadium",
                    capacity:41507
                },
                numberOfPlayers:37,
                yearEstablished: 1892,
                manager:{
                    name: "Maurizzio Sarri",
                    titlesWon :1
                },
                players:[
                    {name:"Cristiano Ronaldo"},
                ]
            }

        ];
    }

    find(id){
        let index = _.findIndex(this.clubs, club => `${club.phone}` === id);
        if(index !== -1){
            return this.clubs[index];
        }
        return null;
    }

    delete(k){
        let elements = _.remove(this.clubs,club => club.phone === k);
        return elements;
    }

    initialize(clubs){
        this.clubs = clubs;
    }

    getAll(){
        return this.clubs;
    }

    update(key,placeInLeague,phone){
        let index = _.findIndex(this.clubs,club => club.phone === key);
        if (index !== -1){
            this.clubs[index].phone = phone;
            this.clubs[index].placeInLeague = placeInLeague;
            return true;
        }
        return false;
    }
}

export default new StubAPI();