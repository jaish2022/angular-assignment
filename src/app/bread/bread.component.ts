import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {

  pageName = '';
  constructor(private router: Router){
    this.pageName = this.getRouteName(router.url);
  }

  getRouteName(path: any){
    const name = path === '/' ? 'home' : path.replace('/','').replace('-',' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  ngOnInit(): void {
  }

}
