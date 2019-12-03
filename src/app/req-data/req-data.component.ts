import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ResImageService} from "../services/res-image.service";
import {Select, Store} from '@ngxs/store';
import {ResetState, SaveCroppedImage, StartAnalyze} from './store/req-data.actions';
import {Navigate} from "@ngxs/router-plugin";
import {ReqDataState, ReqDataStateModel} from './store/req-data.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'cropper',
  templateUrl: './req-data.component.html',
  styleUrls: ['./req-data.component.css']
})
export class ReqDataComponent implements OnInit{
  @ViewChild('result', {static: true}) public result:any;
  croppedImage=null;
  modifyImage=null;
  radioValue: string;
  isProgress = false;
  croppedImageData = new FormControl('');
  height;
  width;
  @Select(ReqDataState.getLoaded) loaded$: Observable<ReqDataStateModel>;
  @Select(ReqDataState.getLoading) loading$: Observable<ReqDataStateModel>;
  @Select(ReqDataState.getCropImage) cropImage$: Observable<ReqDataStateModel>;
  constructor(private fb: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private _snackBar: MatSnackBar,
              private _router: Router,
              private _resImageService: ResImageService,
              private store: Store
              ) {
  }
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.radioValue = '03';
    this.store.dispatch(new ResetState());
    this.croppedImageData.valueChanges.subscribe(value => {
      // console.log('value->', value)
      // this.croppedImage = value.image;
      // this.height = value.height;
      // this.width = value.width;
      this.store.dispatch(new SaveCroppedImage({
        image: value.image,
        height: value.height,
        width: value.width
      }))
    });
  }
  goNextPage() {
    // console.log('router is called');
    // this._router.navigate(['/res-data']);
    this.store.dispatch(new Navigate(['/res-data']))
  }
  save()
  {
    this.cropImage$.subscribe( res => {
      this.modifyImage = res.cropImage.image.slice(23, res.cropImage.image.length);
      let data = {
        imageName: 't3q',
        imageSize: (this.height/this.width),
        imageType: 'jpeg',
        imageEmb: this.modifyImage,
        category: this.radioValue
      };
      this.openSnackBar("접수 되었습니다. 잠시만 기다려 주세요!!",'');
      this.store.dispatch( new StartAnalyze(data));
    });
  }
  openSnackBar(message: string, action: string) {
    this.isProgress = true;
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
/*
  moveToResPage() {
    this.isProgress = false;
    let params = {
      data: JSON.stringify(this.rData),
      image: this.croppedImage
    };
    this._router.navigate(['/res-data'], {queryParams: params});
  }
*/

}

