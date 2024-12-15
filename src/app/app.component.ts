import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teller of tales';

  persoManon = [
    { name: "genya", statut: "inactif", illu: "https://images2.imgbox.com/52/ae/wccPoc7l_o.png", branche: "lame du duc" },
    { name: "hiyori", statut: "actif", illu: "https://images2.imgbox.com/76/4c/XBJKuhRT_o.png", branche: "maisonnée khensur" },
    { name: "hoshina", statut: "actif", illu: "https://i.ibb.co/Z62QDDn/Sans-titre-1.png", branche: "lame du duc "},
    { name: "naoya", statut: "inactif", illu: "https://images2.imgbox.com/ec/88/4SMKlw7s_o.png", branche: "lame du duc"},
    { name: "nori", statut: "inactif", illu: "https://images2.imgbox.com/16/4d/zauLPDoX_o.png", branche: "pirate d'hébi"},
    { name: "rengoku", statut: "inactif", illu: "https://images2.imgbox.com/30/d9/MPJoeuBn_o.png", branche: "lame du duc"},
    { name: "ryota", statut: "inactif", illu: "https://images2.imgbox.com/65/1a/1voC144V_o.png", branche: "à voir"},
    { name: "saburo", statut: "actif", illu: "https://images2.imgbox.com/b3/86/FDhSzsXF_o.png", branche: "pirate d'hébi"},
    { name: "shinjiro", statut: "actif", illu: "https://images2.imgbox.com/b2/41/MJDFu8OK_o.png", branche: "lame du duc"},
    { name: "soren", statut: "actif", illu: "https://images2.imgbox.com/42/1a/MoIfWzKI_o.png", branche: "maisonnée khensur"},
    { name: "tejina", statut: "actif", illu: "https://images2.imgbox.com/07/7d/JYRrWpvy_o.png", branche: "lame du duc"},
    { name: "toji", statut: "actif", illu: "https://images2.imgbox.com/18/0f/rYy4kAnG_o.png", branche: "lame du duc"},
  ];

  persoRaph = [
    { name: "aiku", statut: "actif", illu: "https://images2.imgbox.com/81/48/selNBu45_o.png", branche: "lame du duc"},
    { name: "daiyu", statut: "actif", illu: "https://images2.imgbox.com/37/88/xcR6zXK4_o.png", branche: "lame du duc"},
    { name: "eiden", statut: "inactif", illu: "https://images2.imgbox.com/71/79/cRnnAIBR_o.png", branche: "à voir"},
    { name: "issei", statut: "actif", illu: "https://images2.imgbox.com/68/7b/eJkTyxeg_o.png", branche: "lame du duc"},
    { name: "jotaro", statut: "actif", illu: "https://images2.imgbox.com/02/a8/7sr7i4xk_o.png", branche: "pirate d'hébi"},
    { name: "kise", statut: "inactif", illu: "https://images2.imgbox.com/93/00/CcQobBTv_o.png", branche: "à voir"},
    { name: "osamu", statut: "inactif", illu: "https://images2.imgbox.com/41/60/YMHyJfzz_o.png", branche: "à voir"},
    { name: "sampo", statut: "actif", illu: "https://images2.imgbox.com/90/1d/taVHtsak_o.png", branche: "lame du duc"},
    { name: "sangwoo", statut: "actif", illu: "https://images2.imgbox.com/51/d0/F0s00Gxz_o.png", branche: "maisonnée khensur"},
    { name: "wakatoshi", statut: "actif", illu: "https://images2.imgbox.com/c7/b4/h81CKiLz_o.png", branche: "lame du duc"},
  ]
}
