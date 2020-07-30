import { Component, OnInit,Input,Output,EventEmitter, AfterViewInit} from '@angular/core';
import { MovieParent, Movie } from '../api-interfaces';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  constructor(private watchList: WatchListService) { }

  ngOnInit(): void {
  }

  watchListArr: any[]=[];
  update(){
    this.watchList.updateWatchList(this.watchListArr);
  }
<<<<<<< HEAD
  remove(index){
=======
<<<<<<< HEAD
  removeMe(item){
    console.log("I WAS CLICKED")
    this.watchListArr.splice(item,1)
    this.watchList.remove(item);
  }
  removeAll(item){
    this.watchList.removeFromWatchList(item);
=======
  remove(index){
>>>>>>> d441c25dd8966433afebedea8d63529a48b73d18
    console.log("I WAS CLICKED")
    this.watchListArr.splice(index,1);
>>>>>>> e8b779459021e2952670db3bf6e7fb29b9cd853b
  }
}
