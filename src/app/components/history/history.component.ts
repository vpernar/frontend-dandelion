import { Component, OnInit } from '@angular/core';
import {GetService} from "../../services/get.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: string[];

  constructor(private getService: GetService) {
    this.history = [];
  }

  ngOnInit(): void {
    this.history = this.getService.history;
  }

}
