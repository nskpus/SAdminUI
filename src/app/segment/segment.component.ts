//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, APP_ID } from '@angular/core';
//import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  //private gridColumnApi;

  data1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  selected: any;
  array: any[];
  modalData;
  newCount = 1;
  modeldata: any;
  private gridApi;
  datachangedflag = false;
  databeforechange = true;
  createRowData: any;
  selectedrowdata: any;
  newItem: any;
  rowData3 = [];
  idno = 4;
  updateRowData: '';
  updatedgrid:any;
  selectedLevel:any;
  item:[{ id: 0, name: "PL" },
  { id: 1, name: "FO" },
  { id: 2, name: "Email" },
  { id: 3, name: "Direct Email" }];

  data: Array<Object> = [
    { id: 0, name: "PL" },
    { id: 1, name: "FO" },
    { id: 2, name: "Email" },
    { id: 3, name: "Direct Email" }
  ];
    
  inputType1 = '<select id="abc" onchange="onClickOnGrid();"><option value="pl">PL</option><option value="fo">FO</option><option value="email">Email</option><option value="directemail">Direct Email</option> </select>';
  
  gridOptions = {
    id: this.idno,
    columnDefs: 'columnDefs',
    rowData: 'rowData',
    rowSelection: 'single',
    getSelectedRows: 'getSelectedRows',
    onSelectionChanged: 'onSelectionChanged',
    api: 'api',
    insertItemsAtIndex: 'insertItemsAtIndex',
    updateRowData: 'updateRowData'
  };

  columnDefs = [
    { headerName: 'Client', field: 'client' },
    { headerName: 'Client Brand', field: 'clientbrand' },
    { headerName: 'Product Reference Number', field: 'productReferenceNumber' },
    { headerName: 'Product Type', field: 'producttype' },
    { headerName: 'Campaign Type', field: "campaigntype" }
  ];

  rowData = [
    { id: 1, client: 'GapInc', clientbrand: 'ABCD', producttype: 'PLCC', productReferenceNumber: 814841, campaigntype: 'PLCC' },
    { id: 2, client: 'Test', clientbrand: 'Text', producttype: 'PSLVC', productReferenceNumber: 814842, campaigntype: 'SLCV' }
    // { client: 'GapInc', clientbrand: 'ABCD', producttype: 'PLCC', productReferenceNumber: 814841, campaigntype: 'PLCC' },
    // { client: 'Test', clientbrand: 'Text', producttype: 'PSLVC', productReferenceNumber: 814842, campaigntype: 'SLCV' }
  ];

  columnDefs1 = [
    { headerName: 'Check box', width: 97, field: 'checkbox', checkboxSelection: true },
    { headerName: 'Group Name', field: 'groupname', editable: true },
    { headerName: 'Segment Name', field: 'segmentname', editable: true },
    { headerName: 'Cleint Brand', field: 'cleintbrand', editable: true },
    { headerName: 'Channel', field: 'channel', template: this.inputType1 },
    { headerName: 'Offer Type', field: 'offertype', editable: true }
  ];

  rowData1 = [
    { id: 1, groupname: 'Group01', segmentname: '01', cleintbrand: 'All Brands', channel: this.inputType1, offertype: 'Text' },
    { id: 2, groupname: 'Group02', segmentname: '02', cleintbrand: 'All Brands', channel: this.inputType1, offertype: 'Test' },
    { id: 3, groupname: 'Group03', segmentname: '03', cleintbrand: 'All Brands', channel: this.inputType1, offertype: 'Text' },
    // { id: 4, groupname: 'Group04', segmentname: '04', cleintbrand: 'All Brands', channel: this.inputType1, offertype: 'Test' },
    // { id: 5, groupname: 'Group05', segmentname: '05', cleintbrand: 'All Brands', channel: this.inputType1, offertype: 'Text' },
    // { id: 6, groupname: 'Group06', segmentname: '06', cleintbrand: 'All Brands', channel: this.inputType1, offertype: 'Test' }
  ];


  //modules = AllCommunityModules;

  constructor(private route: Router) {

  }
  onClickOnGrid(){
    console.log("this ::::::::::::::",this);
  }
  selectionChange() {
    console.log(this);
  }
  ngOnInit() {
    
    //this.inputType1='<select [(ngModel)]="selectedLevel" (change)="selected()"> <option *ngFor="let this.item of this.data" [ngValue]="item">{{this.item.name}}</option></select>';
    //this.rowData1=this.modeldata;
    console.log("inputType", this.inputType1);
    console.log("selectedLevel", this.selectedLevel);
    
    
  }

  save() {
    console.log("save is triggered:::");
    console.log("Grid Data::", this.rowData);

    console.log("Grid Data::", this.rowData1);

    console.log("this.rowData1.values", this.rowData1[0].channel);

    var select = document.getElementById("abc");
    var options = select.getElementsByTagName("option");
    for (var i = 0; i < this.rowData1.length; i++) {

      this.selected = options[document.getElementsByTagName('select')[i + 1].selectedIndex].value;
      console.log("this.selected >>>>>>>>> ", this.selected);
    }

  }
  dialogsave($event: any) {

    console.log("dialogsave is called:::::", this.modeldata);
    if (this.modeldata == undefined) {
      this.modeldata = this.rowData1;
    }
    else if (this.modeldata.length > 0) {

      console.log('inside else', this.modeldata);

      this.modeldata = this.rowData1;

      console.log('rowData1 rowData1', this.rowData1);
    }
    this.datachangedflag = true;
    this.databeforechange = false;
    this.rowData1 = this.modeldata;

    this.gridApi.setRowData(this.rowData1);

  }

  onRowClicked(event: any) {
    console.log('selectRows', event.data);
    this.selectedrowdata = event.data;
    console.log("selectedLevel", this.selectedLevel);
    var select = document.getElementById("abc");
    var options = select.getElementsByTagName("option");
    for (var i = 0; i < this.rowData1.length; i++) {

      this.selected = options[document.getElementsByTagName('select')[i + 1].selectedIndex].value;
      console.log("this.selected >>>>>>>>> ", this.selected);
    }

  }

  onGridReady(params) {
    this.gridApi = params.api;
    console.log("this.gridApi:::::::::", this.gridApi);
    //this.gridColumnApi = params.columnApi;

  }

  addRow() {

    console.log("addRow event is triggered::");

    this.newItem = this.createNewRowData();

    console.log("newItem values are:::::::", this.newItem);

    this.rowData1.push(this.newItem);

    console.log('this.rowData1 after adding the new row:::::', this.rowData1);

    let arr=new Array();

    for(var x=0; x<this.rowData1.length; x++){
     
        arr.push(this.rowData1[x]);

        console.log('arr:::::::::',arr);
     }    
        

    this.rowData1=arr;

    this.gridApi.setRowData(this.rowData1);   

  }
   
  createNewRowData() {
    var newData = {
      id: ''+this.idno,
      groupname: "",
      segmentname: "",
      cleintbrand: "",
      channel: "",
      offertype: ""
    };
    this.idno++;
    return newData;
  }

  deleteRow() {

    console.log("deleteRow event is triggered:::", this.rowData1);

    console.log('this.selectedrowdata::::::', this.selectedrowdata);

    console.log('this.selectedrowdata.id::::::', this.selectedrowdata.id);    

    let arr=new Array();

    for(var x=0; x<this.rowData1.length; x++){

      if(this.rowData1[x].id==this.selectedrowdata.id){
        
        
      }  else{
        arr.push(this.rowData1[x]);

        console.log('arr:::::::::',arr);
      }    

    }
    
    this.rowData1=arr;

    this.rowData1=this.rowData1;

    this.gridApi.setRowData(this.rowData1);

  }

  

  refresh(){
    console.log('Before: Refreshed::::::::');
    

    let arr=new Array();

    for(var x=0; x<this.rowData1.length; x++){
     
        arr.push(this.rowData1[x]);

        console.log('arr:::::::::',arr);
     }    
        

    this.rowData1=arr;

    this.gridApi.setRowData(this.rowData1);
    console.log('After Refreshed::::::::');
  }
}

