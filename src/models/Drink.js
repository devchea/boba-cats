import { Resource } from "@triframe/core";
import { include, Model, string, float, hasMany, readonly } from "@triframe/scribe";

export class Drink extends Resource {
  @include(Model)
  
  @string
  name = ""

  @float
  @readonly
  price = 0

  @string
  category = ""

  @hasMany
  drink_orders = []
  
}
