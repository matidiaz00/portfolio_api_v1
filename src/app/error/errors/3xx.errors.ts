import { ErrorDataInterface } from "./../error.model";

export const Errors3xx: ErrorDataInterface = {
    type: "Redirection",
    description: "Indicates that the client must take some additional action in order to complete their request",
    message_general: "Se reconoce un pedido de redirección pero se requiere una accion para completarlo",
    items: [
        {
            status: 300,
            type: "Multiple Choices",
            description: "The request has more than one possible response. The user-agent or user should choose one of them.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 301,
            type: "Moved Permanently",
            description: "The URL of the requested resource has been changed permanently. The new URL is given by the Location header field in the response. This response is cacheable unless indicated otherwise.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 302,
            type: "Found",
            description: "The URL of the requested resource has been changed temporarily. The new URL is given by the Location field in the response. This response is only cacheable if indicated by a Cache-Control or Expires header field.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 303,
            type: "See Other",
            description: "The response can be found under a different URI and SHOULD be retrieved using a GET method on that resource.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 304,
            type: "Not Modified",
            description: "Indicates the client that the response has not been modified, so the client can continue to use the same cached version of the response.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 305,
            type: "Use Proxy (Deprecated)",
            description: "Indicates that a requested response must be accessed by a proxy.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 306,
            type: "(Unused)",
            description: "It is a reserved status code and is not used anymore.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 307,
            type: "Temporary Redirect",
            description: "Indicates the client to get the requested resource at another URI with same method that was used in the prior request. It is similar to 302 Found with one exception that the same HTTP method will be used that was used in the prior request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 308,
            type: "Permanent Redirect (experimental)",
            description: "Indicates that the resource is now permanently located at another URI, specified by the Location header. It is similar to 301 Moved Permanently with one exception that the same HTTP method will be used that was used in the prior request.",
            message_developer: "",
            message_client: ""
        }
    ]
};