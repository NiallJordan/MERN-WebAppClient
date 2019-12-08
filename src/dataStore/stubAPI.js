import _ from "lodash";

class StubAPI{
    constructor(){
        this.clubs = [
            {
                id:1,
                name: "Liverpool",
                logo:"./clubPics/liverpool.png",
                league: "Premier League",
                placeInLeague: 1,
                phone: "0151 906 1892",
                location:{
                    city:"Liverpool",
                    country:"England"
                },
                stadium:{
                    stadium_name:"Anfield",
                    capacity:54074
                },
                numberOfPlayers:37,
                yearEstablished: 1892,
                manager:{
                    manager_name: "Jurgen Klopp",
                    titlesWon :1
                },
                players:[
                    {player_name:"Alisson Becker"},
                    {player_name:"Virgil van Dijk"},
                    {player_name:"Joe Gomez"},
                    {player_name:"Andy Robertson"},
                    {player_name:"Trente Alexander-Arnold"},
                    {player_name:"Fabinho"},
                    {player_name:"Gini Wijnaldum"},
                    {player_name:"Jordan Henderson"},
                    {player_name:"James Milner"},
                    {player_name:"Sadio Mane"},
                    {player_name:"Mo Salah"},
                    {player_name:"Roberto Firmino"}
                ]
            },
            {
                id:2,
                name: "Leicester",
                logo:"./clubPics/leicester.png",
                league: "Premier League",
                placeInLeague: 2,
                phone: "1232 412 231",
                location:{
                    city:"Leicester",
                    country:"England"
                },
                stadium:{
                    stadium_name:"King Power Stadium",
                    capacity:32312
                },
                numberOfPlayers:37,
                yearEstablished: 1884,
                manager:{
                    manager_name: "Brendan Rodgers",
                    titlesWon :0
                },
                players:[
                    {player_name:"Jamie Vardy"},
                ]
            },
            {
                id:3,
                name: "Man City",
                logo:"./clubPics/mancity.png",
                league: "Premier League",
                placeInLeague: 3,
                phone: "3123 321 543",
                location:{
                    city:"Manchester",
                    country:"England"
                },
                stadium:{
                    stadium_name:"Etihad",
                    capacity:55097
                },
                numberOfPlayers:37,
                yearEstablished: 1880,
                manager:{
                    manager_name: "Pep Guirdiola",
                    titlesWon :3
                },
                players:[
                    {player_name: "Raheem Sterling"}
                ]
            },
            {
                id:4,
                name: "Chelsea",
                logo:"./clubPics/chelsea.png",
                league: "Premier League",
                placeInLeague: 4,
                phone: "3567 534 766",
                location:{
                    city:"London",
                    country:"England"
                },
                stadium:{
                    stadium_name:"Stamford Bridge",
                    capacity:41631
                },
                numberOfPlayers:40,
                yearEstablished: 1905,
                manager:{
                    manager_name: "Frank Lampard",
                    titlesWon:0
                },
                players:[
                    {player_name:"Ngolo Kante"}
                ]
            },
            {
                id:5,
                name: "Juventus",
                logo:"./clubPics/juve.png",
                league: "Serie A",
                placeInLeague: 1,
                phone: "0312 625 123",
                location:{
                    city:"Turin",
                    country:"Italy"
                },
                stadium:{
                    stadium_name:"Allianz Stadium",
                    capacity:41507
                },
                numberOfPlayers:37,
                yearEstablished: 1892,
                manager:{
                    manager_name: "Maurizzio Sarri",
                    titlesWon :1
                },
                players:[
                    {player_name:"Cristiano Ronaldo"},
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

    add(name,logo,league,placeInLeague,phone,city,country,stadium_name,capacity,numberOfPlayers,yearEstablished,manager_name){
        let id =1;
        let last = _.last(this.clubs);
        if(last){
            id=last.id +1;
        }
        let len = this.clubs.length;
        let newLength = this.clubs.push({
            id,
            name,
            logo,
            league,
            placeInLeague,
            phone,
            location:{city,country},
            stadium:{stadium_name,capacity},
            numberOfPlayers,
            yearEstablished,
            manager:{manager_name},
        });
        return newLength >len
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