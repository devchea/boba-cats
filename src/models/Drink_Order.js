import { Resource } from "@triframe/core";
import { belongsTo, Model, include, integer } from "@triframe/scribe";

export class Drink_Order extends Resource {
  @include(Model)
  @integer
  quantity = 0;

  @belongsTo
  drink = null;

  @belongsTo
  order = null;
}
