import { Resource } from "@triframe/core";
import { include, Model, string, float, belongsTo, readonly } from "@triframe/scribe";

export class Drink extends Resource {
  @include(Model)
  
  @string
  name = ""

  @float
  price = 0

  @string
  category = ""

  @belongsTo
  @readonly
  user = null
  
}
