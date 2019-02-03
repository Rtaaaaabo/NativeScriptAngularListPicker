import { Component, OnInit } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";

let divisionsList = ["北海道", "秋田", "青森", "岩手", "宮城", "山形", "福島", "茨木", "栃木", "群馬", "埼玉", "千葉", "東京", "神奈川", "新潟", "富山"];

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    divisions : Array<string> = [];
    picked : string;

    constructor() {
        for(let i=0; i<divisionsList.length; i++) {
            this.divisions.push(divisionsList[i]);
        }
    }

    selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = this.divisions[picker.selectedIndex];
        console.log(this.picked);
    }

    ngOnInit(): void {
        console.log("都道府県のListPickerです！");
    }
}
