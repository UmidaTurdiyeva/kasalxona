import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Bulim } from 'src/app/model/bulim';
import { BulimService } from 'src/app/service/bulim.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog.component';

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
  // displayedColumns = ['id', 'nom', 'info', 'amal']; //agar jadvalni dizayinini saytdan olib yozsam shu kod yoziladi qolgani app.html da
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  totalElements = 0;


  constructor(
    private bulimService: BulimService,
    private fb: FormBuilder,
    private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.loadAll('');
    });
    this.paginator.page.subscribe(() => this.loadAll(''));
    this.loadAll('');
  }

  ngOnInit(): void {
    this.bulimForm = this.fb.group({
      id: [],
      nom: ['', [Validators.required]],
      info: ['']
    });
    this.loadAll('');
  }

  loadAll(key: any) {
    this.isLoadingResult = true;
    this.isLoadingReached = true;
    this.bulimlar = [];
    let params = {
      key: key,
      size: this.paginator.pageSize,
      page: this.paginator.pageIndex,
      sort: this.sort.active + "," + this.sort.direction
    }
    this.bulimService.getAll(key).subscribe(bulimPage => {
      this.bulimlar = bulimPage.content;
      this.isLoadingResult = false;
      this.isLoadingReached = true;
    },
      error => {
        this.isLoadingResult = false;
        this.isLoadingReached = false;
      }
    )
  }

  uchirish(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "o'chirish",
        msg: "Rostdan ham o'chirmoqchimisiz?"
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.bulimService.deleteById(id).subscribe(data => {
          this.loadAll('');
        })

      }
    });
  }


  save() {
    let bulim = this.bulimForm.getRawValue();
    this.isLoading = true;
    if (!this.tahrirRejm) {
      this.bulimService.create(bulim).subscribe(data => {
        this.loadAll('');
        this.tozalash();
      })
    } else {
      this.bulimService.update(bulim).subscribe(data => {
        this.loadAll('');
        this.tozalash();
      })
    }

  }


  tahrir(bulim: Bulim) {
    this.tahrirRejm = true;
    this.bulimForm.reset(bulim); // reset-qayta yuklash
    this.accordion.openAll();
  }

  tozalash() {
    this.bulimForm.reset();
    this.tahrirRejm = false;
    this.isLoading = false;
    this.accordion.closeAll();
  }





}
