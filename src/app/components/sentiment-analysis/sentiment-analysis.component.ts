import { Component, OnInit } from '@angular/core';
import {GetService} from "../../services/get.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string;
  lang: string;
  color: string;

  constructor(private getService: GetService) {
    this.text = "";
    this.lang = "en";
    this.color = ""
  }

  ngOnInit(): void {
  }

  sentimentAnalysis(): void {
    this.getService.getSentimentAnalysis(this.text, this.lang).subscribe(sentimentAnalysisDto => {
      this.color = this.calculateColor(sentimentAnalysisDto.sentiment.score);
    });
  }

  calculateColor(t: number): string {
    let normalized = 0.5 * t + 0.5
    let a :number[] = [255, 0, 0];
    let b :number[] = [0, 255, 0];
    let red = Math.round(a[0] + (b[0] - a[0]) * normalized);
    let green = Math.round(a[1] + (b[1] - a[1]) * normalized);
    let blue = Math.round(a[2] + (b[2] - a[2]) * normalized);
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
