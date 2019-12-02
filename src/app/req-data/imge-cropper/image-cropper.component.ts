import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CropperComponent } from 'angular-cropperjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-image-cropper',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <button fxFlex="30%" class="previous_page_button" mat-raised-button color="basic" (click)="nextPage.emit()"> 검색결과</button>
      <button fxFlex="65%" class="image_upload_button" mat-raised-button color="primary" (click)="imgFileInput.click()">
        이미지업로드</button>
    </div>
    <input id="image_name" hidden type="file" #imgFileInput (change)="onFileSelected($event)"/>
    <div>
      <div class="cropper-image">
        <angular-cropper #angularCropper [cropperOptions]="cropperOptions" [imageUrl]="url" *ngIf="url"></angular-cropper>
      </div>
      <div class="button-group1" *ngIf="!!angularCropper">
        <button mat-raised-button color="primary" (click)="zoom(true)"><i class="fa fa-search-plus fa-lg"></i></button>
        <button mat-stroked-button color="primary" (click)="zoom(false)"><i class="fa fa-search-minus fa-lg"></i></button>
        <!--<button mat-stroked-button color="warn" (click)="save()"><i class="fa fa-crop fa-lg"></i></button>-->
        <button mat-stroked-button color="primary" (click)="rotate()"><i class="fa fa-rotate-left fa-lg"></i></button>
        <button mat-stroked-button color="primary" (click)="rotateright()"><i class="fa fa-rotate-right fa-lg"></i>
        </button>
        <button mat-stroked-button color="accent" (click)="destroy()"><i class="fa fa-window-close  fa-lg"></i></button>
      </div>
    </div>
  `,
  styles: [`
    .button-group1 {
      position:relative;
      top: 15px;
      display: flex;
      justify-content: space-between;

    }
    .cropper-image {
      position: relative;
      top:10px;
      width: 100%;
      height: 440px;
      overflow: hidden;
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 10;
    }
    .previous_page_button {
      background-color: lightblue;
    }
    .image_upload_button {
      background-color: green;

    }


  `],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ImageCropperComponent,
    multi: true
  }]
})
export class ImageCropperComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('angularCropper', {static: false}) public angularCropper:CropperComponent;
  selectedFile=null;
  scaleValX=1;
  scaleValY=1;
  url = null;
  cropperOptions:any;
  onChange;
  value;
  @Output() cropped = new EventEmitter();
  @Output() nextPage = new EventEmitter();

  constructor() {
    this.cropperOptions={
      dragMode:'crop',
      viewMode: 1,
      autoCrop: false,
      movable:true,
      zoomable:true,
      scalable:true,
      autoCropArea:0.9,
    };
  }
  ngAfterViewInit() {
    this.onChange(setTimeout(() => this.angularCropper),100);
  }
  reset()
  {
    if(this.angularCropper)
      this.angularCropper.cropper.reset();
  }
  clear(){
    if(this.angularCropper)
      this.angularCropper.cropper.clear();
  }
  rotate(){
    console.log('rotate', this.angularCropper);
    if(this.angularCropper)
      this.angularCropper.cropper.rotate(90);
  }
  rotateright(){
    if(this.angularCropper)
      this.angularCropper.cropper.rotate(-90);
  }
  zoom(zoomIn:boolean)
  {
    if(this.angularCropper)
    {
      let factor=zoomIn?0.1:-0.1;
      this.angularCropper.cropper.zoom(factor);
    }
  }
  scaleX(){
    if(this.angularCropper){
      this.scaleValX=this.scaleValX*-1;
      this.angularCropper.cropper.scaleX(this.scaleValX);
    }
  }
  scaleY(){
    if(this.angularCropper){
      this.scaleValY=this.scaleValY*-1;
      this.angularCropper.cropper.scaleY(this.scaleValY);
    }
  }
  move(x,y){
    if(this.angularCropper)
      this.angularCropper.cropper.move(x,y);
  }
  close(){
    this.url=null;
    (document.getElementById("myimg") as HTMLImageElement).src=null;
  }
  destroy()
  {
    if(this.angularCropper)
      this.url=null;
    //this.angularCropper.cropper.destroy();;
  }

  onFileSelected(event)
  {
    if(this.angularCropper)
    {
      this.destroy();
    }
    // console.log(this.imgcontainer);
    if (event.target.files && event.target.files[0]) {
      this.selectedFile=event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as sample_data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        // console.log('event-->',event, event.target);
        this.url = reader.result.toString();

      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    console.log('writeValue', obj);
  }

}
