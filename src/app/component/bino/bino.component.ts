import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Bino } from 'src/app/model/bino';
import { BinoService } from 'src/app/service/bino.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog.component';


@Component({
  selector: 'app-bino',
  templateUrl: './bino.component.html',
  styleUrls: ['./bino.component.scss']
})
export class BinoComponent implements OnInit {
  binolar!: Bino[];
  binoForm!: FormGroup;
  tahrirRejm = false;
  isLoading = false;
  isLoadingResult = false;
  isLoadingReached = false;
  //
  displayedColumns = ['id', 'nom', 'info', 'amal']; //agar jadvalni dizayinini saytdan olib yozsam shu kod yoziladi qolgani app.html da
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  totalElements = 0;


  constructor(
    private binoService: BinoService,
    private fb: FormBuilder,
    //
    private dialog: MatDialog) { }

  ngAfterViewInit(): void { // 1-2-3 sahifalar ko'rib chiqilgandan keyingi sahifani holati, yani saralash index noldan boshlanishi kerak(sort), sahifa to'liq qayta yuklanishi kerak(loadAll('')) 
    // agar biz boshqa page da turgan bo'lsak saralash bo'lganda boshiga qaytish zarur
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.loadAll('');
    });
    // paginator o'zgarganda ma'lumotni yuklashimiz kerak
    this.paginator.page.subscribe(() => this.loadAll(''));
    // dastlabki yuklash
    this.loadAll('');
  }



  ngOnInit(): void { // sahifa birinchi yuklanganda quyidagilar sahifada paydo bo'ladi
    this.binoForm = this.fb.group({
      id: [],
      nom: ['', [Validators.required]],
      info: ['']
    });

    this.loadAll('');

  }


  loadAll(key: any) { // sahifadadgi eng katta yulanish
    this.isLoadingResult = true; // yuklanish natijasi true
    this.isLoadingReached = true; // yuklanish ohiriga yetdi
    this.binolar = []; // barcha binolar massiv holatida 
    //
    let params = {
      key: key,
      size: this.paginator.pageSize,
      page: this.paginator.pageIndex,
      sort: this.sort.active + "," + this.sort.direction
    }
    this.binoService.getAll(key).subscribe(binoPage => {
      this.binolar = binoPage.content;
      this.totalElements = binoPage.totalElements;
      //
      this.isLoadingResult = false;
      this.isLoadingReached = true;
    },
      error => {
        this.isLoadingResult = false;
        this.isLoadingReached = false;
      }
    );
  }

  uchirish(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "o'chirish",
        msg: "Siz rostdan ham o'chirmoqchimisiz?"
      }
    }).afterClosed().subscribe(data => {

      if (data) {
        this.binoService.deleteById(id).subscribe(data => {
          this.loadAll('');
        })
      }
    });
  }

  save() {
    this.isLoading = true;
    let bino = this.binoForm.getRawValue();
    if (!this.tahrirRejm) {
      this.binoService.create(bino).subscribe(data => {
        this.loadAll('');
        this.tozalash();

      })
    } else {
      this.binoService.update(bino).subscribe(data => {
        this.loadAll('');
        this.tozalash();
      })
    }

  }


  tahrir(bino: Bino) {
    this.tahrirRejm = true;
    this.binoForm.reset(bino); // reset-qayta yuklash
    this.accordion.openAll();
  }

  tozalash() {
    this.binoForm.reset();
    this.tahrirRejm = false;
    this.isLoading = false;
    this.accordion.closeAll();
  }
}
