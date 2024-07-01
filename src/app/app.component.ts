import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
  emailControl: any;
  passwordControl: any;

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
