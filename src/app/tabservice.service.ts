import { Injectable } from '@angular/core';
import {Tab} from 'src/app/tab';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {
  tabs: Tab[] = [];
  tabOptions: Tab[] = [
                        { name: 'Home', url: '/home' }, 
                        { name: 'Admin',  url: '/admin' },
                        { name: 'Segment',  url: '/segment'}
                      ];

  constructor() { }

  addTab(url: string)
     {
        const tab = this.getTabOptionByUrl(url);
        
        if (!this.tabs.includes(tab))
         {
          this.tabs.push(tab);
        }
    }
   
  getTabOptionByUrl(url: string): Tab 
    {
      console.log("test the url")
      return this.tabOptions.find(tab => tab.url === url);
    }
   
  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
