import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ImgDetailComponent} from '../components/img-detail/img-detail.component';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import * as moment from 'moment';

@Component({
  selector: 'app-res-data',
  templateUrl: './res-data.component.html',
  styleUrls: ['./res-data.component.css']
})
export class ResDataComponent implements OnInit {
  image:any;
  imageData: any[] = [];
  galleryImages: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              private http: HttpClient,
              private fileSaverService: FileSaverService,
              private router: Router
              ) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( (val) => {
      //console.log('res-->', val)
      if( !val.image ) {
        this.image = atob(localStorage.getItem('image'));
      } else {
        this.image = val.image;
        //
        let base64Image = btoa(this.image);
        localStorage.setItem('image', base64Image);
        let data = JSON.parse(val.data);
        console.log('val.data->', data, val.data);
        this.imageData = data;
      }
/*
      this.http.get('assets/sample_data/rdata.json').subscribe( val => {
        this.imageData = val['data'];
      })
*/

    });

  }

  rdata: any;
  dispOriginalImage() {
    const dialorRef = this.matDialog.open( ImgDetailComponent, {
      panelClass: 'myapp-no-padding-dialog',
      height: '450px',
      width: '300px',
      data: {big:this.image}
    })
    dialorRef.afterClosed().subscribe((res) => {
      if( res.res === 'Y') {
        console.log('sample_data, filename', res.url, res.fileName);
        this.saveFile( res.url, res.fileName);
      }
    })

  }
  dispImgDetail(event) {
    const dialorRef = this.matDialog.open( ImgDetailComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '300px',
      height: '450px',
      data: event
    })
    dialorRef.afterClosed().subscribe((res) => {
      if( res.res === 'Y') {
        console.log('sample_data, filename', res.url, res.fileName);
        this.saveFile( res.url, res.fileName);
      }
    })
  }
  saveFile( url, name) {
    let cTime = moment( new Date).format('_YYYYMMDDHHmm');
    let fileName = name + cTime;
    console.log('fileName', fileName);
    this.http.get(url, {
      observe: 'response',
      responseType: 'blob'
    }).subscribe(res => {
      this.fileSaverService.save(res.body, fileName);
    });
  }
  goHome() {
    this.router.navigate(['/req-data']);
  }
}
