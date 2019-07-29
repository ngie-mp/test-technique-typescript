import { Injectable } from '@angular/core';
import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/injector';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  results: Array<ResultModel> = [];
  constructor() {}

  public addResult(newResult: ResultModel) {
    this.results.push(newResult);
  }

  public seenResult(idResult: number) {
    this.results.filter(
      result => result.id === idResult
    )[0].isSeen = true;
  }

  public unseenResult(idResult: number) {

  }

  public getAllResult(): Array<ResultModel> {
    return this.results;
  }

  public getAllResultSeen(): Array<ResultModel> {
    return this.results.filter(result => result.isSeen === true);
  }

  public getAllResultUnSeen(): Array<ResultModel> {
    return null;
  }

  public numberOfEventSeen(): number {
    return null;
  }
}
