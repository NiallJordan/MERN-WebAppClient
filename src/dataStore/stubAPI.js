import _ from "lodash";

class StubAPI{
    constructor(){
        this.clubs = [];
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