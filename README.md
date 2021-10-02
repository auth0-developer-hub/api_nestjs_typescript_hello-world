# Hello World API: NestJS + TypeScript Sample

You can use this sample project to learn how to secure a simple NestJS API server using Auth0.

The `starter` branch offers a working API server that exposes three public endpoints. Each endpoint returns a different type of message: public, protected, and admin.

The goal is to use Auth0 to only allow requests that contain a valid access token in their authorization header to access the protected and admin data. Additionally, only access tokens that contain a `read:admin-messages` permission should access the admin data, which is referred to as [Role-Based Access Control (RBAC)](https://auth0.com/docs/authorization/rbac/).

## Run the Project

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
PORT=6060
```

Run the project in development mode:

```bash
npm run start:dev
```
