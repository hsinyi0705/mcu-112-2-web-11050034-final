import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, map } from 'rxjs';
import { IOrderDetailForm } from '../interface/order-detail-form.interface';
import { IOrderForm } from '../interface/order-form.interface';
import { Product } from '../model/product';
import { ShoppingCartService } from './../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  readonly shoppingCartService = inject(ShoppingCartService);

  readonly form = new FormGroup<IOrderForm>({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    telephone: new FormControl<string | null>(null, { validators: [Validators.required] }),
    details: new FormArray<FormGroup<IOrderDetailForm>>([]),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get telephone(): FormControl<string | null> {
    return this.form.get('telephone') as FormControl<string | null>;
  }

  get details(): FormArray<FormGroup<IOrderDetailForm>> {
    return this.form.get('details') as FormArray<FormGroup<IOrderDetailForm>>;
  }

  totalPrice = 0;

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.details.valueChanges
      .pipe(
        map((items) => {
          if (items.length === 0) {
            return 0;
          } else {
            return items.reduce((sum, curr) => sum + (curr.price || 0), 0);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((totalPrice) => (this.totalPrice = totalPrice));

    this.setOrderDetail();
  }

  setOrderDetail() {
    for (const item of this.shoppingCartService.data) {
      const control = new FormGroup<IOrderDetailForm>({
        id: new FormControl<number>(item.id, { nonNullable: true }),
        product: new FormControl<Product>(item.product, { nonNullable: true }),
        count: new FormControl<number>(item.count, { nonNullable: true }),
        price: new FormControl<number>(item.product.price * item.count, { nonNullable: true }),
      });

      control
        .get('count')
        ?.valueChanges.pipe(
          filter((value) => value !== null),
          map((value) => value * item.product.price),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe((price) => control.get('price')?.setValue(price, { emitEvent: false }));

      this.details.push(control);
    }
  }

  onSave(): void {
    console.log('Save');
  }
}
