import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Ninja } from '../../interfaces/ninjas.interface';
import { NinjasService } from '../../services/ninjas.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  ninja!: Ninja

  constructor(
    private activatedRoute: ActivatedRoute,
    private ninjasService: NinjasService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.ninjasService.getNinjaById(id))
      )
      .subscribe( ninja => this.ninja = ninja
    )

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.ninjasService.getNinjaById(id)
    //       .subscribe( ninja => {
    //         this.ninja = ninja
    //       })
    //   }
    // )

    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id)

  }

  return(){
    this.router.navigate(['/ninjas/list'])
  }

}
