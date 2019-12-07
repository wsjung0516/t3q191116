import {
  Component, DoCheck,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {CropperComponent } from 'angular-cropperjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-image-cropper',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <button fxFlex="25%" class="previous_page_button" mat-raised-button color="basic" (click)="nextPage.emit()"> 검색결과</button>
      <button fxFlex="70%" class="image_upload_button" mat-raised-button color="primary" (click)="imgFileInput.click()">
        이미지업로드</button>
<!--      <mat-slide-toggle fxFlex="30%" color="primary" (change)="onToggleChange($event)">클롭핑</mat-slide-toggle>-->
    </div>
    <input id="image_name" hidden type="file" #imgFileInput (change)="onFileSelected($event)"/>
    <div>
      <div class="cropper-image" >
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
export class ImageCropperComponent implements ControlValueAccessor, OnInit, DoCheck {
  @ViewChild('angularCropper', {static: false}) public angularCropper:CropperComponent;
  selectedFile=null;
  url = null;
  cropperOptions:any;
  onChange;
  isCropped = false;
  isToggled = false;
  height;
  width;
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
  ngDoCheck(): void {

    if(
      // this.isToggled  &&
      this.angularCropper &&
      this.angularCropper.cropper &&
      this.angularCropper.cropper.getCroppedCanvas() &&
      (this.angularCropper.cropper.getCroppedCanvas().height !== this.height ||
      this.angularCropper.cropper.getCroppedCanvas().width !== this.width)
       ) {
      //
      /**To set toggle if there is any change in the cropped area*/
      if( this.height ) this.isToggled = true;
      this.height = this.angularCropper.cropper.getCroppedCanvas().height;
      this.width = this.angularCropper.cropper.getCroppedCanvas().width;
      //
      this.makeCroppedImage().then((data) => {
        this.onChange( data )
      });
    }
  }

  ngOnInit(): void {
  }
  onToggleChange(ev: MatSlideToggleChange) {
    console.log('toggleChange', ev, ev.checked);
    this.isToggled = ev.checked;

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
    this.isCropped = false; /** To prevent duplicated calling "makeCroppedImage"*/
    if (event.target.files && event.target.files[0]) {
      // this.selectedFile=event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as sample_data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        // console.log('event-->',event, event.target);
        this.selectedFile = reader.result;
        this.url = reader.result.toString();
        // setTimeout(() => this.makeCroppedImage(),200);
      }
    }
  }
  makeCroppedImage() {
    return new Promise( resolve => {
      let croppedImage;
      console.log('isToggled', this.isToggled);
      if( !this.isToggled) {
          console.log('!isToggled this.selectedFile');
         resolve({image: this.selectedFile, height: this.height, width: this.width})
      }
      else if(this.angularCropper ) {
        croppedImage = this.angularCropper
          .cropper.getCroppedCanvas()
          .toDataURL('image/jpeg', (100 / 100));
        resolve({image: croppedImage, height: this.height, width: this.width})
      }
    })
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    // console.log('writeValue', obj);
  }

}
