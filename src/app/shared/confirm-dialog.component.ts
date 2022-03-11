import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({


    template: `
    <h1 matDialogTitle>{{title}}</h1>
    <mat-dialog-content>
        {{msg}}
    </mat-dialog-content>

    <mat-dialog-actions>
        <button mat-raised-button color="accent" matDialogClose>Bekor qilish</button>
        <button mat-raised-button color="primary" (click)="ok()">Tasdiqlash</button>
    </mat-dialog-actions>

    `


})

export class ConfirmDialogComponent {
    title = '';
    msg = '';

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {title: string, mgs: string},
    ) {
        this.title = data.title;
        this.msg = data.mgs;    

      }
      ok(){
          this.dialogRef.close(true);
      }
    }
