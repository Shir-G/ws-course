'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./config').events;

module.exports = class Hotel extends EventEmitter {
    constructor(newName, newBranch){
        super();
        this.name = newName;
        this.branch = newBranch;
        this.likes = 0;
        this.stars = 0;
        this.reviews = new Array();
        this.starsCount = 0;
    }


    like(){
        this.likes++;
        this.emit(eventsConfig.PRINT);
    }

    review(str){
        this.reviews.push(str);
        this.emit(eventsConfig.PRINT);
    }

    deleteReview(i){
        if(i>=this.reviews.length){
           this.emit(eventsConfig.ERROR);
        }
        else{
            this.reviews.splice(i,1);
            this.emit(eventsConfig.PRINT);
        }
    }

    star(i){
        var sum = (this.stars*this.starsCount);
        this.starsCount++;
        sum+=i;
        this.stars= sum/this.starsCount;
        this.emit(eventsConfig.PRINT);
    }

    dislike(){
        if(this.likes>0){
          this.likes--;  
        }
        this.emit(eventsConfig.PRINT); 
    }
}