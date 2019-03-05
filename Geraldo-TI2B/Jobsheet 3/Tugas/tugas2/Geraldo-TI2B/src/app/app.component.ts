import { Component } from '@angular/core';
import { BService } from './b.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Geraldo Bintang I';
  alamat = 'jln. batu gang 7';
  tgl = Date.now();
  hobby : any[];
  constructor(private b:BService){}

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hobby = this.b.getHobby();
  }

}

