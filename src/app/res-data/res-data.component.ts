import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ImgDetailComponent} from '../components/img-detail/img-detail.component';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-res-data',
  templateUrl: './res-data.component.html',
  styleUrls: ['./res-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResDataComponent implements OnInit, AfterViewInit {
  image:any;
  imageData: any[] = [];
  galleryImages: any[];
  statesObservable = new BehaviorSubject([]);
  // statesObservable = new BehaviorSubject(this.imageData);
  constructor(private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog,
              private http: HttpClient,
              private fileSaverService: FileSaverService,
              private router: Router
              ) { }


  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.statesObservable.next(this.imageData.map(val => val) );
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (val) => {
      if( !val.image ) {
        this.image = atob(localStorage.getItem('image'));
      } else {
        this.image = val.image;
        //
        let base64Image = btoa(this.image);
        localStorage.setItem('image', base64Image);
      }
    });
    this.imageData = [
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
      },
      {
        small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
        medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
        big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
      }
    ];
  }
  rdata: any;
  dispOriginalImage() {
    const dialorRef = this.matDialog.open( ImgDetailComponent, {
      height: '470px',
      width: '300px',
      data: {big:this.image}
    })
    dialorRef.afterClosed().subscribe((res) => {
      if( res.res === 'Y') {
        console.log('data, filename', res.url, res.fileName);
        this.saveFile( res.url, res.fileName);
      }
    })

  }
  dispImgDetail(event) {
    const dialorRef = this.matDialog.open( ImgDetailComponent, {
      width: '300px',
      height: '470px',
      data: event
    })
    dialorRef.afterClosed().subscribe((res) => {
      if( res.res === 'Y') {
        console.log('data, filename', res.url, res.fileName);
        this.saveFile( res.url, res.fileName);
      }
    })
  }
  saveFile( url, fileName) {
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
