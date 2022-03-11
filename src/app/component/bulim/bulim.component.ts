import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bulim } from 'src/app/model/bulim';
import { BulimService } from 'src/app/service/bulim.service';

@Component({
  selector: 'app-bulim',
  templateUrl: './bulim.component.html',
  styleUrls: ['./bulim.component.scss']
})
export class BulimComponent implements OnInit {
  bulimlar!: Bulim[];
  bulimForm!: FormGroup;
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;

  constructor( private bulimService: BulimService, 
    private fb: FormBuilder)  { }

  ngOnInit(): void {
    this.bulimForm = this.fb.group({
      id:[],
      nom: ['', [Validators.required]],
      info: ['']
    })

    this.loadAll('');
    
  }

  loadAll(key: any){
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.bulimlar = [];
    this.bulimService.getAll(key).subscribe(bulimPage=>{
      this.bulimlar= bulimPage.content;
      this.isLoadingResult = false;
      this.isLoadingReached  = true;
    },
    error=>{
      this.isLoadingResult = false;
      this.isLoadingReached = false;
    }
    )
  }

  uchirish(id: number){
    if (confirm(`Siz rostdan ham o'chirmoqchimisiz?`))
    this.bulimService.deleteById(id).subscribe(data=>{
      this.loadAll('');
    })
  }

  
  save(){
    let bulim = this.bulimForm.getRawValue();
    this.isLoading = true;
    if(!this.tahrirRejm){
      this.bulimService.create(bulim).subscribe(data=>{
        this.loadAll('');
        this.tozalash();
      })
    }else{
      this.bulimService.update(bulim).subscribe(data=>{
        this.loadAll('');
        this.tozalash();
      }) 
    }
      
  }

  
  tahrir(bulim: Bulim){
    this.tahrirRejm = true;
    this.bulimForm.reset(bulim); // reset-qayta yuklash
  }

  tozalash(){
    this.bulimForm.reset(); 
    this.tahrirRejm = false;
    this.isLoading = false;
  }





}
