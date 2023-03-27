import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AirlineReservationApiService } from "src/app/airline-reservation-api.service";
@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
  // spawn  = require('child_process');
  // childPython = this.spawn('python', ['app.py'])
  submitted = false;
  deleteDialog = false;
  editDialog = false;
  form!: FormGroup;
  description = "New note";
  id = -1;
  data = {
    notesId: 0,
    topic: '',
    content: '',
  };

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<AddnotesComponent>,
      private service: AirlineReservationApiService,
      @Inject(MAT_DIALOG_DATA) data: any) {
        this.data = data.element;
        this.editDialog = data.editDialog;
        this.deleteDialog = data.deleteDialog;
        if(this.editDialog) this.description = "Edit note";
        if(this.deleteDialog) this.description = "Delete note";
  }


  ngOnInit() {
    // this.childPython.stdout.on('data', (data: any) => {
    //   console.log(`stdout: ${data}`);
    // })
    this.form = new FormGroup({
        notesId: new FormControl(this.data.notesId),
        topic: new FormControl(this.data.topic),
        content: new FormControl(this.data.content),
    });
  }
// get fname() { return this.form.get('fname'); }
// get lname() { return this.form.get('lname'); }
// get custEmail() { return this.form.get('custEmail');}
// get custPass() {return this.form.get('custPass');}
  submit() {
      this.submitted = true;
      console.log(this.form.value);
      if(this.deleteDialog) {
        this.service.deleteNotes(this.data.notesId).
          subscribe(response => {
          console.log(response)
        })
      }
      else if(this.editDialog) {
        this.service.updateNotes(this.data.notesId,this.form.value).
          subscribe(response => {
          console.log(response)
        })
      }
      else {
        this.service.addNotes(this.form.value).
          subscribe(response => {
          console.log(response)
        })
      }
      this.dialogRef.close(this.form.value);
  }
  testData = {
    "content": "Debbie put her hand into the hole, sliding her hand down as far as her arm could reach. She wiggled her fingers hoping to touch something, but all she felt was air. She shifted the weight of her body to try and reach an inch or two more down the hole. Her fingers still touched nothing but air."
  }
  callMethod() {
    // const result = lexrank(this.testData.content)
    // console.log(result)
  }
  close() {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}


