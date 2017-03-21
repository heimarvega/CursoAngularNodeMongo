'use strict'

var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
  
var SongSchema = Schema({
    number:String,
    name:string,
    duration:string,
    file:String,
    album:{type: Schema.ObjecyId, ref:'Album'}
});

module.exports= mongoose.model('Song', SongSchema);
