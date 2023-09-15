import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-with-list',
  templateUrl: './alert-with-list.component.html',
  styleUrls: ['./alert-with-list.component.css']
})
export class AlertWithListComponent implements OnInit, OnChanges {
  
  constructor(){}

  @Input() visible: boolean = false;
  @Input() kind:
            'success' |
            'error'   |
            'warning' |
            'info'    |
            'default' = 'default';
  
  defaultTextColorIntensity: number = 800;
  defaultBgColorIntensity: number = 50;

  @Input() strongSpan: string = '';
  @Input() list: any[] = [];
  @Input() span: string = '';

  // @Input() timer: boolean = true;
  // @Input() timeOut: number = 4;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.timeToHide();
    // }, 3000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  timeToHide(){
    // this.hasToHide.next(true);
  }

}
