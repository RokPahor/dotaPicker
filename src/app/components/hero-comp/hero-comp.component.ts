import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { Settings } from "src/app/models/settings.model";
import { Status } from "src/app/enums/status.enum";

@Component({
  selector: "app-hero-comp",
  templateUrl: "./hero-comp.component.html",
  styleUrls: ["./hero-comp.component.sass"]
})
export class HeroCompComponent implements OnInit {
  constructor() {}

  @Input()
  public hero: Hero;
  @Input()
  public settings: Settings;
  public imageFullyLoaded: boolean = false;

  @Output() onSelect = new EventEmitter();
  @Output() loaded = new EventEmitter();

  @ViewChild("image", {static: false}) image: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    //img loaded into DOM
    let that = this;
    this.image.nativeElement.onload = function(){
      that.imageFullyLoaded = true;
      that.loaded.emit();
    }
  }

  public selectHero(data: any) {
    switch (this.settings.status) {
      case Status.PICKING:
        switch (this.settings.selectedTeam) {
          case "RADIANT":
            if (
              this.settings.radiantHeroes.length === 5 ||
              this.hero.disabled
            ) {
              return;
            }
            break;
          case "DIRE":
            if (this.settings.direHeroes.length === 5 || this.hero.disabled) {
              return;
            }
            break;
        }
        this.hero.disabled = true;
        this.onSelect.emit(this.hero);
        break;
      case Status.EDIT_PICK:
        this.hero.disabled = true;
        this.onSelect.emit(this.hero);
        break;
      case Status.EDIT:
        if (this.settings.showSelected) {
          //če klikneš na heroja ki ima counter 0, ga da na 1, če klikneš na 1, ga da na 0
          this.hero.selectedCounter === 1
            ? (this.hero.selectedCounter = 0)
            : (this.hero.selectedCounter = 1);
          this.onSelect.emit(this.hero);
        }

        break;
    }
  }
}
