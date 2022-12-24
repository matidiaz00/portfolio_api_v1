import { ErrorDataInterface } from "../error.model";

export const Errors1xx: ErrorDataInterface = {
    type: "Informational",
    description: "Communicates transfer protocol-level information",
    message_general: "Se reconoce el pedido y quiere comunicar algo",
    items: [
        {
            status: 100,
            type: "Continue",
            description: "An interim response. Indicates to the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 101,
            type: "Switching Protocol",
            description: "Sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 102,
            type: "Processing (WebDAV)",
            description: "Indicates that the server has received and is processing the request, but no response is available yet.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 103,
            type: "Early Hints",
            description: "Primarily intended to be used with the Link header. It suggests the user agent start preloading the resources while the server prepares a final response.",
            message_developer: "",
            message_client: ""
        }
    ]
};