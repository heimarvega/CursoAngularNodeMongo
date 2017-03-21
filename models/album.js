'use strict'

var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title:String,
    description:String,
    year:number,
    image:String,
    artist:{type: Schema.ObjecyId, ref:'Artist'}
});

module.exports= mongoose.model('Album', AlbumSchema);
