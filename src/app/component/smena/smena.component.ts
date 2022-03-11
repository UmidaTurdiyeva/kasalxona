import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Smena } from 'src/app/model/smena';
import { SmenaService } from 'src/app/service/smena.service';

@Component({
  selector: 'app-smena',
  templateUrl: './smena.component.html',
  styleUrls: ['./smena.component.scss']
})
export class SmenaComponent implements OnInit {
  smenalar!: Smena[];
  smenaForm!: FormGroup; // html <form [formGroup]="smenaForm"></form> orqali bog'laymiz
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;

  constructor(private smenaService: SmenaService,
    private fb: FormBuilder) { } // ForumBuilder forma yasab beruvchi class

  ngOnInit(): void {
    this.smenaForm = this.fb.group({ // group ni ichida dajvalda bo'lishi kk bo'lgan ustunlar yoziladi
      id: [],
      nom: ['', [Validators.required]], // '' - boshlang'ich qiymati null yani bo'sh, Validators.required = not null
      bosh_vaqt: ['', [Validators.required]],
      tug_vaqt: ['', [Validators.required]]
    })

    this.loadAll('');
  }

  loadAll(key: any) {
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.smenalar = [];
    this.smenaService.getAll(key).subscribe(smenalar => {
      this.smenalar = smenalar;
      this.isLoadingResult = false;
      this.isLoadingReached  = true;
    },
    error=>{
      this.isLoadingResult = false;
      this.isLoadingReached = false;
    })
  }

  uchirish(id: number) {
    if (confirm("uchirishingiz aniqmi?"))
      this.smenaService.deleteById(id).subscribe(data => {
        this.loadAll('');
      })
  }

  // input submit (Qo'shish) bosilganda save()
  //  ishlab ketadi update da ham create da ham ma'lumotlarni saqlab qoladi
  save() {
    let smena = this.smenaForm.getRawValue();//forma ichiga yozilgan barcha ma'lumotlarni getRawValue yig'ib beradi
    this.isLoading = true;
    if (!this.tahrirRejm) {
      this.smenaService.create(smena).subscribe(data => {
        this.loadAll(''); // qayta yukla malumotlarni
        this.tozalash();
      })
    } else {
      this.smenaService.update(smena).subscribe(data => {
        this.loadAll('');
        this.tozalash();
      })
    }

  }
  tahrir(smena: Smena) {  // update to'g'ri keladi
    this.tahrirRejm = true;
    this.smenaForm.reset(smena);
  }

  tozalash() {
    this.smenaForm.reset();// tozalab ol formani
    this.tahrirRejm = false;
    this.isLoading = false;
  }

}
