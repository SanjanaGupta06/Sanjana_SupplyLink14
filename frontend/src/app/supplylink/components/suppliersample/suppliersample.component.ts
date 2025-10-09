import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../../types/Supplier';
import { of } from 'rxjs';

@Component({
  selector: 'app-suppliersample',
  standalone: true,
  imports: [], // Add necessary imports
  templateUrl: './suppliersample.component.html',
  styleUrls: ['./suppliersample.component.css'] 
})
export class SupplierSampleComponent {
  // Component logic goes here

  supplier={
    supplierId:1,
    supplierName: "abcd",
    email:"abcd@gamil.com",
    phone:"8776665552",
    address:"xyz road ",
    username: "abcd123",
    password:"abcd@12",
    role: 'maintenance'

  };
}