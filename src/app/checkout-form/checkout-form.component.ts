import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PenaltyService } from '../penalty.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm!: FormGroup;
  penalty!:number;
  isEmpty: boolean = false;
  constructor(private formBuilder: FormBuilder,private PenaltyService:PenaltyService) {}
  ngOnInit(): void {
   this.checkoutForm=this.formBuilder.group({
    checkoutdate:['',Validators.required],
    returndate:['',Validators.required],
    country:['',Validators.required],
   })
    
  }
  calculatePenalty() {
    if (this.checkoutForm.valid) {
      const { checkoutdate, returndate, country } = this.checkoutForm.value;
      console.log( this.checkoutForm.value);
      this.isEmpty=true;
      this.penalty = this.PenaltyService.calculatePenalty(
        new Date(checkoutdate),
        new Date(returndate),
        country
      );
    
      
    }
  }
}
