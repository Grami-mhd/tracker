/**
 * Created by GRAMI on 01/02/2018.
 */

import {Component, OnInit} from "@angular/core";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs";
import {Time} from "../../entities/Time";
import {TimeService} from "../../services/TimeService";
@Component({
    selector:"app-timer",
    templateUrl:'./timer.component.html'
})
export class TimerComponent implements OnInit{

    time : Time=new Time();
    private sunbscription : Subscription;
    on:boolean=false;
    done :boolean=false;
    ngOnInit(): void {
        this.timeService.newTrack.subscribe(nxt=>{
            this.time=new Time();
            this.done=false;
        });
    }
    constructor(private timeService:TimeService){}
    play = function () {
        if(this.done)
            if(confirm("this will set the timer back to zero ")){
                this.time=new Time();
                this.done=false;
                this.timeService.currentTime=null;
            }else{
                return;
            }

        this.on=true;
        this.subscription=TimerObservable.create(2000,1000).subscribe(t=>{
            this.time.increment();
        });
    };
    pause = function () {
        this.subscription.unsubscribe();
        this.on=false;
    };

    stop = function () {
        this.subscription.unsubscribe();
        this.on=false;
        this.done=true;
        this.timeService.currentTime=this.time;
    };
}