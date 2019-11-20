import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CropperComponent } from 'angular-cropperjs';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'cropper',
  templateUrl: './req-data.component.html',
  styleUrls: ['./req-data.component.css']
})
export class ReqDataComponent implements OnInit{
  @ViewChild('angularCropper', {static: false}) public angularCropper:CropperComponent;
  @ViewChild('result', {static: true}) public result:any;
  cropperOptions:any;
  croppedImage=null;
  myImg=null;
  scaleValX=1;
  scaleValY=1;
  form
  selectedFile=null;
  url = null;
  imgcontainer;
  radioValue: string;
  isProgress = false;
  constructor(private fb: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private _snackBar: MatSnackBar,
              private _router: Router,
              private _http: HttpClient) {
    this.cropperOptions={
      dragMode:'crop',
      autoCrop:true,
      movable:true,
      zoomable:true,
      scalable:true,
      autoCropArea:0.8,
    };
  }
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.radioValue = '1';
  }
  goNextPage() {
    console.log('router is called');
    this._router.navigate(['/res-data']);
  }

  save()
  {
    if(this.angularCropper){
      this.croppedImage = this.angularCropper
        .cropper.getCroppedCanvas()
        .toDataURL('image/jpeg', (100/100));
      // (document.getElementById("myimg") as HTMLImageElement).src=this.croppedImage;
      this.postData();
      // console.log(this.croppedImage);
    }
  }
  private postData () {
    this.openSnackBar("접수 되었습니다. 잠시만 기다려 주세요!!",'');
    setTimeout(() => {
      this.moveToResPage();
    }, 4000);
    //
/*
    this._http.post('url', toFormData(this.croppedImage))
      .pipe().subscribe( (val) => console.log('resposne from t3q -->', val));
*/
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
    this._router.navigate(['/res-data', {image: this.croppedImage}]);
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
    console.log(this.imgcontainer);
    if (event.target.files && event.target.files[0]) {
      this.selectedFile=event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result.toString();

      }
    }
  }
}
