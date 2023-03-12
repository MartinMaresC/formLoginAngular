import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formLoginAngular';

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group( {
      email: ['', 
      [
        Validators.required, Validators.email
      ]
      ],
      password: ['', 
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
      terms: ['',
        [
          Validators.required,
          Validators.requiredTrue
        ]
    ]
    });
    this.loadAPI();
  }

  loadAPI(): any {
    const response = {
      email: 'leifer33@gmail.com',
      password: '12345678',
      terms: true
    };

    this.formLogin.patchValue(response);/*{
      email: response.email,
      password: response.password,
      terms: response.terms
    })*/
  }

  send(): any {
    console.log(this.formLogin.value);
  }
}