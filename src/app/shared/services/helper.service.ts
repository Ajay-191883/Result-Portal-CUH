import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HelperService{

    isLoading = new Subject<boolean>()

    showLoader(){
        this.isLoading.next(true)
    }
    hideLoader(){
        this.isLoading.next(false)
    }


}