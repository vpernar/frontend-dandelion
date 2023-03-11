import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EntityExtractionDto, LanguageDetectionDto, SentimentAnalysisDto, TextSimilarityDto} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetService {

  history: string[];

  constructor(private httpClient: HttpClient) {
    this.history = [];
  }

  getTextSimilarity(firstText: string, secondText: string): Observable<TextSimilarityDto> {
    const url = `https://api.dandelion.eu/datatxt/sim/v1/?text1=${firstText}&text2=${secondText}&token=${GetService.getToken()}`;
    this.saveHistory(url);
    return this.httpClient.get<TextSimilarityDto>(url);
  }

  getLanguageDetection(text: string, clean: boolean): Observable<LanguageDetectionDto> {
    const url = `https://api.dandelion.eu/datatxt/li/v1/?text=${text}&clean=${clean}&token=${GetService.getToken()}`;
    this.saveHistory(url);
    return this.httpClient.get<LanguageDetectionDto>(url);
  }

  getSentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysisDto> {
    const url = `https://api.dandelion.eu/datatxt/sent/v1/?lang=${lang}&text=${text}&token=${GetService.getToken()}`;
    this.saveHistory(url);
    return this.httpClient.get<SentimentAnalysisDto>(url);
  }

  getEntityExtraction(text: string, minConfidence: number, image: boolean, abstract: boolean,
                      category: boolean): Observable<EntityExtractionDto> {
    console.log(minConfidence);
    let attributeList = GetService.getAttributeList(image, abstract, category);
    const url = `https://api.dandelion.eu/datatxt/nex/v1/?text=${text}${attributeList}&lang=en&min_confidence=${minConfidence}&token=${GetService.getToken()}`;
    this.saveHistory(url);
    return this.httpClient.get<EntityExtractionDto>(url);
  }

  private saveHistory(url: string) {
    let dateTime = new Date();
    let historyEntry: string = `[${dateTime.toLocaleString()}] GET ${url}`;
    this.history.push(historyEntry);
  }

  private static getAttributeList(image: boolean, abstract: boolean, category: boolean): string {
    let attributeList: string = "";
    if (image) {
      attributeList += ",image";
    }
    if (abstract) {
      attributeList += ",abstract";
    }
    if (category) {
      attributeList += ",category";
    }
    if (attributeList.length != 0) {
      return "&include=" + attributeList.substr(1);
    }
    return "";
  }

  private static getToken(): string | null {
    return localStorage.getItem("token");
  }
}
