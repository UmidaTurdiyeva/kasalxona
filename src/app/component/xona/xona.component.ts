import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bino } from 'src/app/model/bino';
import { Bulim } from 'src/app/model/bulim';
import { Xona } from 'src/app/model/xona';
import { BinoService } from 'src/app/service/bino.service';
import { BulimService } from 'src/app/service/bulim.service';
import { XonaService } from 'src/app/service/xona.service';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-xona',
  templateUrl: './xona.component.html',
  styleUrls: ['./xona.component.scss']
})
export class XonaComponent implements OnInit {
  xonalar! : Xona[]; 
  binolar! : Bino[];
  bulimlar!: Bulim[];
  xonaForm!: FormGroup;
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;

  constructor( 
    private xonaService: XonaService,
    private binoService: BinoService,
    private bulimService: BulimService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.xonaForm = this.fb.group({
      id: [],
      nom: ['',[Validators.required]],
      info: ['',[Validators.required]],
      bulim:[null],
      bino: [null]

    });

    this.loadAll('');
    this.binoService.getAll('').subscribe(binoPage=>{
      this.binolar = binoPage.content;
     })
    this.bulimService.getAll('').subscribe(bulimPage=>{
      this.bulimlar = bulimPage.content;
     })
  } 

  loadAll(key: any){ 
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.xonalar = [];
    this.xonaService.getAll(key).subscribe(xonaPage=>{
      this.xonalar = xonaPage.content;
      this.isLoadingResult = false;
      this.isLoadingReached  = true; 

    })
  }

  uchirish(id: number){
    if(confirm(`aniqmi?`))
    this.xonaService.deleteById(id).subscribe(data=>{
      this.loadAll('');
    })
  }

  save(){
    this.isLoading = true;
    let xona = this.xonaForm.getRawValue();
    xona.bino = {
      id: xona.bino
    };
    xona.bulim = {
      id: xona.bulim
    };

    if(!this.tahrirRejm){
      this.xonaService.create(xona).subscribe(data=>{
        this.loadAll('');
        this.tozalash();
      })
    }else{
      this.xonaService.update(xona).subscribe(data=>{
        this.loadAll('');
        this.tozalash();
      })
    }
  }

  tahrir(xona: Xona){
    this.tahrirRejm = true;
    this.xonaForm.reset(xona);
  }

  tozalash(){
    this.xonaForm.reset();
    this.tahrirRejm = false;
    this.isLoading = false;
  }
}
