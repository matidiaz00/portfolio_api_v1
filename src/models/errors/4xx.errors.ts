import { ErrorDataInterface } from "../error.model";

export const Errors4xx: ErrorDataInterface = {
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