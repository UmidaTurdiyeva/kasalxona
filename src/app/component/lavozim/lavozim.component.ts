import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lavozim } from 'src/app/model/lavozim';
import { LavozimService } from 'src/app/service/lavozim.service';

@Component({
  selector: 'app-lavozim',
  templateUrl: './lavozim.component.html',
  styleUrls: ['./lavozim.component.scss']
})
export class LavozimComponent implements OnInit {
  lavozimlar!: Lavozim[];
  lavozimForm!: FormGroup;
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;


  constructor(private lavozimService: LavozimService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.lavozimForm = this.fb.group({
      id: [],
      nom: ['', [Validators.required]]
    });

    this.loadAll('');

  }


  loadAll(key: any) {
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.lavozimlar = [];
    this.lavozimService.getAll(key).subscribe(lavozimlar => {
      this.lavozimlar = lavozimlar;
      this.isLoadingResult = false;
      this.isLoadingReached = true;
    },
    error=>{
      this.isLoadingResult = false;
      this.isLoadingReached = false;
    }
    )
  }

  uchirish(id: number) {
    if(confirm(`rostdanmi?`))
    this.lavozimService.deleteById(id).subscribe(data => {
      this.loadAll('');
    })
  }

  save() {
    this.isLoading = true;
    let lavozim = this.lavozimForm.getRawValue();
    this.isLoading = true;
    if (!this.tahrirRejm) {
      this.lavozimService.create(lavozim).subscribe(data => {
        this.loadAll('');
        this.tozalash();

      })
    } else {
      this.lavozimService.update(lavozim).subscribe(data => {
        this.loadAll('');
        this.tozalash();
      })
    }

  }


  tahrir(lavozim: Lavozim) {
    this.tahrirRejm = true;
    this.lavozimForm.reset(lavozim); // reset-qayta yuklash
  }

  tozalash() {
    this.lavozimForm.reset();
    this.tahrirRejm = false;
    this.isLoading = false;
  }
}

