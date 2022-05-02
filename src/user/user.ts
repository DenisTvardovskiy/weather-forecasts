
interface ILocation{
    lat: number;
    lon: number;
}

export class User {

    private static instance: User;

    location: ILocation;



    private constructor() {
        this.location= {
            lon: 56.946285,
            lat: 24.105078,
        }
    }

    public static getInstance(): User {
        if(!User.instance){
            User.instance = new User();
        }

        return User.instance;
    }

    get locationCord () {
        return this.location
    }

    set locationCord (cord: ILocation) {
        if(cord.lon && cord.lat){
            this.location = cord
        }
    }


}