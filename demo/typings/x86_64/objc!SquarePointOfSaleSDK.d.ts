
declare function NSArrayOfTenderTypeStringsFromSCCAPIRequestTenderTypes(tenderTypes: SCCAPIRequestTenderTypes): NSArray<string>;

declare function NSStringFromSCCAPIErrorCode(errorCode: SCCAPIErrorCode): string;

declare class SCCAPIConnection extends NSObject {

	static alloc(): SCCAPIConnection; // inherited from NSObject

	static canPerformRequestError(request: SCCAPIRequest): boolean;

	static new(): SCCAPIConnection; // inherited from NSObject

	static performRequestError(request: SCCAPIRequest): boolean;
}

declare const enum SCCAPIErrorCode {

	Unknown = 0,

	PaymentCanceled = 1,

	PayloadMissingOrInvalid = 2,

	AppNotLoggedIn = 3,

	Unused = 4,

	MerchantIDMismatch = 5,

	UserNotActivated = 6,

	CurrencyMissingOrInvalid = 7,

	CurrencyUnsupported = 8,

	CurrencyMismatch = 9,

	AmountMissingOrInvalid = 10,

	AmountTooSmall = 11,

	AmountTooLarge = 12,

	InvalidTenderType = 13,

	UnsupportedTenderType = 14,

	CouldNotPerform = 15,

	NoNetworkConnection = 16,

	ClientNotAuthorizedForUser = 17,

	UnsupportedAPIVersion = 18,

	InvalidVersionNumber = 19,

	CustomerManagementNotSupported = 20,

	InvalidCustomerID = 21
}

declare function SCCAPIErrorCodeFromString(errorCodeString: string): SCCAPIErrorCode;

declare var SCCAPIErrorDomain: string;

declare var SCCAPIErrorStringAmountMissingOrInvalid: string;

declare var SCCAPIErrorStringAmountTooLarge: string;

declare var SCCAPIErrorStringAmountTooSmall: string;

declare var SCCAPIErrorStringAppNotLoggedIn: string;

declare var SCCAPIErrorStringClientNotAuthorizedForUser: string;

declare var SCCAPIErrorStringCouldNotPerform: string;

declare var SCCAPIErrorStringCurrencyMismatch: string;

declare var SCCAPIErrorStringCurrencyMissingOrInvalid: string;

declare var SCCAPIErrorStringCurrencyUnsupported: string;

declare var SCCAPIErrorStringCustomerManagementNotSupported: string;

declare var SCCAPIErrorStringInvalidCustomerID: string;

declare var SCCAPIErrorStringInvalidTenderType: string;

declare var SCCAPIErrorStringMerchantIDMismatch: string;

declare var SCCAPIErrorStringNoNetworkConnection: string;

declare var SCCAPIErrorStringPayloadMissingOrInvalid: string;

declare var SCCAPIErrorStringPaymentCanceled: string;

declare var SCCAPIErrorStringUnsupportedTenderType: string;

declare var SCCAPIErrorStringUserNotActivated: string;

declare var SCCAPIErrorUserInfoCodeStringKey: string;

declare class SCCAPIRequest extends NSObject implements NSCopying {

	static alloc(): SCCAPIRequest; // inherited from NSObject

	static new(): SCCAPIRequest; // inherited from NSObject

	static requestWithCallbackURLAmountUserInfoStringMerchantIDNotesCustomerIDSupportedTenderTypesClearsDefaultFeesReturnAutomaticallyAfterPaymentError(callbackURL: NSURL, amount: SCCMoney, userInfoString: string, merchantID: string, notes: string, customerID: string, supportedTenderTypes: SCCAPIRequestTenderTypes, clearsDefaultFees: boolean, autoreturn: boolean): SCCAPIRequest;

	static setClientID(clientID: string): void;

	readonly amount: SCCMoney;

	readonly callbackURL: NSURL;

	readonly clearsDefaultFees: boolean;

	readonly clientID: string;

	readonly customerID: string;

	readonly merchantID: string;

	readonly notes: string;

	readonly returnsAutomaticallyAfterPayment: boolean;

