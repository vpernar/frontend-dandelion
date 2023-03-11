import { Component, OnInit } from '@angular/core';
import {GetService} from "../../services/get.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  firstText: string;
  secondText: string;
  accuracy: number;

  constructor(private getService: GetService) {
    this.firstText = "";
    this.secondText = "";
    this.accuracy = 0;
  }

  ngOnInit(): void {
  }

  textSimilarity(): void {
    this.getService.getTextSimilarity(this.firstText, this.secondText).subscribe((textSimilarityDto) => {
      this.accuracy = textSimilarityDto.similarity;
    })
  }
}
