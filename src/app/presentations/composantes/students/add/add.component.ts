import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  formAddStudent!: FormGroup;

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
    this.formAddStudent = new FormGroup({
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

  isInvalidInput( field: AbstractControl){
    return field.invalid && (field.touched || field.dirty );
  }

}
