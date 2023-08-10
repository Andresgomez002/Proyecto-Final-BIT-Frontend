import { Component, OnInit } from '@angular/core';
import { New } from '../../interfaces/new.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  // news! : Array<New>;
  // selectedNew!: New;
  // selectedNewId!: string;

  // NewForm: FormGroup = this.fb.group({
  //   titulo: [
  //     '',   // Valor por defecto
  //     [
  //       Validators.required
  //     ]
  //   ],
  //   subtitulo: [
  //     '',   // Valor por defecto
  //     [
  //       Validators.required
  //     ]
  //   ],
  //   description: [
  //     '',  // Valor por defecto
  //     []
  //   ]
  // });
  
  // // constructor(
  // //   private fb: FormBuilder,
  // //   private NewService: NewsServiceService
  // // ) {}
  // // // ngOnInit(): void {
  // // // }
}

