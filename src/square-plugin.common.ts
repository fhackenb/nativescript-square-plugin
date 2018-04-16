import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Common extends Observable {
  public message: string;
  public squareReader: any;

  constructor() {
    super();
    console.log("running square-plugin common");
  }

  public greet() {
    return "Hello, NS";
  }

  public chargeCustomer(amount: number): boolean{
    return false;
  }


  public getVersion(){
    return 0;
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'} now!.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working heehehe :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}
