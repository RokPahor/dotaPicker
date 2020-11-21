import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../models/hero.model";
@Pipe({
  name: "filter"
})
//Filter heroes based on their primary attribute
export class AtributPipe implements PipeTransform {
  transform(val: Hero[], type: string): Hero[] {
    switch (type) {
      case "agi":
        return val.filter(hero => hero.primary_attr === "A");
      case "str":
        return val.filter(hero => hero.primary_attr === "S");
      case "int":
        return val.filter(hero => hero.primary_attr === "I");
    }
  }
}
