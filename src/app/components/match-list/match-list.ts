import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Player = {
  nickname: string;
  kda: string;
  farm: number;
  championImg: string;
};

type Match = {
  championImg: string;
  gameType: string;
  date: string;
  victory: boolean;
  kda: string;
  duration: string;
  detailsOpen: boolean;
  blueTeam: Player[];
  redTeam: Player[];
};

@Component({
  selector: 'app-match-list',
  imports: [CommonModule],
  templateUrl: './match-list.html',
  styleUrl: './match-list.scss',
})
export class MatchList {
  matches = signal<Match[]>([
    {
      championImg: 'champions/riven.png',
      gameType: 'Ranqueada Solo/Duo',
      date: '13/10/2025',
      victory: true,
      kda: '9/2/4',
      duration: '26m 10s',
      detailsOpen: false,
      blueTeam: [
        {
          nickname: 'teag#belle',
          kda: '9/2/4',
          farm: 210,
          championImg: 'champions/mini-riven.png',
        },
        {
          nickname: 'lucas#prd',
          kda: '2/0/6',
          farm: 155,
          championImg: 'champions/mini-rammus.png',
        },
        {
          nickname: 'julia#cat',
          kda: '5/2/8',
          farm: 180,
          championImg: 'champions/mini-corki.png',
        },
        {
          nickname: 'kelvin#rio',
          kda: '1/3/11',
          farm: 44,
          championImg: 'champions/mini-kaisa.png',
        },
        {
          nickname: 'moraes#test',
          kda: '4/1/10',
          farm: 198,
          championImg: 'champions/mini-alistar.png',
        },
      ],
      redTeam: [
        { nickname: 'felix#gg', kda: '3/8/3', farm: 180, championImg: 'champions/mini-yone.png' },
        {
          nickname: 'almeida#xy',
          kda: '0/3/6',
          farm: 90,
          championImg: 'champions/mini-sylas.png',
        },
        { nickname: 'renan#zv', kda: '4/5/4', farm: 170, championImg: 'champions/mini-irelia.png' },
        {
          nickname: 'joana#pwp',
          kda: '1/5/6',
          farm: 60,
          championImg: 'champions/mini-ez.png',
        },
        {
          nickname: 'patrick#fit',
          kda: '2/6/5',
          farm: 120,
          championImg: 'champions/mini-velkoz.png',
        },
      ],
    },
    {
      championImg: 'champions/user.png',
      gameType: 'Ranqueada Solo/Duo',
      date: '12/10/2025',
      victory: false,
      kda: '3/7/11',
      duration: '31m 29s',
      detailsOpen: false,
      blueTeam: [
        {
          nickname: 'goncalo#br',
          kda: '3/7/11',
          farm: 168,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'duda#s2',
          kda: '8/8/9',
          farm: 188,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'rodrigo#win',
          kda: '4/10/8',
          farm: 113,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'rafa#gol', kda: '5/7/6', farm: 150, championImg: 'champions/mini-user.png' },
        { nickname: 'lima#aa', kda: '6/5/7', farm: 204, championImg: 'champions/mini-user.png' },
      ],
      redTeam: [
        {
          nickname: 'marco#p',
          kda: '13/2/10',
          farm: 242,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'fabi#ops',
          kda: '6/5/13',
          farm: 122,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'ana#coder', kda: '8/4/7', farm: 205, championImg: 'champions/mini-user.png' },
        {
          nickname: 'beto#rj',
          kda: '2/3/16',
          farm: 137,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'luis#tam',
          kda: '9/2/8',
          farm: 219,
          championImg: 'champions/mini-user.png',
        },
      ],
    },
    {
      championImg: 'champions/user.png',
      gameType: 'Ranqueada Solo/Duo',
      date: '10/10/2025',
      victory: true,
      kda: '2/1/17',
      duration: '28m 41s',
      detailsOpen: false,
      blueTeam: [
        {
          nickname: 'teag#belle',
          kda: '2/1/17',
          farm: 72,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'vinicius#pr',
          kda: '10/2/7',
          farm: 222,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'carol#try',
          kda: '6/5/12',
          farm: 179,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'lara#on',
          kda: '3/4/14',
          farm: 101,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'junior#lol',
          kda: '11/2/13',
          farm: 209,
          championImg: 'champions/mini-user.png',
        },
      ],
      redTeam: [
        {
          nickname: 'samy#kk',
          kda: '4/7/6',
          farm: 184,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'fernanda#ti',
          kda: '3/9/5',
          farm: 110,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'zeca#hq', kda: '8/5/7', farm: 177, championImg: 'champions/mini-user.png' },
        {
          nickname: 'danilo#g5',
          kda: '5/5/6',
          farm: 143,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'bia#ace', kda: '1/7/4', farm: 132, championImg: 'champions/mini-user.png' },
      ],
    },
    {
      championImg: 'champions/user.png',
      gameType: 'Ranqueada Solo/Duo',
      date: '09/10/2025',
      victory: false,
      kda: '6/9/8',
      duration: '38m 06s',
      detailsOpen: false,
      blueTeam: [
        {
          nickname: 'gustavo#br',
          kda: '6/9/8',
          farm: 245,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'leo#1', kda: '3/8/4', farm: 178, championImg: 'champions/mini-user.png' },
        {
          nickname: 'bruna#mvp',
          kda: '1/6/7',
          farm: 113,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'costa#yu',
          kda: '5/10/5',
          farm: 202,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'rafael#ca', kda: '2/8/9', farm: 151, championImg: 'champions/mini-user.png' },
      ],
      redTeam: [
        {
          nickname: 'miro#adc',
          kda: '14/4/2',
          farm: 259,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'tati#mid',
          kda: '8/5/12',
          farm: 180,
          championImg: 'champions/mini-user.png',
        },
        { nickname: 'andre#jg', kda: '7/3/16', farm: 203, championImg: 'champions/mini-user.png' },
        {
          nickname: 'isabela#sup',
          kda: '2/4/18',
          farm: 85,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'lucas#top',
          kda: '11/6/5',
          farm: 227,
          championImg: 'champions/mini-user.png',
        },
      ],
    },
    {
      championImg: 'champions/user.png',
      gameType: 'Normal Draft',
      date: '08/10/2025',
      victory: true,
      kda: '15/3/6',
      duration: '34m 12s',
      detailsOpen: false,
      blueTeam: [
        { nickname: 'ana#cat', kda: '15/3/6', farm: 256, championImg: 'champions/mini-user.png' },
        {
          nickname: 'carlos#i',
          kda: '6/8/14',
          farm: 189,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'aline#z',
          kda: '3/4/11',
          farm: 162,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'jonas#win',
          kda: '8/7/15',
          farm: 205,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'marta#ad',
          kda: '5/2/18',
          farm: 247,
          championImg: 'champions/mini-user.png',
        },
      ],
      redTeam: [
        { nickname: 'jojo#se', kda: '3/8/5', farm: 174, championImg: 'champions/mini-user.png' },
        {
          nickname: 'carol#sic',
          kda: '5/10/8',
          farm: 157,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'andre#penta',
          kda: '4/11/7',
          farm: 131,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'rafa#double',
          kda: '7/7/10',
          farm: 148,
          championImg: 'champions/mini-user.png',
        },
        {
          nickname: 'livia#mvp',
          kda: '2/9/10',
          farm: 133,
          championImg: 'champions/mini-user.png',
        },
      ],
    },
  ]);

  toggleDetails(idx: number) {
    this.matches.update((list) =>
      list.map((m, i) =>
        i === idx ? { ...m, detailsOpen: !m.detailsOpen } : { ...m, detailsOpen: false }
      )
    );
  }
}
