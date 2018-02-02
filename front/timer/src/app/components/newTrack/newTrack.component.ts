/**
 * Created by GRAMI on 01/02/2018.
 */

import {Component, OnInit} from "@angular/core";
import {TimeService} from "../../services/TimeService";
import {Track} from "../../entities/Track";
import {Time} from "../../entities/Time";
@Component({
    selector:"app-newTracker",
    templateUrl:"./newTrack.component.html"
})
export class NewTrackComponent implements OnInit{

    input={
        'source': "top",
        'description' :'',
        'date': new Date(),
        'time' : new Time()
    };
    constructor(private timeService:TimeService){}
    ngOnInit(): void {
        this.timeService.newTrack.subscribe(nxt=>{
            this.input={
                'source': "top",
                'description' :'',
                'date': new Date(),
                'time' : new Time()
            };
        });
    }
    addNewTrack () {
        let track : Track = new Track();

        if(this.input.source == 'top'){
            if(!this.timeService.currentTime){
                alert("you have no current track, You have to finish before submitting it");
                return ;
            }
            track.time=this.timeService.currentTime;
        }else{
            track.time=this.input.time;
        }
        track.description = this.input.description;
        track.date=this.input.date;
        this.timeService.addCurrentTime(track);

    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }
    newTrackChange(){
        if(this.input.time.seconds == 60){
            this.input.time.minutes++;
            this.input.time.seconds=0;
        }
        if(this.input.time.minutes == 60){
            this.input.time.hours++;
            this.input.time.minutes=0;
        }

    }
}