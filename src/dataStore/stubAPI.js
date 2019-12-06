import _ from "lodash";

class StubAPI{
    constructor(){
        this.clubs = [];
    }

    find(id){
        let index = _.findIndex(this.clubs,club => `${club.name}${club.placeInLeague}` === id);
        if(index !== -1){
            return this.clubs[index];
        }
        return null;
    }

    delete(k){
        let elements = _.remove(this.clubs,club => club.name ===k);
        return elements;
    }

    initialize(clubs){
        this.clubs = clubs;
    }

    getAll(){
        return this.clubs;
    }

    update(key,name,placeInLeague){
        let index = _.findIndex(this.clubs,club => club .name === key);
        if (index !== -1){
            this.clubs[index].name = name;
            this.clubs[index].placeInLeague = placeInLeague;
            return true;
        }
        return false;
    }
}

export default new StubAPI;