	readonly supportedTenderTypes: SCCAPIRequestTenderTypes;

	readonly userInfoString: string;

	APIRequestURLWithError(): NSURL;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqualToAPIRequest(request: SCCAPIRequest): boolean;
}

declare var SCCAPIRequestAmountMoneyKey: string;

declare var SCCAPIRequestCallbackURLKey: string;

declare var SCCAPIRequestClientIDKey: string;

declare var SCCAPIRequestCustomerIDKey: string;

declare var SCCAPIRequestMerchantIDKey: string;

declare var SCCAPIRequestNotesKey: string;

declare var SCCAPIRequestOptionsAutoReturnKey: string;

declare var SCCAPIRequestOptionsClearDefaultFeesKey: string;

declare var SCCAPIRequestOptionsKey: string;

declare var SCCAPIRequestOptionsSupportedTenderTypesKey: string;

declare var SCCAPIRequestOptionsTenderTypeStringCard: string;

declare var SCCAPIRequestOptionsTenderTypeStringCardOnFile: string;

declare var SCCAPIRequestOptionsTenderTypeStringCash: string;

declare var SCCAPIRequestOptionsTenderTypeStringOther: string;

declare var SCCAPIRequestOptionsTenderTypeStringSquareGiftCard: string;

declare var SCCAPIRequestStateKey: string;

declare const enum SCCAPIRequestTenderTypes {

	All = 18446744073709551615,

	Card = 1,

	Cash = 2,

	Other = 4,

	SquareGiftCard = 8,

	CardOnFile = 16
}

declare class SCCAPIResponse extends NSObject implements NSCopying {

	static alloc(): SCCAPIResponse; // inherited from NSObject

	static new(): SCCAPIResponse; // inherited from NSObject

	static responseWithResponseURLError(URL: NSURL): SCCAPIResponse;

	readonly clientTransactionID: string;

	readonly error: NSError;

	readonly successResponse: boolean;

	readonly transactionID: string;

	readonly userInfoString: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqualToAPIResponse(response: SCCAPIResponse): boolean;
}

declare var SCCAPIResponseClientTransactionIDKey: string;

declare var SCCAPIResponseDataKey: string;

declare var SCCAPIResponseErrorCodeKey: string;

declare var SCCAPIResponseStateKey: string;

declare const enum SCCAPIResponseStatus {

	Unknown = 0,

	OK = 1,

	Error = 2
}

declare function SCCAPIResponseStatusFromString(statusString: string): SCCAPIResponseStatus;

declare var SCCAPIResponseStatusKey: string;

declare var SCCAPIResponseStatusStringError: string;

declare var SCCAPIResponseStatusStringOK: string;

declare var SCCAPIResponseTransactionIDKey: string;

declare const enum SCCErrorCode {

	Unknown = 0,

	MissingCurrencyCode = 1,

	UnsupportedCurrencyCode_Deprecated = 2,

	MissingRequestClientID = 3,

	InvalidRequestCallbackURL = 4,

	InvalidRequestAmount = 5,

	CannotPerformRequest = 6,

	UnableToGenerateRequestJSON = 7,

	MissingOrInvalidResponseData = 8,

	MissingOrInvalidResponseJSONData = 9,

	MissingOrInvalidResponseStatus = 10,

	MissingOrInvalidResponseErrorCode = 11
}

declare var SCCErrorDomain: string;

declare class SCCMoney extends NSObject implements NSCopying {

	static alloc(): SCCMoney; // inherited from NSObject

	static moneyWithAmountCentsCurrencyCodeError(amountCents: number, currencyCode: string): SCCMoney;

	static new(): SCCMoney; // inherited from NSObject

	readonly amountCents: number;

	readonly currencyCode: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqualToSCCMoney(money: SCCMoney): boolean;

	requestDictionaryRepresentation(): NSDictionary<any, any>;
}

declare var SCCMoneyRequestDictionaryAmountKey: string;

declare var SCCMoneyRequestDictionaryCurrencyCodeKey: string;

declare var SquarePointOfSaleSDKVersionNumber: number;

declare var SquarePointOfSaleSDKVersionString: interop.Reference<number>;
