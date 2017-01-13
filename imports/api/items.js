// jshint esversion: 6

import { Mongo }        from "meteor/mongo";

export const BookingItems = new Mongo.Collection("items");

const BookingItemSchema = new SimpleSchema({
    date:       { type: Date },
    date_str:   { type: String },  // format: YYYY-MM-DD
    week:       { type: Number },  // format: 1..53
    week_str:   { type: String },  // format: YYYY-NN
    from:       { type: String },
    to:         { type: String },
    itemtype:   { type: String, defaultValue: "PRACTICE" },
    booker:     { type: String } ,
    note:       { type: String } ,
    maintenance:{ type: String } ,
    createdAt:  { type: String } ,
    updatedAt:  { type: String }
});

BookingItems.attachSchema(BookingItemSchema);

