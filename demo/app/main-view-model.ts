import { Observable } from 'tns-core-modules/data/observable';
import { SquarePlugin } from 'nativescript-square-plugin';
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';

export class HelloWorldModel extends Observable {
  public message: string;
  private squarePlugin: SquarePlugin;

  constructor() {
    super();

    this.squarePlugin = new SquarePlugin();
    this.message = this.squarePlugin.message;
    console.log("got message from plugin:", this.message);
    console.log("square plugin:");
    console.dir(JSON.stringify(this.squarePlugin));
    console.log(this.squarePlugin.getVersion());
    

    // let count = 0;
    // setInterval( () => {
    //   count++;
    //   console.log("count now:", count);
    //   if(count % 40 == 0){
    //     console.log("~~~~~~~~~ invoking now");
    this.squareChargeCustomer();
    //   }
    // },1000);


    handleOpenURL((appURL: AppURL) => {
      console.log("handle the open url!!!");
      console.log('Got the following appURL', appURL);
      console.log(JSON.stringify(appURL));
    });


  }

  squareChargeCustomer(){
    console.log("invoke square charge cust");
    let amount = 100;
    let note = "";
    let clientId = "";
    let scheme = "";
    let currency = "CAD";
    // this.squarePlugin.chargeCustomer(amount, note, clientId, scheme, currency);
  }

}
