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
  cropperOptions:any;
  croppedImage=null;
  modifyImage=null;
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
              private _resImageService: ResImageService) {
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
     // let idx = this.croppedImage.find(',');
      this.modifyImage = this.croppedImage.slice(23, this.croppedImage.length);
      let height = this.angularCropper.cropper.getCroppedCanvas().height;
      let width = this.angularCropper.cropper.getCroppedCanvas().width;
      console.log('this.corrpedImage, height, width', height, width);
      let data = {
        imageName: 't3q',
        imageSize: (height/width),
        imageType: 'RGB',
        //imageEmb: this.croppedImage,
        imageEmb: this.modifyImage,
      };
      this.postData(data);
    }
  }
  private postData (data) {
    // this._resImageService.postReqImage( data);
    this.isProgress = true;

    this._resImageService.postReqImage(data)
      .subscribe( (val) => {
        console.log('resposne from t3q -->', val);
        if( val.res === 200) {
          this.openSnackBar("접수 되었습니다. 잠시만 기다려 주세요!!",'');
        }
        if( val.res === 201) {
          this.isProgress = false;
          // this.rData = [...val];
          this.openSnackBar("데이터 처리가 완료 되었습니다.!!",'');
          this.moveToResPage();
        }
      });

    /**
     질문 1: 데이터 전송 형식
     {file: image, option: 1} 으로 FormData 에 담아서 Post 형식으로 보내면 되는지?
     여기서 image는 base64로 변환된 것.
     option 1: Concept, option 2: Shape 로 구분.

     질문2: 상기 형식으로 서버에 보내면 서버에서는, 처음에 접수하고 접수 결과를 바로 보내주고,
     그 다음에 이미지 데이터를 보내주는 지 확인 필요. 이때 클라이언트는 계속 기다리고 있으면 되는 건지.
     * */
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
    // console.log(this.imgcontainer);
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

