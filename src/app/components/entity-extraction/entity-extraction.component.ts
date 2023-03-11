import { Component, OnInit } from '@angular/core';
import {GetService} from "../../services/get.service";
import {Annotation} from "../../models";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  image: boolean;
  abstract: boolean;
  category: boolean;
  annotations: Annotation[];

  constructor(private getService: GetService) {
    this.text = "";
    this.image = false;
    this.abstract = false;
    this.category = false;
    this.annotations = [];
  }

  ngOnInit(): void {
  }

  entityExtraction(): void {
    // @ts-ignore
    let minConfidence = document.getElementById("minConfidence").value;
    if(minConfidence != null) {
      this.getService.getEntityExtraction(this.text, parseFloat(minConfidence), this.image, this.abstract, this.category).subscribe(entityExtractionDto => {
        this.annotations = entityExtractionDto.annotations;
      })
    }

  }
}
