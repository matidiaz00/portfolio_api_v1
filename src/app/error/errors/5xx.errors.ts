import { ErrorDataInterface } from "./../error.model";

export const Errors5xx: ErrorDataInterface = {
    type: "Server Error",
    description: "The server takes responsibility for these error status codes",
    message_general: "Error relacionado con el servidor",
    items: [
        {
            status: 500,
            type: "Internal Server Error",
            description: "The server encountered an unexpected condition that prevented it from fulfilling the request.",
            message_developer: "No se esta encontrando la razon del error.",
            message_client: "Hay un error generico y no se encuentra la razón del mismo."
        },
        {
            status: 501,
            type: "Not Implemented",
            description: "The HTTP method is not supported by the server and cannot be handled.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 502,
            type: "Bad Gateway",
            description: "The server got an invalid response while working as a gateway to get the response needed to handle the request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 503,
            type: "Service Unavailable",
            description: "The server is not ready to handle the request.",
            message_developer: "Hay un servicio que no esta listo para que lo devuelva este pedido.",
            message_client: "Hay un servicio que no esta listo para que lo devuelva este pedido."
        },
        {
            status: 504,
            type: "Gateway Timeout",
            description: "The server is acting as a gateway and cannot get a response in time for a request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 505,
            type: "HTTP Version Not Supported (Experimental)",
            description: "The HTTP version used in the request is not supported by the server.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 506,
            type: "Variant Also Negotiates (Experimental)",
            description: "Indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper endpoint in the negotiation process.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 507,
            type: "Insufficient Storage (WebDAV)",
            description: "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 508,
            type: "Loop Detected (WebDAV)",
            description: "The server detected an infinite loop while processing the request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 510,
            type: "Not Extended",
            description: "Further extensions to the request are required for the server to fulfill it.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 511,
            type: "Network Authentication Required",
            description: "Indicates that the client needs to authenticate to gain network access.",
            message_developer: "",
            message_client: ""
        }
    ]
};