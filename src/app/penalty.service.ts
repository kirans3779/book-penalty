import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  calculatePenalty(checkoutdate: Date, returndate: Date, country: string): number {
   
    const penaltyRates: { [key: string]: any; }= {
      USA: 8,  
      Canada: 5,  
      UK: 7,  
     India:2
    };
    console.log(penaltyRates[country]);
    // Calculate the overdue duration 
  
    const overdueDuration = Math.ceil((returndate.getTime() - checkoutdate.getTime()) / (1000 * 3600 * 24));
console.log("overduration"+overdueDuration);

    
    if (overdueDuration > 0) {
      // Calculate the penalty 
      const penaltyRate = penaltyRates[country];
      const penalty = overdueDuration * penaltyRate;
      console.log("the penealty is"+penalty);
      

      // to check penalty is positive
      return penalty > 0 ? penalty : 0;
    } else {
      // If the country is not found in the rates, default to a standard rate
      const standardPenaltyRate = 20; 
      const penalty = overdueDuration * standardPenaltyRate;
      console.log("the penealty is"+penalty);
      return penalty > 0 ? penalty : 0;
    }
  }
}
