export class Message {
    constructor() { }
    static errorMsg(msg: string, infor?: any) {
        const config = {
            ERR_SERVER_SIDE_PLEASE_CONTACT: "Something Wrong. Please Contact Dev To Handle",
            ERR_SERVER_SIDE: "Has Error From Server Side",
            ERR_REQUEST_INVALID: `There Was An Error Sending The Query Request.\nInformation: ${infor}`
        };
        return config[msg];
    }
}
