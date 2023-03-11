import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string;

  constructor() { this.token = ""}

  ngOnInit(): void {
  }

  setToken(): void{
    localStorage.setItem("token", this.token)
  }

}
