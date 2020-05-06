import { Component, OnInit } from '@angular/core';
//import { TabServiceService}from 'src/app/tabservice.service'
import { TabServiceService } from 'src/app/tabservice.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
tabs = [];
private activeTabUrl:string;
constructor(private tabService: TabServiceService, private router: Router)
 {

 }
  
gridDisplay=false;


ngOnInit() {
  this.tabs = this.tabService.tabs;
  this.router.events.subscribe(event =>
     {
       if (event instanceof NavigationEnd)
           {
               this.activeTabUrl = event.urlAfterRedirects;
               if (this.tabs.length === 1) 
                  {
                    this.tabService.addTab(this.activeTabUrl);
                 }
          }
      });
}
closeTab(index: number, event: Event) {
  this.tabService.deleteTab(index);
  event.preventDefault();
}
onTabChange(event) {
  this.router.navigateByUrl(event.nextId);
  console.log("tab changed ");
  this.gridDisplay=true;
  
}
}

