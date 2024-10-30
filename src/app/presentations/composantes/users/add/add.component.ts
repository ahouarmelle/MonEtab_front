import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  formAddUser!: FormGroup


  ngOnInit(): void {
    this.formAddUser = new FormGroup({
      pseudo: new FormControl('',[Validators.required, Validators.minLength(10)]),
      mot_de_passe: new FormControl('',[Validators.required, Validators.minLength(50)]),
      conf_mot_de_passe: new FormControl('',Validators.required),
    })

  }

  isInvalidInput( field: AbstractControl){
    return field.invalid && (field.touched || field.dirty );
  }


}
