import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lavozim } from 'src/app/model/lavozim';
import { Smena } from 'src/app/model/smena';
import { Xodim } from 'src/app/model/xodim';
import { LavozimService } from 'src/app/service/lavozim.service';
import { SmenaService } from 'src/app/service/smena.service';
import { XodimService } from 'src/app/service/xodim.service';

@Component({
  selector: 'app-xodim',
  templateUrl: './xodim.component.html',
  styleUrls: ['./xodim.component.scss']
})
export class XodimComponent implements OnInit {
  xodimlar!: Xodim[];
  lavozimlar!: Lavozim[];
  smenalar!: Smena[];
  xodimForm!: FormGroup;
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;

  constructor(private xodimService: XodimService,
    private lavozimService: LavozimService,
    private smenaService: SmenaService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.xodimForm = this.fb.group({
      id: [],
      lavozim: [null],
      ism: ['', [Validators.required]],
      familiya: ['', [Validators.required]],
      sharif: ['', [Validators.required]],
      aktiv: ['', [Validators.required]],
      info: ['', [Validators.required]],
      smena: [null]

    })
    this.loadAll('');
    this.lavozimService.getAll('').subscribe(lavozimPage => {
      this.lavozimlar = lavozimPage.content;
    })
    this.smenaService.getAll('').subscribe(smenaPage => {
      this.smenalar = smenaPage.content;
    })
  }

  loadAll(key: any) {
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.xodimlar = [];
    this.xodimService.getAll(key).subscribe(xodimPage => {
      this.xodimlar = xodimPage.content;
      this.isLoadingResult = false;
      this.isLoadingReached  = true;
    },
    error=>{
      this.isLoadingResult = false;
      this.isLoadingReached = false;
    }
    )
    
  }

  uchirish(id: number) {
    this.xodimService.deleteById(id).subscribe(data => {
      this.loadAll('');
    })
  }

  save() {
    this.isLoading = true; // qachonki yuklanish boshlansa  true buladi
    let xodim = this.xodimForm.getRawValue();
    xodim.lavozim = {
      id: xodim.lavozim
    }
    xodim.smena = {
      id: xodim.smena
    }
    
    if (!this.tahrirRejm) {
      this.xodimService.create(xodim).subscribe(data => {
        this.loadAll('');
        this.tozalash();  
      })
    } else {
      this.xodimService.update(xodim).subscribe(data => {
        this.loadAll('');
      this.tozalash();
      })
    }
  }

  tahrir(xodim: Xodim) {
    this.tahrirRejm = true;
    this.xodimForm.reset(xodim); // reset tozalash
  }

  tozalash(){
    this.xodimForm.reset();
    this.tahrirRejm = false;
    this.isLoading = false;
  }

}
