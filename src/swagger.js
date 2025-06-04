// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dealer & Distributor Management Portal API",
      version: "1.0.0",
      description:
        "API documentation for the Dealer & Distributor Management system",
    },
    servers: [
      {
        url: "http://localhost:4000/api",
      },
    ],
    components: {
      securitySchemes: {
        tokenAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization", 
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
