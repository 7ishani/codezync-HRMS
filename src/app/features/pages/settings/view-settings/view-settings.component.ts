import { Component, OnInit } from '@angular/core';
import { SettingsService} from '../settings.service';

@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.css']
})
export class ViewSettingsComponent {

  constructor(public settings: SettingsService) { }

  openDepartments($event: MouseEvent){
    $event.preventDefault();
    this.settings.openModalDepartment();
  }

}
