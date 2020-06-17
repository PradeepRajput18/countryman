import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../wishlistdata.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.css']
})
export class ProDetailsComponent implements OnInit {

  constructor(private _wishlistdata:WishlistdataService,  private router:Router) {
    this.nextCount();
   }
data=[];
sendtocart=[];
googleuser=[];
ngOnInit() {
  this._wishlistdata.details.subscribe(c => {
    this.data.push(c);
});

this._wishlistdata.user.subscribe(c=>{
  this.googleuser.push(c)
 console.log(c,"hey i am google details oka na");
 this.router.navigate(['/personalinfo'])
 
 

},err=>{console.log(err);
})
console.log("called");

}
nextCount() {
  this._wishlistdata.nextCount1();  
}  
senddata(index)
{
  
  if( this.data[index].carbutton==="go to cart")
  {
    this.router.navigate(['cart']);

  }
  else{
   
    this.data[index].carbutton= "go to cart";
    // this.sendtocart.push(this.data[index]);
  this._wishlistdata.cart(this.data[index]);
 
    
  }
} 
farmer()
{
  this.router.navigate(['login'])
}
}
