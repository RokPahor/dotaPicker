import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: "app-edit-hero",
  templateUrl: "./edit-hero.component.html",
  styleUrls: ["./edit-hero.component.sass"],
})
export class EditHeroComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private heroService: HeroService) {}
  public password = '';
  public loaded: boolean = true;
  public error: boolean = false;

  ngOnInit() {}

  public setDatabaseToDefault(){
    if(this.password != 'lalal'){
      this.error = true;
    }
    else{
      this.error = false;

    }
  }
}
