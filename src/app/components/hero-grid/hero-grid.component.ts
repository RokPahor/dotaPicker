import { Component, OnInit, HostListener } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { HeroService } from "src/app/services/hero.service";
import {
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { EditHeroComponent } from "../edit-hero/edit-hero.component";
import { Settings } from "src/app/models/settings.model";
import { Status } from "src/app/enums/status.enum";
import { forkJoin, Subscription } from "rxjs";
import * as _ from "lodash";
import { map, startWith, take, takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "app-hero-grid",
  templateUrl: "./hero-grid.component.html",
  styleUrls: ["./hero-grid.component.sass"],
})
export class HeroGridComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private modalService: NgbModal,
  ) {}
  private subscriptions: Subscription = new Subscription();
  public loadedHeroes: number = 0;
  public Status: typeof Status = Status;
  public showSearchString: boolean = false;
  public editHeroOpen: boolean = false;
  public searchString: string = "";
  public loaded: boolean = false;
  public radiantHeroes = [];
  public direHeroes = [];
  public settings: Settings;
  public editedHero: Hero[] = [];
  public currEdit: string;
  public goodwithEdit: any[] = [];
  public goodAgainstedit: any[] = [];
  public showSubmit: boolean = false;
  public showSelected: string;
  public allHeroesData: any = [];

  //User keyboard input for filtering heroes
  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if(!this.editHeroOpen){
    let that = this;
    if (event.key === "Backspace") {
      this.searchString = this.searchString.substring(
        0,
        this.searchString.length - 1
      );
      this.showSearchString = true;
      this.filterHeroes();
      setTimeout(function () {
        that.showSearchString = false;
      }, 2000);
    } else if (event.code.indexOf("Key") > -1) {
      this.searchString += event.key;
      this.showSearchString = true;
      this.filterHeroes();
      setTimeout(function () {
        that.showSearchString = false;
      }, 2000);
    } else if (event.key === "Escape") {
      this.filterHeroes(true);
    }
  }
  }
  //ONINIT --> init data + set default Settings
  ngOnInit() {
    //SETTINGS --> showing current picked heroes and updating statuses of app
    this.settings = new Settings().deserialize({
      radiantHeroes: this.radiantHeroes,
      direHeroes: this.direHeroes,
      selectedTeam: "RADIANT",
      status: Status.PICKING,
      showSelected: this.showSelected,
    });

    //get DATA for HEROES table
    this.subscriptions.add(
      this.heroService
        .getAllHeroes2()
        .pipe(
          map(heroes => {
            return  heroes.map(hero=> {
            return new Hero().deserialize({
                name: hero.heroName,
                id: hero.heroId,
                primary_attr: hero.primary_attr,
                goodWith: hero.goodWith,
                badAgainst: hero.badAgainst,
                searchResult: true
              })
            })
          })
        )
        .subscribe((heroes) => {
          if (!_.isNil(heroes)) {
            //heroes from API CALL
            this.allHeroesData = heroes;
          }
        })
    );
  }

  ngAfterViewInit(): void {
    //after viewGets initialized, hide loader
    setTimeout(() => {
      //this.loaded = true;
    }, 1000);
  }

  ngOnDestroy() {
    //unsubscribe from all Subscriptions
    this.subscriptions.unsubscribe();
  }

  public imgLoaded(){
    this.loadedHeroes++;
    if(this.loadedHeroes == this.allHeroesData.length){
      this.loaded = true;
    }
  }

  public resetGrid(){
    this.goodAgainstedit = [];
    this.goodwithEdit = [];
    this.direHeroes = [];
    this.radiantHeroes = [];
    this.showSelected = undefined;
    this.settings = new Settings().deserialize({
      status: Status.PICKING,
      radiantHeroes: this.radiantHeroes,
      direHeroes: this.direHeroes,
      selectedTeam: "RADIANT",
      showSelected: undefined,
    });
    this.editedHero = [];
    this.resetBorders();
  }

  public filterHeroes(resetSearch: boolean = false) {
    if (resetSearch) {
      this.searchString = "";
    }
    this.allHeroesData = this.allHeroesData.map((hero) => {
      if (!hero.name.toLowerCase().includes(this.searchString)) {
        hero.searchResult = false;
        return hero;
      } else {
        hero.searchResult = true;
        return hero;
      }
    });
  }

  public changePickerTeam(team: string) {
    //RADIANT -> DIRE
    //DIRE -> RADIANT
    this.settings.selectedTeam = team;
  }

  public editHero() {
    const modalNewTerm = this.modalService.open(EditHeroComponent, {
      backdrop: "static",
      keyboard: false,
    });
    this.editHeroOpen = true;
    modalNewTerm.result.then(()=> {
      this.editHeroOpen = false;
    });
  }

  //EDIT HERO BUTTON --> reset picked heroes and change status into EDIT_PICK
  public enterEditMode() {
    this.settings.status = Status.EDIT_PICK;
    this.radiantHeroes = [];
    this.direHeroes = [];
    this.filterHeroes(true);
    this.resetBorders();
  }

  //PICKING MODE --> when clicking a hero, highlight BORDERS of heroes that are good WITH him, or good AGAINST HIM
  public changeBorders(ids: any[]) {
      this.allHeroesData.forEach((hero) => {
        if (ids.includes(hero.id) ) {
          hero.selectedCounter++;
        }
      });
  }
  //DATA from selected hero
  public onSelectHero(data: any) {
    this.filterHeroes(true);
    switch (this.settings.status) {
      case Status.PICKING:
        //selecting hero in pick phase --> color borders of other heroes
        if (this.settings.selectedTeam === "RADIANT") {
          if (this.radiantHeroes.length === 5) {
            return;
          }
          this.radiantHeroes.push(data);
          this.changeBorders(_.get(data, "goodWith", []));
          
        } else {
          if (this.direHeroes.length === 5) {
            return;
          }
          this.direHeroes.push(data);
          this.changeBorders(_.get(data, "badAgainst", []));
        }
        break;
      case Status.EDIT_PICK:
        this.editedHero.push(data);
        this.settings.status = Status.EDIT;
        this.goodwithEdit = _.get(this.editedHero[0], "goodWith", []);
        this.goodAgainstedit = _.get(this.editedHero[0], "badAgainst", []);
        break;
      case Status.EDIT:
        //preveri če je trenutno good with ali good against in dodaj v tabelo ki jo boš potem pisal v bazo
        this.showSubmit = true;
        if (this.currEdit === "GOOD_WITH") {
          if (data.selectedCounter === 1) {
            this.goodwithEdit.push(data.id);
          } else {
            this.goodwithEdit.splice(this.goodwithEdit.indexOf(data.id), 1);
          }
        }
        //dodajanje goodAgainst
        else {
          if (data.selectedCounter === 1) {
            this.goodAgainstedit.push(data.id);
          } else {
            this.goodAgainstedit.splice(
              this.goodAgainstedit.indexOf(data.id),
              1
            );
          }
        }
    }
  }

  //EDIT MODE --> button GOOD_WITH
  public editShowGood() {
    this.currEdit = "GOOD_WITH";
    this.resetBorders(false);
    this.settings.showSelected = "GOOD";
    this.changeBorders(this.goodwithEdit);
  }
  //EDIT MODE --> button GOOD_AGAINST_HIM
  public editShowBad() {
    this.currEdit = "GOOD_AGAINST";
    this.resetBorders(false);
    this.settings.showSelected = "BAD";
    this.changeBorders(this.goodAgainstedit);
  }
  //EDIT MODE --> button SAVE CHANGES
  public submitEditHeroes() {
    //update hero goodWith + badAgaint 
    let justEditedHero = this.allHeroesData.find(hero => hero.id == this.editedHero[0].id);
    justEditedHero.goodWith = this.editedHero[0].goodWith;
    justEditedHero.badAgainst = this.editedHero[0].badAgainst;
    this.loaded = false;
    this.subscriptions.add(
    this.heroService.updateHero(justEditedHero.id, {goodWith: this.editedHero[0].goodWith, badAgainst: this.editedHero[0].badAgainst}).subscribe().add(()=> {
    this.loaded = true;
  })
    );
    this.resetGrid();
  }
  //RESET BORDERS ON ALL HEROES
  //changeActiveStatus = true ---> unDisable all heroes
  public resetBorders(changeActiveStatus: boolean = true) {
    this.allHeroesData.forEach((hero) => {
      hero.selectedCounter = 0;
      if (changeActiveStatus) {
        hero.disabled = false;
      }
    });
  }
}
