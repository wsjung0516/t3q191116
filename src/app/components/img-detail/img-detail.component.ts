import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

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
          <form [formGroup]="iform" class="example-form">
              <mat-form-field class="example-full-width">
                  <input matInput placeholder="저장할 파일 이름 입력." formControlName="filename"/>
              </mat-form-field>
          </form>
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
  iform: FormGroup;
  constructor(public dialogRef: MatDialogRef<ImgDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {
    this.iform = this.fb.group({
      filename: ['', Validators.required]
    })
  }
  close() {
    this.dialogRef.close({});
  }
  save() {
    if( this.iform.invalid ) {
      window.alert('저장할 파일이름을 입력하세요!!');
      return;
    }

    this.dialogRef.close({res: 'Y', url: this.data.big, fileName: this.iform.get('filename').value});
  }

}
