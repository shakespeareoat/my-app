import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MemoComponent } from './memo/memo.component';
import { CardComponent } from './card/card.component';

const routes:Routes = [
	{ path:'home',component: HomeComponent },  // ระบุ path home ให้เรียก HomeComponent มาแสดงผล
	{ path:'', redirectTo: '/home', pathMatch: 'full' },// ถ้าไม่ระบุ path ใดๆ ให้ redirect ไปที่ path home
	{ path:'about-me',component: AboutMeComponent }, //ถ้าระบุ path about-me ให้เรียก AboutMeComponent มาแสดงผล
  { path:'memo',component: MemoComponent },
  { path:'card/:index',component: CardComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //ให้ import RouterModule ใช้ฟังก์ชัน forRoot และส่งตัวแปร routes มาทำงาน
  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
