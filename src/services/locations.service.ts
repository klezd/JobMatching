import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
declare var google;
@Injectable()
export class LocationService {
    coords;
    mapInSer: any;
    getLocation() {}

    constructor( private http: Http) {}

    showLocation(location, map){
        console.log(location);
        console.log(map);
        let jsonLocation = 'http://maps.googleapis.com/maps/api/geocode/json?address='+location+'&sensor=false';
        console.log(jsonLocation);
        this.http.get(jsonLocation)
            .delay(1000)
            .timeout(2000)
            .map(res => res.json())
            .subscribe(data => {
                console.log(data);
                this.coords = new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                this.showMap(this.coords, map);     
            }, error =>{
                console.log("Request times out");                
        });          
    }

    showMap(coords, map) {
        this.mapInSer = new google.maps.Map(map, {
            zoom: 10,
            center: coords,
        });
    }
}