import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	carousel_items = [
	 {
	 	img:"assets/img/img1.jpg",
	 	title:"img1",
	 	description:"img1"
	 },
	 {
	 	img:"assets/img/img2.jpg",
	 	title:"img2",
	 	description:"img2"
	 },
	 {
	 	img:"assets/img/img3.jpg",
	 	title:"img3",
	 	description:"img3"
	 }
	];
	cards : any ;

  constructor(private http: HttpService) { }

  ngOnInit() {
  	this.http.get('assets/card.json').subscribe((data)=>{
  		this.cards = data;
  	});
  }

}
