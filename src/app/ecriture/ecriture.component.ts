import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-ecriture',
  templateUrl: './ecriture.component.html',
  styleUrls: ['./ecriture.component.css']
})
export class EcritureComponent implements OnInit {

  dataUrl = 'assets/rps.json'; 
  displayedRp: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>(this.dataUrl).subscribe(
      (data) => {
        this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
            const id = +params['id'];
            this.displayedRp = data.find((rp: { id: number; }) => rp.id === id);
          }
        });
      },
      (error) => {
        console.error('Error loading data:', error); 
      }
    );
  }

}
