import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var google;
@Injectable()
export class LocationService {
    lat: any; 
    lng: any;
    mapInSer: any;
    getLocation() {}

    constructor( private http: Http) {}

    showLocation(location, map){
        let jsonLocation = 'http://maps.googleapis.com/maps/api/geocode/json?address='+location+'&sensor=false';
        console.log(jsonLocation);
        this.http.get(jsonLocation)
            .map(res => res.json())
            .subscribe(data => {
                this.lat = data.results[0].geometry.location.lat;
                this.lng = data.results[0].geometry.location.lng;
                this.showMap(this.lat, this.lng, map);     
         });          
    }

    showMap(lat, lng, map) {
        this.mapInSer = new google.maps.Map(map, {
            zoom: 10,
            center: {lat: lat, lng: lng}
        });
    }
}