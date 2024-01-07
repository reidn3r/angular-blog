import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit{
  BigCardimageURL:string = "https://place-hold.it/1280x720";  
  BigCardNewsURL:string = "";
  BigCardTitle:string = "";
  BigCardDescription:string = "";
  

  async ngOnInit() {
    try{
      const resp = await axios.get(environment.apiKey);  
      this.BigCardimageURL = resp.data.articles[0].urlToImage;
      this.BigCardTitle = resp.data.articles[0].title;
      this.BigCardDescription = resp.data.articles[0].description;
      this.BigCardNewsURL = resp.data.articles[0].url;
    }
    catch(err){
      alert("Erro ao carregar notícia");
    }
  }
}