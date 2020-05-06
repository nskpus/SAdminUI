import { Component, OnInit } from '@angular/core';
import {TabServiceService} from 'src/app/tabservice.service';
import{Router} from '@angular/router';
//import {admin} from 'src/app/admin' ;
@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {
  menuOptions = [];
  constructor(private tabService: TabServiceService,private router:Router) {}
 
  ngOnInit() {
    this.menuOptions = this.tabService.tabOptions;
  }
  openTab(url: string) {
    this.tabService.addTab(url);
    this.router.navigateByUrl(url);
    //this.gridDisplay=true;
  }
}