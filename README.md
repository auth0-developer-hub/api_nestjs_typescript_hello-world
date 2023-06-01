# NestJS/TypeScript: Starter API Code Sample

This TypeScript code sample demonstrates how to build an API server using NestJS that is secure by design.

Visit the ["NestJS/TypeScript Code Samples: API Security in Action"](https://developer.auth0.com/resources/code-samples/api/nestjs) section of the ["Auth0 Developer Resources"](https://developer.auth0.com/resources) to explore how you can secure NestJS applications written in TypeScript by implementing endpoint protection and authorization with Auth0.

## Why Use Auth0?

Auth0 is a flexible drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users. We offer tons of guidance and SDKs for you to get started and [integrate Auth0 into your stack easily](https://developer.auth0.com/resources/code-samples/full-stack).

## Set Up and Run the NestJS Project

Run the following command to install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
```

Run the following command to start the server:

- Development:

```bash
npm run start
```

- Watch mode:

```bash
npm run start:dev
```

- Production mode:

```bash
npm run start:prod
```
