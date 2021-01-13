import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shortcut-model',
  templateUrl: './shortcut-model.component.html',
  styleUrls: ['./shortcut-model.component.css']
})
export class ShortcutModelComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  closeShortcut($event: MouseEvent) {
    this.bsModalRef.hide();
  }


}
