import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class DataService {

    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(
    ) {}

    public changeValue(state: boolean) {
        this.isLoading.next(state);
    }

}