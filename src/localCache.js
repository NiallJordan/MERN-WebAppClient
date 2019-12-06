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
}
export default (new LocalCache() );