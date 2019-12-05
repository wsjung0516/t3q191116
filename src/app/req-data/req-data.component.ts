import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {ResImageService} from "../services/res-image.service";
import {Select, Store} from '@ngxs/store';
import {ResetState, SaveCroppedImage, StartAnalyze} from './store/req-data.actions';
import {Navigate} from "@ngxs/router-plugin";
import {ReqDataState, ReqDataStateModel} from './store/req-data.state';
import {Observable} from 'rxjs';
import {first} from "rxjs/operators";
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  selector: 'cropper',
  templateUrl: './req-data.component.html',
  styleUrls: ['./req-data.component.css']
})
export class ReqDataComponent implements OnInit, OnDestroy {
  @ViewChild('result', {static: true}) public result:any;
  modifyImage=null;
  radioValue: string;
  croppedImageData = new FormControl('');
  height;
  width;
  @Select(ReqDataState.getLoaded) loaded$: Observable<boolean>;
  @Select(ReqDataState.getLoading) loading$: Observable<boolean>;
  @Select(ReqDataState.getCropImage) cropImage$: Observable<ReqDataStateModel>;
  constructor(private fb: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private router: Router,
              private resImageService: ResImageService,
              private store: Store
              ) {
  }
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.radioValue = '03';
    this.store.dispatch(new ResetState());
    this.croppedImageData.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      console.log('req-data ngOnInit value-->', value);
      this.store.dispatch(new SaveCroppedImage({
        image: value.image,
        height: value.height,
        width: value.width
      }))
    });
  }
  goNextPage() {
    this.store.dispatch(new Navigate(['/res-data']))
  }
  save() {
    this.cropImage$.pipe(first()).subscribe( res => {
      // console.log('res-->',res);
      this.modifyImage = res['image'].slice(23, res['image'].length);
      let data = {
        imageName: 't3q',
        imageSize: (res['height']/res['width']),
        imageType: 'jpeg',
        imageEmb: this.modifyImage,
        category: this.radioValue
      };
      this.openSnackBar("접수 되었습니다. 잠시만 기다려 주세요!!",'Waiting !');
      this.store.dispatch( new StartAnalyze(data));
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnDestroy(): void {
  }
}

