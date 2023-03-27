import { Component, OnInit, ElementRef } from '@angular/core';
import { AirlineReservationApiService } from 'src/app/airline-reservation-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { Customer } from 'src/app/entities/customer';
import { Observable,Subscription, interval  } from 'rxjs';
import {PythonShell} from 'python-shell';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  // pythonshell = require('python-shell')
  element: any;
  editDialog = false;
  deleteDialog = false;
  dataSource = new MatTableDataSource<any>();
  data !: any[];
  interval: any;

  constructor(private service: AirlineReservationApiService, private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog,
    private snackBar: MatSnackBar) {

    }
    private subscription: Subscription = new Subscription()


  ngOnInit() {
    // this.pythonshell.run("app.py",null,function(err,results){
    //   console.log(results)
    //   console.log("Hello world")
    // })

    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 5000);
  }

  getData() {
    this.service.getNotes().subscribe(notes => {
      this.dataSource.data = notes;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // list = this.dataSource.data.reverse();
  // @ViewChild('searchbar') searchbar!: ElementRef;
  // searchText = '';

  // toggleSearch: boolean = false;

  // openSearch() {
  //   this.toggleSearch = true;
  //   this.searchbar.nativeElement.focus();
  // }
  // searchClose() {
  //   this.searchText = '';
  //   this.toggleSearch = false;
  // }

  displayedColumns: string[] = ['content', 'edit-delete'];

  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }


  /** Announce the change in sort state for assistive technology. */
  // announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
  onEdit(element: any){
    this.editDialog = true;
    this.element = element;
    this.openDialog();
  }
  onDelete(element: any) {
    this.deleteDialog = true;
    this.element = element;
    this.openDialog();
  }


  openDialog() {
    // PythonShell.run('app.py', undefined).then(messages=>{
    //   console.log('finished');
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '200px',
      left: '500px'
    };
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      element: {
        notesId: 0,
        topic: '',
        content: '',
      },
      editDialog: false,
      deleteDialog: false
    }

    if (this.editDialog) {
      dialogConfig.data = {
        element: this.element,
        editDialog: true,
        deleteDialog: false
      }
      this.editDialog = false;
    }
    else if (this.deleteDialog) {
      dialogConfig.position = {
        top: '250px',
        left: '600px'
      };
      dialogConfig.height = '200px';
      dialogConfig.width = '300px';
      dialogConfig.data = {
        element: this.element,
        editDialog: false,
        deleteDialog: true
      }
      this.deleteDialog = false;
    }
    const dialogRef = this.dialog.open(AddnotesComponent, dialogConfig);
  }

}
