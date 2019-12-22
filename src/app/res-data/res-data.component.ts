import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ImgDetailComponent} from '../components/img-detail/img-detail.component';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import * as moment from 'moment';
import {ReqDataState, ResetState} from "../req-data/store";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";

@Component({
  selector: 'app-res-data',
  templateUrl: './res-data.component.html',
  styleUrls: ['./res-data.component.css']
})
export class ResDataComponent {
  image:any;
  @Select(ReqDataState.getCropImage) cropImage$: Observable<string>;
  @Select(ReqDataState.getAnalyzeResult) resultImage$: Observable<string>;
  constructor(// private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              private http: HttpClient,
              private fileSaverService: FileSaverService,
              // private router: Router,
              private store: Store
              ) { }


  dispOriginalImage(ev) { /** Display Original Image*/
    const dialorRef = this.matDialog.open( ImgDetailComponent, {
      panelClass: 'myapp-no-padding-dialog',
      height: '470px',
      width: '300px',
      data: {big:ev.target.src}
    });
    dialorRef.afterClosed().subscribe((res) => {
      if( res.res === 'Y') {
        // console.log('sample_data, filename', res.url, res.fileName);
        this.saveFile( res.url, res.fileName);
      }
    })
  }
  dispImgDetail(event) { /** Display one of analysed images */
    const dialorRef = this.matDialog.open( ImgDetailComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '470px',
      data: event
    });
    dialorRef.afterClosed().subscribe((res) => {
      if( res.res === 'Y') {
        // console.log('sample_data, filename', res.url, res.fileName);
        this.saveFile( res.url, res.fileName);
      }
    })
  }
  /** Save analysed image*/
  saveFile( url, name) {
    let cTime = moment( new Date).format('_YYYYMMDDHHmm');
    let fileName = name + cTime;
    // console.log('fileName', fileName);
    this.http.get(url, {
      observe: 'response',
      responseType: 'blob'
    }).subscribe(res => {
      this.fileSaverService.save(res.body, fileName);
    });
  }
  goHome() {
    this.store.dispatch( new ResetState());
    this.store.dispatch( new Navigate(['/req-data']));
    //this.router.navigate(['/req-data']);
  }
}
