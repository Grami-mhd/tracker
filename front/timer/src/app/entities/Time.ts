/**
 * Created by GRAMI on 01/02/2018.
 */

export class Time{
    hours: number=0;
    minutes: number=0;
    seconds: number=0;

    empty =function () {
       return (this.hours == 0) && (this.minutes ==0) && (this.seconds ==0);
    };
    format=function () :String{
        return (this.hours<10 ? '0'+this.hours : this.hours)+':'
            +(this.minutes<10 ? '0'+this.minutes : this.minutes)+':'
                +(this.seconds<10 ? '0'+this.seconds : this.seconds);
    };

    increment=function(){

        this.seconds ++;
        if(this.seconds==60){
            this.seconds=0;
            this.minutes++;
            if(this.minutes==60)
                this.hours++;

        }
    }
}