import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-img-detail',
  template: `
    <div class="dialog-container">
        <mat-card class="width-card">
            <mat-card-header>
                <mat-card-title>{{data.title}}</mat-card-title>
            </mat-card-header>
            <div class="card_image">
                <img class="card-img" [src]="data.big">
            </div>
            <mat-card-content>
                <div style="margin-block-end: 0em;">{{data.ITN}}</div>
                <div style="margin-block-end: 0em;">{{data.ITD}}</div>
                <div style="margin-block-end: 0em;">{{data.ITB}}</div>
                <div style="margin-block-end: 0em;">{{data.ICL}}</div>
            </mat-card-content>
            <mat-card-actions align="end">
                <button mat-raised-button (click)="close()">취소</button>
                <button mat-raised-button color="primary" (click)="save(data.title)">저장</button>
            </mat-card-actions>
        </mat-card>

    </div>
  `,
  styles: [
    `
      .dialog-container {
          padding: 4px 4px 4px 4px;
      }
      .card-img {
          display: flex;
          justify-content: center;
          height: 250px;
          overflow: hidden

      }
          .width-card {
              max-width: 270px;
              padding: 0px;
          }

          .example-header-image {
              background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
              background-size: cover;
          }

    `
  ]
})
export class ImgDetailComponent implements OnInit {
  iform: FormGroup;
  constructor(public dialogRef: MatDialogRef<ImgDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              ) { }

  ngOnInit() {
    this.iform = this.fb.group({
      filename: ['', Validators.required]
    })
  }
  close() {
    this.dialogRef.close({});
  }
  save(title) {
/*
    if( this.iform.invalid ) {
      window.alert('저장할 파일이름을 입력하세요!!');
      return;
    }
*/

    this.dialogRef.close({res: 'Y', url: this.data.big, fileName: title});
    // this.dialogRef.close({res: 'Y', url: this.data.big, fileName: this.iform.get('filename').value});
  }

}
