import { Resource } from "@triframe/core";
import {
  include,
  Model,
  float,
  belongsTo,
  readonly,
  date,
  hasMany,
} from "@triframe/scribe";

export class Order extends Resource {
  @include(Model)
  @float
  total = 0;

  @date
  date = new Date();

  @belongsTo
  @readonly
  user = null;

  @hasMany
  drink_orders = [];
}
