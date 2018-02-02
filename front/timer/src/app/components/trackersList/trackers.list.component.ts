/**
 * Created by GRAMI on 01/02/2018.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {TimeService} from "../../services/TimeService";
import {Track} from "../../entities/Track";
import {MatPaginator} from "@angular/material";
@Component({
    selector:"app-tracks-list",
    templateUrl:"./trackers.list.component.html"
})
export class TrackesListComponent implements OnInit{

    tracks :Array<Track>;
    total :number;
    @ViewChild(MatPaginator) paginator : MatPaginator;

    ngOnInit(){
        this.goToPage(0);
        this.timeService.newTrack.subscribe(nxt=>{
            if(this.paginator._pageIndex==0) {
                this.goToPage(0);
                return;
            }
            while (this.paginator.hasPreviousPage())
                  this.paginator.previousPage();
        })
    }
    constructor(private timeService:TimeService){
    }

    goToPage(page){
        this.tracks=null;
        this.timeService.getTracksByPage(page).subscribe((next:any)=>{
            this.tracks = next.data as Array<Track>;
            this.total = next.total ;
        })
    }

}