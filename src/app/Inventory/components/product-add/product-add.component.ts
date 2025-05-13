// product-add.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [
    CommonModule, // Necesario para *ngIf
    ReactiveFormsModule,
    MatFormFieldModule, // Para mat-label, mat-hint
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule, // Para datepicker
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm!: FormGroup;
  showPremiumFields = false;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  // Opciones para selects
  categories = ['Alimentos', 'Bebidas', 'Electrónicos', 'Limpieza'];
  units = ['°C', '%', 'Kg'];
  sensors = ['Sensor 1', 'Sensor 2', 'Sensor 3'];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.initForm();

  }

  private initForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      sku: ['', [Validators.required, Validators.pattern(/^[A-Z0-9-]+$/)]],
      initialStock: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      expirationDate: [null],
      image: [null],

      // Campos premium
      tempRangeStart: [''],
      tempRangeEnd: [''],
      idealHumidity: [''],
      unitWeight: [''],
      linkedSensors: [[]],
      tempUnit: ['°C'],
      humidityUnit: ['%'],
      weightUnit: ['Kg']
    });
  }

  isBasicFormValid(): boolean {
    const nameValid = this.productForm.get('name')?.valid ?? false;
    const categoryValid = this.productForm.get('category')?.valid ?? false;
    const skuValid = this.productForm.get('sku')?.valid ?? false;
    const stockValid = this.productForm.get('initialStock')?.valid ?? false;
    const dateValid = this.productForm.get('expirationDate')?.valid ?? false;

    return nameValid && categoryValid && skuValid && stockValid && dateValid;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  togglePremium(): void {
    this.showPremiumFields = !this.showPremiumFields;
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Aquí iría la lógica para guardar el producto
      console.log('Producto a guardar:', this.productForm.value);
      this.snackBar.open('Producto guardado exitosamente', 'Cerrar', { duration: 3000 });
      this.productForm.reset();
      this.previewUrl = null;
    }
  }
}
