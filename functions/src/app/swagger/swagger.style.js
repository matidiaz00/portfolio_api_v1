"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customCss = void 0;
exports.customCss = `
.swagger-ui .responses-inner .tab,
.swagger-ui .tab-header .tab-item h4 span:after,
.swagger-ui .opblock .opblock-section-header>label,
.swagger-ui .response-controls,
.swagger-ui .topbar,
.swagger-ui .models { display: none }
.swagger-ui .scheme-container .schemes {
    flex-direction: row-reverse;
}
.swagger-ui .auth-wrapper {
    justify-content: flex-start;
}
.swagger-ui .opblock-section {
    display: flex;
    flex-wrap: wrap;
}
.swagger-ui .opblock-section-header {
    flex: 0 0 auto;
    width: 100%;
}
.swagger-ui .parameters-container {
    flex: 0 0 auto;
    width: 50%;
}
.swagger-ui .opblock-section-request-body {
    flex: 0 0 auto;
    width: 50%;
}
.swagger-ui .opblock .opblock-section-request-body .opblock-section-header {
    display: flex;
    background: transparent;
    box-shadow: none;
    height: 52px;
    margin-top: -52px;
    padding: 0 22px;
}
.swagger-ui .tab {
    margin-top: -8px;
    border-bottom: 1px solid rgba(59,65,81,.3);
    padding-bottom: 13px;
}
.swagger-ui .opblock .tab-header .tab-item.active h4 span {
    cursor: auto;
}
.swagger-ui .try-out {
    margin-top: -126px;
}
.swagger-ui .opblock-description-wrapper {
    width: 100%;
}
.swagger-ui textarea {
    min-height: 150px;
}
`;
