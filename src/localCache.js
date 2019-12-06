class LocalCache {
    constructor() {
        this.clubs = [] ;
    }

    getAll() {
        return this.clubs ;
    }

    populate(clubs) {
        this.clubs = clubs;
    }

    delete(k){
        let clubs = _.remove(this.clubs,club => club.name === k);
        return clubs;
    }
}
export default (new LocalCache() );