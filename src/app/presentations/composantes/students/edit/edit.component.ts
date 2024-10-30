import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  formEditStudent!: FormGroup;

  classe = [
    {name: 'Tle'},
    {name: '1 ère'},
    {name: '2 nd'},
    {name: '3 ème'},
    {name: '4 ème'},
    {name: '5 ème'},
    {name: '6 ème'}

  ]


  ngOnInit(): void {
    this.formEditStudent = new FormGroup({
      nom: new FormControl('',[Validators.required, Validators.minLength(10)]),
      prenom: new FormControl('',[Validators.required, Validators.minLength(50)]),
      genre: new FormControl('',Validators.required),
      matricule: new FormControl('',[Validators.required, Validators.minLength(10)]),
      date_naissance: new FormControl('',Validators.required),
      classe: new FormControl(this.classe,Validators.required),
      telephone: new FormControl('',[Validators.required, Validators.minLength(10)]),
      ville: new FormControl('',[Validators.required, Validators.minLength(10)]),
    })
  }

}
