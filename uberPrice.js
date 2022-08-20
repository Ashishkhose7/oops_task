//Q.4 write a class to calculate the uber price.

class uberPrice{

    static baseFare=40 //fixed charge
    static timeFare=2  //per min
    static distanceFare=10  //per km 

    setData(distance,time){
         this.distance=distance 
         this.time=time
    }

    getPrice(){
         return uberPrice.baseFare+(this.distance*(uberPrice.distanceFare))+(this.time*(uberPrice.timeFare))  //calculating price
    }
}
let uber=new uberPrice()  //object creation

uber.setData(12,30)
console.log(`Total Price ₹${uber.getPrice()}`)