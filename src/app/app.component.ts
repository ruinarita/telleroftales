import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isThread: boolean = false;
  isWorld: boolean = true;
  isCharacter: boolean = false;
  persoUrl = 'assets/persos.json'; 
  charac: any;
  title = 'teller of tales';

  rpsList = [
    { id: 1, title : 'Santa tell me', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', illu: 'https://images2.imgbox.com/16/4d/zauLPDoX_o.png', illud: 'https://images2.imgbox.com/cf/f3/jQXEt4ka_o.png', duo: 'Nori & Rui'},
    { id: 2, title : 'We cant be friends', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', illu: 'https://images2.imgbox.com/30/d9/MPJoeuBn_o.png', illud: 'https://images2.imgbox.com/3d/74/sIHpy3Fx_o.png', duo: 'Rengoku & Natsuo'},
  ];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void { }

  public getCharacters(): any {
    this.http.get<any>(this.persoUrl).subscribe(
      (data) => {
        this.charac = data;
      },
      (error) => {
        console.error('Error loading data:', error); 
      }
    );
  }

  public showMore(name: string): void {
    switch (name) {
      case 'thread':
        this.isThread = true;
        this.isWorld = false;
        this.isCharacter = false;
        break;
      case 'world':
        this.isThread = false;
        this.isWorld = true;
        this.isCharacter = false;
        break;
      case 'character':
        this.getCharacters();
        this.isThread = false;
        this.isWorld = false;
        this.isCharacter = true;
        break;
      default:
        this.isThread = false;
        this.isWorld = true;
        this.isCharacter = false;
    }
  }

  public goToContext() {
    this.router.navigate(['/context']);
  }

  public goToHome() {
    this.router.navigate(['/']);
  }

  isContextRoute(): boolean {
    return this.router.url !== '/';
  }

  public goToEcriture(rps: any) {
    const link = ['/rp', rps.id];
    this.router.navigate(link);
  }

  public displayInfo(chara: any) {
    console.log(chara);
    chara.isBack = !chara.isBack;
    chara.isFront = !chara.isFront;
  }

}
