import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { SearchBar } from '../../components/search-bar/search-bar';
import { MatchList } from "../../components/match-list/match-list";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [
    Header,
    SearchBar,
    MatchList,
    Footer
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
