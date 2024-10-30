import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  formEditUser!: FormGroup


  ngOnInit(): void {
    this.formEditUser = new FormGroup({
      pseudo: new FormControl('',[Validators.required, Validators.minLength(10)]),
      mot_de_passe: new FormControl('',[Validators.required, Validators.minLength(50)]),
      anc_mot_de_passe: new FormControl('',[Validators.required, Validators.minLength(50)]),
      conf_mot_de_passe: new FormControl('',Validators.required),
    })

  }

  isInvalidInput( field: AbstractControl){
    return field.invalid && (field.touched || field.dirty );
  }


}
