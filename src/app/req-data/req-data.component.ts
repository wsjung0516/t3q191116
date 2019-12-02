import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CropperComponent } from 'angular-cropperjs';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {ResImageService} from "../services/res-image.service";

@Component({
  selector: 'cropper',
  templateUrl: './req-data.component.html',
  styleUrls: ['./req-data.component.css']
})
export class ReqDataComponent implements OnInit{
  // @ViewChild('angularCropper', {static: false}) public angularCropper:CropperComponent;
  @ViewChild('result', {static: true}) public result:any;
  // @ViewChild( CropperComponent, {static: false}) cropper: CropperComponent;
  croppedImage=null;
  modifyImage=null;
  radioValue: string;
  isProgress = false;
  isCropping = false;
  rData: any[] = [];
  iform = FormGroup;
  // croppedImageData: FormControl;
  croppedData : CropperComponent;
  croppedImageData = new FormControl('');
  constructor(private fb: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private _snackBar: MatSnackBar,
              private _router: Router,
              private _resImageService: ResImageService,
              ) {
  }
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.radioValue = '03';
    this.croppedImageData.valueChanges.subscribe(value => console.log('value->', value));
    // @ts-ignore
    // this.iform = this.fb.group({
    //   croppedImageData: ['', Validators.required]
    // })
    // this.angularCropper = this.croppedImageData;

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
    // this.angularCropper = this.iform.get('croppedImageData').value;
    // if(this.angularCropper){
    if(this.croppedImageData){
      this.croppedData = this.croppedImageData.value;
      this.croppedImage = this.croppedData
        .cropper.getCroppedCanvas()
        .toDataURL('image/jpeg', (100/100));
      // (document.getElementById("myimg") as HTMLImageElement).src=this.croppedImage;
     // let idx = this.croppedImage.find(',');
      this.modifyImage = this.croppedImage.slice(23, this.croppedImage.length);
      let height = this.croppedData.cropper.getCroppedCanvas().height;
      let width = this.croppedData.cropper.getCroppedCanvas().width;
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

}

