"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors2xx = void 0;
exports.Errors2xx = {
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
