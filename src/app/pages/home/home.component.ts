import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private api: ApiService) { }

  data:any;
  ngOnInit() {
    this.api.getProducts().subscribe((res:any) => {
      this.data = res.products;
      console.log(this.data);
      
    });
  }

}