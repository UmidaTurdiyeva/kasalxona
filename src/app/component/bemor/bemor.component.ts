import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Bemor } from 'src/app/model/bemor';
import { BemorService } from 'src/app/service/bemor.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog.component';

@Component({
  selector: 'app-bemor',
  templateUrl: './bemor.component.html',
  styleUrls: ['./bemor.component.scss']
})
export class BemorComponent implements OnInit {
  bemorlar!: Bemor[];
  bemorForm!: FormGroup;
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;
  displayedColumns = ['id', 'ism', 'familiya', 'sharif', 'info'];
  totalElements = 0;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private bemorService: BemorService,
    private fb: FormBuilder,
    private dialog: MatDialog) { }


    ngAfterViewInit(): void {
      this.sort.sortChange.subscribe(()=>{
        this.paginator.pageIndex = 0;
        this.loadAll('');
      });
      this.paginator.page.subscribe(()=> this.loadAll(''));
      this.loadAll('');
    }

  ngOnInit(): void {
    this.bemorForm = this.fb.group({
      id:[],
      ism:['', [Validators.required]],
      familiya:['', [Validators.required]],
      sharif:['', [Validators.required]],
      info:['']
    });

    this.loadAll('');

  }

  loadAll(key: any){
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.bemorlar = [];
    let params = {
      key: key,
      size: this.paginator.pageSize,
      page: this.paginator.pageIndex,
      sort: this.sort.active + "," + this.sort.direction
    }
    this.bemorService.getAll(key).subscribe(bemorPage=>{
      this.bemorlar = bemorPage.content;
      this.totalElements = bemorPage.totalElements; 
      this.isLoadingResult = false;
      this.isLoadingReached = true;
    },
    error=>{
      this.isLoadingResult = false;
      this.isLoadingReached = false;
    })
  }

  uchirish(id: number){
    this.dialog.open(ConfirmDialogComponent,{
      data:{
        title: "o'chirish",
        msg: "Rostdan ham o'chiemoqchimisiz?"
      }
    }).afterClosed().subscribe(data =>{
      
      if(data){
        this.bemorService.deleteById(id).subscribe(data =>{
          this.loadAll('');
        })
      }
    });
  }

  save(){
    let bemor = this.bemorForm.getRawValue();
    this.isLoading = true;
    if(!this.tahrirRejm){
      this.bemorService.create(bemor).subscribe(data=>{
        this.loadAll('');
        this.tozalash();         
      })
    }else{
      this.bemorService.update(bemor).subscribe(data=>{
        this.loadAll('');
        this.tozalash();         
      })
    }
  }

  tahrir(bemor: Bemor){
    this.tahrirRejm = true;
    this.bemorForm.reset(bemor); // reset tozalash
    this.accordion.openAll();
  }

  tozalash(){
    this.bemorForm.reset();
    this.tahrirRejm = false;
    this.isLoading = false;
    this.accordion.closeAll();
  }

}
