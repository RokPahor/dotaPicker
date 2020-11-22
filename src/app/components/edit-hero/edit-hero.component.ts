import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: "app-edit-hero",
  templateUrl: "./edit-hero.component.html",
  styleUrls: ["./edit-hero.component.sass"],
})
export class EditHeroComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private helperService: HelperService, private storage: StorageService) {}
  public password = '';
  public username = '';
  public error: boolean = false;

  ngOnInit() {}

public login(){
  this.helperService.login({userName: this.username, password: this.password}).subscribe(res=> {
    this.error = false;
    this.storage.setToken(res.token);
    this.activeModal.close();
  }, ()=> {
  this.error = true;
  })
}

}
