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
    const idResult = this.results.filter(result => result.id === newResult.id);

    if (idResult.length === 0 ) {
      this.results.push(newResult);
    } else {
      return `The id ${newResult.id} alredy exists`;
    }
  }

  public seenResult(idResult: number) {
    const seenResults = this.results.filter(result => result.id === idResult);

    if (seenResults.length !== 0) {
      this.results.filter(
        result => result.id === idResult
      )[0].isSeen = true;
    } else {
      return false;
    }
  }

  public unseenResult(idResult: number) {
    this.results.filter(
      result => result.id === idResult
    )[0].isSeen = false;
  }

  public getAllResult(): Array<ResultModel> {
    return this.results;
  }

  public getAllResultSeen(): Array<ResultModel> {
    return this.results.filter(result => result.isSeen === true);
  }

  public getAllResultUnSeen(): Array<ResultModel> {
    return this.results.filter(result => result.isSeen === false);
  }

  public numberOfEventSeen(): number {
    return null;
  }
}
