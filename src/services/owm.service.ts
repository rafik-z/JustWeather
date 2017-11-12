import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import * as uri from './consts';
import { Weather } from '../domain/weather.object';

@Injectable()
export class OwmService {

    private id_ville: String;

    private lat: String = '45.1583962';
    private lon: String = '5.7257401';
    headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    public getCurrentWeather(): Observable<Weather> {
        let url = new String(uri.URL_OWM_COORDS.toString() + this.lat.toString() + uri.URL_OWM_COORDS_LON.toString() + this.lon.toString() + uri.OWM_METRICS.toString() + uri.URL_OWM_KEY.toString());
        console.log(url);
        return this.http.get(url.toString())
            .map(res => res.json());
    }

    

}