import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  formAddTeacher!: FormGroup;

  matiere = [
    {name: 'Math'},
    {name: 'Physique'},
    {name: 'EPS'},
    {name: 'Anglais'},
    {name: 'SVT'},
    {name: 'Philosophie'},
    {name: 'Français'}

  ]

  ngOnInit(): void {
    this.formAddTeacher = new FormGroup({
      nom: new FormControl('',[Validators.required, Validators.minLength(10)]),
      prenom: new FormControl('',[Validators.required, Validators.minLength(50)]),
      genre: new FormControl('',Validators.required),
      date_naissance: new FormControl('',Validators.required),
      matiere: new FormControl(this.matiere ,Validators.required),
      telephone: new FormControl('',[Validators.required, Validators.minLength(10)]),
      ville: new FormControl('',[Validators.required, Validators.minLength(10)]),
    })

  }

  isInvalidInput( field: AbstractControl){
    return field.invalid && (field.touched || field.dirty );
  }

}
