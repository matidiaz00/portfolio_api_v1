import { IncomingHttpHeaders } from "http";

export interface RequestInterface {
    status: number;
    timestamp: Date;
    instance: string;
    path: string;
    response: any;
    body?: any;
    headers: IncomingHttpHeaders;
    message: {
        general: string;
        developer: string;
        client: string;
    };
}

export interface ResponseInterface {
    status: number;
    type: string;
    description: string;
    message: {
        general: string;
        developer: string;
        client: string;
    };
    response: any;
    info: {
        type: string;
        description: string;
        instance: string;
        path: string;
        timestamp: Date;
        body: any;
        headers: any;
    }
}

interface DataItemsInterface {
    type: string;
    description: string;
    message_general: string;
    items: Array<ItemDataInterface>;
}

interface ItemDataInterface {
    status: number;
    type: string;
    description: string;
    message_developer: string;
    message_client: string;
}

const Errors1xx: DataItemsInterface = {
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

const Errors2xx: DataItemsInterface = {
    type: "Success",
    description: "Indicates that the client’s request was accepted successfully",
    message_general: "El pedido fue aceptado correctamente",
    items: [
        {
            status: 200,
            type: "OK",
            description: "Indicates that the request has succeeded.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 201,
            type: "Created",
            description: "Indicates that the request has succeeded and a new resource has been created as a result.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 202,
            type: "Accepted",
            description: "Indicates that the request has been received but not completed yet. It is typically used in log running requests and batch processing.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 203,
            type: "Non-Authoritative Information",
            description: "Indicates that the returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 204,
            type: "No Content",
            description: "The server has fulfilled the request but does not need to return a response body. The server may return the updated meta information.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 205,
            type: "Reset Content",
            description: "Indicates the client to reset the document which sent this request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 206,
            type: "Partial Content",
            description: "It is used when the Range header is sent from the client to request only part of a resource.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 207,
            type: "Multi-Status (WebDAV)",
            description: "An indicator to a client that multiple operations happened, and that the status for each operation can be found in the body of the response.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 208,
            type: "Already Reported (WebDAV)",
            description: "Allows a client to tell the server that the same resource (with the same binding) was mentioned earlier. It never appears as a true HTTP response code in the status line, and only appears in bodies.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 226,
            type: "IM Used",
            description: "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
            message_developer: "",
            message_client: ""
        }
    ]
};

const Errors3xx: DataItemsInterface = {
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

const Errors4xx: DataItemsInterface = {
    type: "Client Error",
    description: "This category of error status codes points the finger at clients",
    message_general: "Error relacionado con el usuario",
    items: [
        {
            status: 400,
            type: "Bad Request",
            description: "The request could not be understood by the server due to incorrect syntax. The client SHOULD NOT repeat the request without modifications.",
            message_developer: "El servidor no entiendió el pedido, no hacer de nuevo esta llamada hasta modificar el pedido.",
            message_client: "No logro entender un pedido."
        },
        {
            status: 401,
            type: "Unauthorized",
            description: "Indicates that the request requires user authentication information. The client MAY repeat the request with a suitable Authorization header field",
            message_developer: "Este pedido requiere que estes logueado.",
            message_client: "No estas logueado y lo necesitas para hacer este pedido."
        },
        {
            status: 403,
            type: "Forbidden",
            description: "Client authenticated but does not have permission to access the requested resource",
            message_developer: "Estas enviando correctamente los datos de autentificación, pero te faltan permisos para hacer esta llamada.",
            message_client: "Estas logueado pero no tenes los permisos necesarios para hacer este pedido."
        },
        {
            status: 404,
            type: "Not Found",
            description: "The server can not find the requested resource.",
            message_developer: "No se encuentra la llamada que estas realizando.",
            message_client: "No encuentra la llamada que estas realizando."
        },
        {
            status: 405,
            type: "Method Not Allowed",
            description: "The request HTTP method is known by the server but has been disabled and cannot be used for that resource.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 406,
            type: "Not Acceptable",
            description: "The server doesn’t find any content that conforms to the criteria given by the user agent in the Accept header sent in the request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 407,
            type: "Proxy Authentication Required",
            description: "Indicates that the client must first authenticate itself with the proxy.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 408,
            type: "Request Timeout",
            description: "Indicates that the server did not receive a complete request from the client within the server’s allotted timeout period.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 409,
            type: "Conflict",
            description: "The request could not be completed due to a conflict with the current state of the resource.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 410,
            type: "Gone",
            description: "The requested resource is no longer available at the server.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 411,
            type: "Length Required",
            description: "The server refuses to accept the request without a defined Content- Length. The client MAY repeat the request if it adds a valid Content-Length header field.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 412,
            type: "Precondition Failed",
            description: "The client has indicated preconditions in its headers which the server does not meet.",
            message_developer: "Una o mas condiciones de la cabecera en el pedido es incorrecta.",
            message_client: "Una o mas condiciones del pedido es incorrecta."
        },
        {
            status: 413,
            type: "Request Entity Too Large",
            description: "Request entity is larger than limits defined by server.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 414,
            type: "Request-URI Too Long",
            description: "The URI requested by the client is longer than the server can interpret.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 415,
            type: "Unsupported Media Type",
            description: "The media-type in Content-type of the request is not supported by the server.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 416,
            type: "Requested Range Not Satisfiable",
            description: "The range specified by the Range header field in the request can’t be fulfilled.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 417,
            type: "Expectation Failed",
            description: "The expectation indicated by the Expect request header field can’t be met by the server.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 418,
            type: "I’m a teapot (RFC 2324)",
            description: "It was defined as April’s lool joke and is not expected to be implemented by actual HTTP servers. (RFC 2324)",
            message_developer: "",
            message_client: ""
        },
        {
            status: 420,
            type: "Enhance Your Calm (Twitter)",
            description: "Returned by the Twitter Search and Trends API when the client is being rate limited.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 422,
            type: "Unprocessable Entity (WebDAV)",
            description: "The server understands the content type and syntax of the request entity, but still server is unable to process the request for some reason.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 423,
            type: "Locked (WebDAV)",
            description: "The resource that is being accessed is locked",
            message_developer: "",
            message_client: ""
        },
        {
            status: 424,
            type: "Failed Dependency (WebDAV)",
            description: "The request failed due to failure of a previous request.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 425,
            type: "Too Early (WebDAV)",
            description: "Indicates that the server is unwilling to risk processing a request that might be replayed.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 426,
            type: "Upgrade Required",
            description: "The server refuses to perform the request. The server will process the request after the client upgrades to a different protocol.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 428,
            type: "Precondition Required",
            description: "The origin server requires the request to be conditional.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 429,
            type: "Too Many Requests",
            description: "The user has sent too many requests in a given amount of time (“rate limiting”).",
            message_developer: "",
            message_client: ""
        },
        {
            status: 431,
            type: "Request Header Fields Too Large",
            description: "The server is unwilling to process the request because its header fields are too large.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 444,
            type: "No Response (Nginx)",
            description: "The Nginx server returns no information to the client and closes the connection.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 449,
            type: "Retry With (Microsoft)",
            description: "The request should be retried after performing the appropriate action.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 450,
            type: "Blocked by Windows Parental Controls (Microsoft)",
            description: "Windows Parental Controls are turned on and are blocking access to the given webpage.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 451,
            type: "Unavailable For Legal Reasons",
            description: "The user-agent requested a resource that cannot legally be provided.",
            message_developer: "",
            message_client: ""
        },
        {
            status: 499,
            type: "Client Closed Request (Nginx)",
            description: "The connection is closed by the client while HTTP server is processing its request, making the server unable to send the HTTP header back.",
            message_developer: "",
            message_client: ""
        }
    ]
};

const Errors5xx: DataItemsInterface = {
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

export function setResponse(request: RequestInterface): ResponseInterface {
    const main_status = String(request.status).charAt(0)
    if (main_status == "1") return setData(Errors1xx, request)
    else if (main_status == "2") return setData(Errors2xx, request)
    else if (main_status == "3") return setData(Errors3xx, request)
    else if (main_status == "4") return setData(Errors4xx, request)
    else if (main_status == "5") return setData(Errors5xx, request)
}

function setData(data: DataItemsInterface, request: RequestInterface): ResponseInterface {
    if (Array.isArray(data.items)) {
        let response: ResponseInterface;
        for (let item of data.items) {
            if (item.status == request.status) {
                response = {
                    status: request.status,
                    type: data.type,
                    description: data.description,
                    message: {
                        general: request.message.general,
                        developer: request.message.developer,
                        client: request.message.client
                    },
                    response: request.response,
                    info: {
                        type: item.type,
                        description: item.description,
                        instance: request.instance,
                        path: request.path,
                        timestamp: request.timestamp,
                        body: request.body ? request.body : null,
                        headers: request.headers
                    }
                }
                break
            }
        };
        return response
    }
}