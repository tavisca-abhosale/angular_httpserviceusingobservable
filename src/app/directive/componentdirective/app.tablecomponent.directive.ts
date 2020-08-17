import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabledirective-component',
  templateUrl: './app.tablecomponent.view.html'
})

export class TableDirectiveComponent implements OnInit {
  private dataSource: Array<any>;
  headers: Array<string>;
  //@Output()  EventEmitter<T>, cass used to emit event with payload parameter as T
  @Output() notifyRowClick: EventEmitter<any>;
  @Output() notifyDeleteRecord: EventEmitter<any>;
  constructor() {
    this.dataSource = new Array<any>();
    this.headers = new Array<string>();
    this.notifyRowClick = new EventEmitter<any>();
    this.notifyDeleteRecord=new EventEmitter<any>();
  }
   ngOnInit():void {
    
   }

  // parent will be able to use datasourve property for
  // property binding
  @Input()
  set DataSource(val: Array<any>) {
    debugger;
    this.setDataSource(val);
   
  }
  get DataSource(): Array<any> {
    return this.dataSource;
  }

setDataSource(val: Array<any>){
  if (val.length > 0) {
    this.dataSource = val;
    this.headers=new Array<string>();
    // generate headers from the first record of the array
    for (const p of Object.keys(this.dataSource[0])) {
      this.headers.push(p);
    }
  } else {
    this.dataSource = new Array<any>();
  }
}

  rowClick(rec: any): void {
    // the emit will pass the data to parent
    // parent must subscribe to the event using
    // event binding and  read data
    debugger;
    this.notifyRowClick.emit(rec);
  }

  deleteClick(event, record:any): void{
    debugger;    
    this.notifyDeleteRecord.emit(record); 
    event.stopPropagation();   
  }
}


