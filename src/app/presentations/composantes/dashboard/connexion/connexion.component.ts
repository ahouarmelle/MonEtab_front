import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
  formConnexion!: FormGroup

  ngOnInit(): void {
    this.formConnexion = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(10)]),
      password: new FormControl('',[Validators.required, Validators.minLength(50)]),
    })
  }
}
