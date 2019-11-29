import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CropperComponent } from 'angular-cropperjs';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ResImageService} from "../app/services/res-image.service";

@Component({
  selector: 'cropper',
  templateUrl: './req-data.component.html',
  styleUrls: ['./req-data.component.css']
})
export class ReqDataComponent implements OnInit{
  @ViewChild('angularCropper', {static: false}) public angularCropper:CropperComponent;
  @ViewChild('result', {static: true}) public result:any;
  // @ViewChild( CropperComponent, {static: false}) cropper: CropperComponent;
  cropperOptions:any;
  croppedImage=null;
  modifyImage=null;
  scaleValX=1;
  scaleValY=1;
  selectedFile=null;
  url = null;
  radioValue: string;
  isProgress = false;
  isCropping = false;
  rData: any[] = [];
  constructor(private fb: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private _snackBar: MatSnackBar,
              private _router: Router,
              private _resImageService: ResImageService) {
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
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.radioValue = '03';
  }
  goNextPage() {
    console.log('router is called');
    this._router.navigate(['/res-data']);
  }
/*
  enableCropping() {
    this.isCropping = !this.isCropping;
    console.log('cropping -->', this.isCropping);
    this.cropper.cropper.enable();
  }
*/
  save()
  {
    if(this.angularCropper){
      this.croppedImage = this.angularCropper
        .cropper.getCroppedCanvas()
        .toDataURL('image/jpeg', (100/100));
      // (document.getElementById("myimg") as HTMLImageElement).src=this.croppedImage;
     // let idx = this.croppedImage.find(',');
      this.modifyImage = this.croppedImage.slice(23, this.croppedImage.length);
      let height = this.angularCropper.cropper.getCroppedCanvas().height;
      let width = this.angularCropper.cropper.getCroppedCanvas().width;
      // let name = this.angularCropper.cropper.getCroppedCanvas().title;
      // var fullPath = document.getElementById("image_name")[0].files[0];
      // var filename = fullPath.replace(/^.*[\\\/]/, '');
      // console.log('this.corrpedImage, height, width', height, width, filename);
      let data = {
        imageName: 't3q',
        imageSize: (height/width),
        imageType: 'jpeg',
        imageEmb: this.modifyImage,
        category: this.radioValue
      };
      this.postData(data);
    }
  }
  private postData (data) {
    // this._resImageService.postReqImage( sample_data);
    this.isProgress = true;

    this.openSnackBar("접수 되었습니다. 잠시만 기다려 주세요!!",'');
    this._resImageService.postReqImage(data)
      .subscribe( (val) => {
        console.log('resposne from t3q -->', val);
        if( val.res === 200) {
        }
        if( val.response === 201) {
          this.isProgress = false;
          // this.rData = [...val];
          this.openSnackBar("데이터 처리가 완료 되었습니다.!!",'');
          //val.data.map( val => this.rData.push(val));
          this.rData = val.data;
          // console.log('val', val, val.data, this.rData);
          this.moveToResPage();
        }
      });
  }
  backgroundImage() {
    //return 'url('+'../../assets/images/t3q4.png'+')';
    return `url("../../assets/images/t3q2.png")`;
  }
  openSnackBar(message: string, action: string) {
    this.isProgress = true;
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  moveToResPage() {
    this.isProgress = false;
    let params = {
      data: JSON.stringify(this.rData),
      image: this.croppedImage
    };
    this._router.navigate(['/res-data'], {queryParams: params});
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
  destroy()
  {
    if(this.angularCropper)
      this.url=null;
    //this.angularCropper.cropper.destroy();;
  }
  close(){
    this.url=null;
    (document.getElementById("myimg") as HTMLImageElement).src=null;
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
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as sample_data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log('event-->',event, event.target);
        this.url = reader.result.toString();

      }
    }
  }
}

