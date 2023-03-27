import { Component, OnInit } from '@angular/core';

declare const lex: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  index = ["Customer"]
  title = 'angular-jquery';

  ngOnInit() {
    lex("Hello")
    // const result = lexrank(this.testData.content)
    // console.log(result)
  }
}
