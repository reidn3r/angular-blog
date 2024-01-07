import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import axios  from 'axios';
import { environment } from '../../../../environment';

type News = {
  imageUrl: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, BigCardComponent, MenuBarComponent, MenuTitleComponent, SmallCardComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})

export class HomeComponent implements OnInit {  

  smallCardNews:News[] = []; 

  async ngOnInit() {
    try{
      const resp = await axios.get(environment.apiKey);
      for (let i = 1; i < 4; i++) {
        let news: News = {
          title: resp.data.articles[i].title,
          imageUrl: resp.data.articles[i].urlToImage,
          url: resp.data.articles[i].url,
        };
        this.smallCardNews.push(news);
      }
    }
    catch(err){
      alert("Falha ao carregar notícias");
    }
  }

}
