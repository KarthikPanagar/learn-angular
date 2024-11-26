

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  //string, number, boolean, array, date, object, null, undefined

  /* -----------VARIABLE DECLARATIONS --------------- */
  firstName: string = "Karthik";
  lastName = "Panagar";
  Age: number = 24;
  joiningDate: Date = new Date();
  inputType: string = "checkbox"
  selectedState: string = "";


  /* ----------- FUNCTIONS/EVENTS --------------- */

  showWelcome(){
    alert("Welcome to Angular");
  }

  ShowWelcomeMessage(message: string){
    alert(message);
  }
}