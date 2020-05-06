import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ProductDetails = null;
  ProductHeader = [{ name: 'Hp' }, { name: 'Dell' }, { name: 'Lenovo' }];

  ngOnInit() {
    //this.gridDisplay=true;
  }
  rowData = [];
  modalData;
  Id;
  displayData;
  rowDataNew;
  rowIndexData;
  //gridApi;
  selectedvalue = {};
  clickedNow = false;
  gridDisplay = false;
  private gridApi;
  dataUpdatedflag;
  //columnDefs;
  columnDefs = [
    { headerName: 'Check box', width: 90, field: 'checkbox', checkboxSelection: true },
    { headerName: 'ID', width: 90, field: 'ID' },
    { headerName: 'DisplayName', field: 'DisplayName' },
    { headerName: 'Value', field: 'Value' },
    { headerName: 'Workfront', width: 120, field: 'Workfront' },
    { headerName: 'SegmentMatrix', field: 'SegmentMatrix' }

  ];
  columnDefs1 = [
    { headerName: 'ID', width: 90, field: 'ID' },
    { headerName: 'DisplayName', field: 'DisplayName', editable: true },
    { headerName: 'Value', field: 'Value', editable: true },
    { headerName: 'Workfront', field: 'Workfront', editable: true },
    { headerName: 'SegmentMatrix', field: 'SegmentMatrix', editable: true }

  ];

  rowData1 = [
    { ID: '1', DisplayName: 'HP ENVY Laptop - 15t touch', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "HP" },
    { ID: '2', DisplayName: 'HP OfficeJet Pro 69', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "HP" },
    { ID: '3', DisplayName: 'HP Laptop - 17t touch', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "HP" },
    { ID: '4', DisplayName: '641saidulu', Value: 'SHARA', Workfront: 72004, SegmentMatrix: 'YES', Company: "HP" },
    { ID: '13', DisplayName: 'HP12 ', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "HP" },
    { ID: '14', DisplayName: 'HP14', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "HP" },
    { ID: '15', DisplayName: 'HP15 Laptop - 17t touch', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "HP" },
    { ID: '16', DisplayName: 'HP16', Value: 'SHARA', Workfront: 72004, SegmentMatrix: 'YES', Company: "HP" }
  ];
  rowData2 = [
    { ID: '5', DisplayName: 'Dell Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Dell" },
    { ID: '6', DisplayName: 'Dell - XPS 27 ', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Dell" },
    { ID: '7', DisplayName: 'Dell - Inspiron 21.5', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Dell" },
    { ID: '8', DisplayName: 'Dell - XPS 2-in-1 13.3', Value: 'FDFDFDF', Workfront: 72004, SegmentMatrix: 'YES', Company: "Dell" },
    { ID: '9', DisplayName: '641saiduluDell', Value: 'BULLET', Workfront: 72004, SegmentMatrix: 'YES', Company: "Dell" },
    { ID: '17', DisplayName: 'Dell17 Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Dell" },
    { ID: '18', DisplayName: 'Dell18 - XPS 27 ', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Dell" },
    { ID: '19', DisplayName: 'Dell19 - Inspiron 21.5', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Dell" },
    { ID: '20', DisplayName: 'Dell20 - XPS 2-in-1 13.3', Value: 'FDFDFDF', Workfront: 72004, SegmentMatrix: 'YES', Company: "Dell" },
    { ID: '21', DisplayName: 'Dell21', Value: 'BULLET', Workfront: 72004, SegmentMatrix: 'YES', Company: "Dell" }

  ];
  rowData3 = [
    { ID: '10', DisplayName: 'Lenovo Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '11', DisplayName: 'Lenovo - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '12', DisplayName: '641Lenovo', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '22', DisplayName: 'Lenovo22 Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '23', DisplayName: 'Lenovo23 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '24', DisplayName: '641Lenovo24', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '25', DisplayName: 'Lenovo25 Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '26', DisplayName: 'Lenovo26 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '27', DisplayName: '641Lenovo27', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '28', DisplayName: 'Lenovo28 Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '29', DisplayName: 'Lenovo29 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '30', DisplayName: '641Lenovo30', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '31', DisplayName: 'Lenovo31', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '32', DisplayName: 'Lenovo32 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '33', DisplayName: '641Lenovo33', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '34', DisplayName: 'Lenovo34 Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '35', DisplayName: 'Lenovo35 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '36', DisplayName: '641Lenovo36', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '37', DisplayName: 'Lenovo37 Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '38', DisplayName: 'Lenovo38 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '39', DisplayName: '641Lenovo39', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '40', DisplayName: 'Lenovo40 Touch-Screen Laptop', Value: 'Celica', Workfront: 35000, SegmentMatrix: 'YES', Company: "Lenovo" },
    { ID: '41', DisplayName: 'Lenovo41 - 520-24AST 23', Value: 'Mondeo', Workfront: 32000, SegmentMatrix: 'NO', Company: "Lenovo" },
    { ID: '42', DisplayName: '641Lenovo42', Value: 'Boxter', Workfront: 72000, SegmentMatrix: 'NO', Company: "Lenovo" },

  ];
  constructor() {
    this.getProducts();
    //this.gridDisplay=true;

  }
  getProducts() {
    console.log("getProducts", this.ProductHeader);
    return this.ProductHeader;
  }
  SearchProduct(name: string) {

    if (name === "Hp") {
      console.log(" select HP product");
      this.rowData = this.rowData1;
      // this.columnDefs=this.columnDefs1;
      //this.gridApi=true;
      this.gridDisplay = true;
      
    }
    else if (name === "Dell") {
      console.log(" select Dell product");
      this.rowData = this.rowData2;
      this.gridDisplay = true;
    }
    else if (name === "Lenovo") {
      console.log("select Lenova product");
      this.rowData = this.rowData3;
      this.gridDisplay = true;
    }

  }

  onRowClicked(event: any) {
    console.log('row', event);
    this.modalData = event.data;
    //this.rowIndexData = event.rowIndex;
    console.log("clicked row Data displayed", this.modalData);
    //console.log("rowIndex", this.rowIndexData);
    this.clickedNow = true;
    // this.onRowClicked=null;

  }

  saveUpdatedData(event: any) {
    console.log("display the actuallu data", this.modalData);
    this.rowDataNew = this.modalData;

    // console.log("updated grid data", this.rowDataNew.ID, // this.rowDataNew.DisplayName // this.rowDataNew.Value, this.rowDataNew.Workfront,
    // this.rowDataNew.SegmentMatrix, this.rowDataNew.Company);

    if (this.rowDataNew.Company === 'Dell')
       {
          console.log("enter the if condition")
          //this.rowDataNew.ID === this.modalData.ID;
          console.log("index", this.rowDataNew);
          //this.gridApi.getSelectedRows("get selected rows data",this.rowDataNew);
          this.gridApi.setRowData(this.rowData);
          console.log("this.gredApi", this.gridApi);
          console.log("dell data updated");
         // alert('dell data updated')

      } else if (this.rowDataNew.Company === 'HP')
       {
          console.log("enter the else if block and selected the product HP");
          console.log("index", this.rowDataNew);
          this.gridApi.setRowData(this.rowData);
          console.log("this.gredApi", this.gridApi);
          console.log("lenova data updated");
          //alert(' HP data updated')
          //this.modalData = null;

    } else {
          console.log("enter the else block and selected the product Lenovo");
          console.log("index", this.rowDataNew);
          this.gridApi.setRowData(this.rowData);
          console.log("this.gredApi", this.gridApi);
          console.log("lenova data updated");
          //alert('Lenova data updated')
          //this.modalData = null;

    }
  }

  onSelectionChanged(event: any) {
    //console.log("test");

  }
  onRowSelected(event) {
    this.selectedvalue = event;
  }

  RefreshRisqueBrutColumn() {
    //console.log('test the refresh data', this.rowData);
    //this.rowData=this.rowDataNew;
    //console.log('test the refresh data1', this.rowDataNew);
  }

  closeModalData() {
    //this.modalData = null;
    //this.rowData=this.modalData;
    //this.gridApi.setRowData(this.rowData);
    //this.onRowClicked=null;
    //this.saveUpdatedData=null;
    //this.onRowClicked=null;
    //this.clickedNow=false;
    //this.onRowSelected=false;
  }

  gridOptions = {
        //id: this.idno,
        //columnDefs: 'columnDefs',
        rowData: 'rowData',
        rowSelection: 'single',
        getSelectedRows: 'getSelectedRows',
        onSelectionChanged: 'onSelectionChanged',
        api:'api',
        insertItemsAtIndex:'insertItemsAtIndex',
        updateRowData:'updateRowData'
      }; 


  onGridReady(params) {
    this.gridApi = params.api;
    console.log("this.gridApi:::::::::", this.gridApi);
    // this.gridColumnApi = params.columnApi;
    // this.gridApi.closeToolPanel();

    // window.resize(() =>
    //   // if there is already a call to get the grd width on api object let me know...i couldn't find one
    //   params.api.getWidthForSizeColsToFit() && params.api.sizeColumnsToFit()
    // )



  }

}
