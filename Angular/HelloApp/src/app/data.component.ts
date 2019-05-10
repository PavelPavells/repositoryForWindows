import { Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {LogService} from './log.service';
import {Phone} from './phone';
       
@Component({
    selector: 'data-comp',
    template: `<div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <input class="form-control" [(ngModel)]="name" placeholder = "Модель" />
                <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                <button class="btn btn-default" (click)="addItem(name, price)">Добавить</button>
            </div>
        </div>
        <table class="table table-striped">
            <tr *ngFor="let item of items">
                <td>{{item.name}}</td>
            </tr>
        </table>
    </div>`,
    providers: [DataService, LogService]
})
export class DataComponent implements OnInit { 
     
    items: Phone[] = [];
    constructor(public dataService: DataService){}
     
    addItem(name: string, price: number){
         
        this.dataService.addData(name, price);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}