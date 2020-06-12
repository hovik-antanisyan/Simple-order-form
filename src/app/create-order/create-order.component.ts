import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void {
    this.orderForm = this.fb.group({
      orderName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      purchaseOrder: ['', Validators.required],
      deliveryNotes: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.orderForm.value);
    for (const controlName in this.orderForm.controls) {
      this.orderForm.controls[controlName].markAsTouched();
    }
  }

}
