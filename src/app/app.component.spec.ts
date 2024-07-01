import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Import the AppComponent here

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.profileForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.profileForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('test@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('password field validity', () => {
    let password = component.profileForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('password123');
    expect(password.valid).toBeTruthy();
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should log form values when onSubmit is called', () => {
    spyOn(console, 'log');
    component.profileForm.setValue({
      email: 'test@example.com',
      password: 'password123'
    });
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });
});
