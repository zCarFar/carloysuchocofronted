import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any[] = [];

constructor(private apiService: ApiService){

}


  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }




  ngOnInit(): void {
    this.llenarData()
  }

  title = 'front_angular';
}
