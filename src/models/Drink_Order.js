import { Resource } from "@triframe/core";
import {belongsTo, Model, include } from "@triframe/scribe";

export class Drink_Order extends Resource {
    @include(Model)

    @belongsTo
    drink = null

    @belongsTo
    order = null
} 
