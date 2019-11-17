import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-img-detail',
  template: `
      <mat-card class="example-card">
          <mat-card-header>
              <mat-card-title>Title</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="data.big">
          <mat-card-content>
              <p>
                  afdsfsdfsdfbfdsfefefeefdfdsfasfasdfsd
                  afdsfsdfsdfbfdsfefefeefdfdsfasfasdfsd
                  afdsfsdfsdfbfdsfefefeefdfdsfasfasdfsd
              </p>
          </mat-card-content>
          <mat-card-actions align="end">
              <button mat-raised-button (click)="close()">취소</button>
              <button mat-raised-button color="primary" (click)="save()">저장</button>
          </mat-card-actions>
      </mat-card>
  `,
  styles: [
    `
          .example-card {
              max-width: 400px;
          }

          .example-header-image {
              background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
              background-size: cover;
          }
    
    `
  ]
})
export class ImgDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImgDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close();
  }

}
