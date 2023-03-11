import { Component, OnInit } from '@angular/core';
import {GetService} from "../../services/get.service";
import {Language} from "../../models";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string;
  clean: boolean;
  detectedLanguages: Language[];

  constructor(private getService: GetService) {
    this.text = "";
    this.clean = false;
    this.detectedLanguages = []
  }

  ngOnInit(): void {
  }

  languageDetection(): void {
    this.getService.getLanguageDetection(this.text, this.clean).subscribe(languageDetectionDto => {
      this.detectedLanguages = languageDetectionDto.detectedLangs;
    });
  }
}
