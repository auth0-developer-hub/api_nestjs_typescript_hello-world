# Hello World API: NestJS + TypeScript Sample

You can use this sample project to learn how to secure a simple NestJS API server using Auth0.

The `starter` branch offers a working API server that exposes three public endpoints. Each endpoint returns a different type of message: public, protected, and admin.

The goal is to use Auth0 to only allow requests that contain a valid access token in their authorization header to access the protected and admin data. Additionally, only access tokens that contain a `read:admin-messages` permission should access the admin data, which is referred to as [Role-Based Access Control (RBAC)](https://auth0.com/docs/authorization/rbac/).

[Check out the `basic-authorization` branch](https://github.com/auth0-developer-hub/api_nestjs_typescript_hello-world/tree/basic-authorization) to see authorization in action using Auth0.

[Check out the `basic-role-based-access-control` branch](https://github.com/auth0-developer-hub/api_nestjs_typescript_hello-world/tree/basic-role-based-access-control) to see authorization and Role-Based Access Control (RBAC) in action using Auth0.

## Get Started

The project uses the following language / framework versions:

- Node.js v14.0+
- TypeScript v4.3+
- Nest.js v8.0+

### Set up your environment

Generate the .env file by running the following command.

```bash
cp .env.example .env
```

Feel free to change the values as needed directly in the .env file.

After that, please install the project dependencies.

```bash
npm install
```

Run the project:

```bash
npm start
```

## API Endpoints

The API server defines the following endpoints:

### 🔓 Get public message

```bash
GET /api/messages/public
```

#### Response

```bash
Status: 200 OK
```

```json
{
  "metadata": {
    "api": "api_nestjs_typescript_hello-world",
    "branch": "starter"
  },
  "text": "This is a public message."
}
```

### 🔓 Get protected message

> You need to protect this endpoint using Auth0.

```bash
GET /api/messages/protected
```

#### Response

```bash
Status: 200 OK
```

```json
{
  "metadata": {
    "api": "api_nestjs_typescript_hello-world",
    "branch": "starter"
  },
  "text": "This is a protected message."
}
```

### 🔓 Get admin message

> You need to protect this endpoint using Auth0 and Role-Based Access Control (RBAC).

```bash
GET /api/messages/admin
```

#### Response

```bash
Status: 200 OK
```

```json
{
  "metadata": {
    "api": "api_nestjs_typescript_hello-world",
    "branch": "starter"
  },
  "text": "This is a admin message."
}
```

## Error Handling

### 400s errors

#### Response

```bash
Status: Corresponding 400 status code
```

```json
{
  "message": "Message that describes the error that took place."
}
```

### 500s errors

#### Response

```bash
Status: 500 Internal Server Error
```

```json
{
  "message": "Message that describes the error that took place."
}
```
