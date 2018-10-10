import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-godword",
  templateUrl: "./godword.component.html",
  styleUrls: ["./godword.component.css"]
})
export class GodwordComponent implements OnInit {
  words: string[];
  todayWord: string;
  i: number;

  constructor() {
    this.words = [
      "God will love you!",
      "God Saves you",
      "God never leaves you!",
      "1God will love you!",
      "1God Saves you",
      "1God never leaves you!",
      "2God will love you!",
      "2God Saves you",
      "2God never leaves you!",
      "3God will love you!",
      "3God Saves you",
      "3God never leaves you!"
    ];
    this.i = Math.round(Math.random() * 10);
    this.todayWord = this.words[this.i];
  }

  ngOnInit() {}
}
