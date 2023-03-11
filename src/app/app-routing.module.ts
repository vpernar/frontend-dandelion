import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {HistoryComponent} from "./components/history/history.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {MyGuardGuard} from "./my-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: ConfigurationComponent
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate: [MyGuardGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [MyGuardGuard]
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate: [MyGuardGuard]
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate: [MyGuardGuard]
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate: [MyGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
