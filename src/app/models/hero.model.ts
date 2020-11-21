import { Deserializable } from "./deserialize.model";

export class Hero implements Deserializable {
  public name: string;
  public id: number;
  public primary_attr: string;
  public selectedCounter: number = 0;
  public disabled: boolean = false;
  public searchResult: boolean;
  //mongoDB
  public goodWith: [];
  public badAgainst: [];

  deserialize(input: any): this {
    this.name = input.name;
    this.id = input.id;
    this.primary_attr = input.primary_attr;
    this.searchResult = input.searchResult;
    this.goodWith = input.goodWith;
    this.badAgainst = input.badAgainst;
    return this;
  }
}
