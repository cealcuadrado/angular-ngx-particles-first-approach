import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      background: {
        color: {
          value: '#ff0000'
        }
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#00ff00',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.75
        },
        size: {
          random: true,
          value: 10
        }
      },
      detectRetina: true
    };
  }
}
