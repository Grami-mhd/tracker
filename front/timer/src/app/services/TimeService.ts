/**
 * Created by GRAMI on 01/02/2018.
 */
import {Injectable} from "@angular/core";
import {Time} from "../entities/Time";
import {HttpClient} from "@angular/common/http";
import {Track} from "../entities/Track";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TimeService{
    currentTime:Time;

    private source = new BehaviorSubject<Track>(null);
    newTrack = this.source.asObservable();

    constructor(private http:HttpClient){}
    addCurrentTime(data : Track){
        console.log(JSON.stringify(data));
        this.http.post("http://localhost/apiTimer/web/app_dev.php/api/tracks/",JSON.stringify(data))
            .subscribe((nxt:Track)=>{
                this.source.next(nxt);
            });
    }
    getTracksByPage(page :number){
        return this.http.get("http://localhost/apiTimer/web/app_dev.php/api/tracks/"+page);
    }


}