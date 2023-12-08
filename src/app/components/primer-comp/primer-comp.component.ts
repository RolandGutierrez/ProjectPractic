import { Component } from '@angular/core';
import { Ipersona } from 'src/app/interfaces/IPersona';

@Component({
  selector: 'app-primer-comp',
  templateUrl: './primer-comp.component.html',
  styleUrls: ['./primer-comp.component.css']
})
export class PrimerCompComponent {


  nombre:string ='RolandGuti';
  persona: Ipersona ={
    name: 'rg',
    edad: 30
  }
}
