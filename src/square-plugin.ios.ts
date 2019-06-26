import { Common } from './square-plugin.common';

export declare class SCCAPIRequest{
    static setClientID(clientID: string);
    static requestWithCallbackURLAmountUserInfoStringMerchantIDNotesCustomerIDSupportedTenderTypesClearsDefaultFeesReturnAutomaticallyAfterPaymentError(callbackURL: NSURL, amount: SCCMoney, userInfoString: string, merchantID: string, notes: string, customerID: string, supportedTenderTypes: SCCAPIRequestTenderTypes, clearsDefaultFees: boolean, autoreturn: boolean): SCCAPIRequest;
};
export declare class SCCMoney{
    static moneyWithAmountCentsCurrencyCodeError(amountCents: number, currencyCode: string);
};


export declare const enum SCCAPIRequestTenderTypes {
	All = 18446744073709551615,
	Card = 1,
	Cash = 2,
	Other = 4,
	SquareGiftCard = 8,
	CardOnFile = 16
}

export declare class SCCAPIConnection{
    static performRequestError(request: SCCAPIRequest): boolean;
};



export class SquarePlugin extends Common {
    public squareReader: any;
    public money: any;
    public connection: any;
    protected _SCCMoney: SCCMoney; 

    constructor(){
        super();
    }


    chargeCustomer(amount: number, note: string = "", clientId: string = "", urlScheme: string = "", currencyCode = "USD"): boolean {
        let cents = amount*100;
        let callbackUrl = NSURL.URLWithString(urlScheme);
        this.money = SCCMoney.moneyWithAmountCentsCurrencyCodeError(cents, currencyCode);
        SCCAPIRequest.setClientID(clientId);
        let request = SCCAPIRequest.requestWithCallbackURLAmountUserInfoStringMerchantIDNotesCustomerIDSupportedTenderTypesClearsDefaultFeesReturnAutomaticallyAfterPaymentError(callbackUrl, this.money, null, null, note, null, SCCAPIRequestTenderTypes.All, false, true );
        let success = SCCAPIConnection.performRequestError(request);
        return success;
    }
    

}
