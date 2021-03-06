# Hello World API: NestJS + TypeScript Role-Based Access Control Sample

You can use this sample project to learn how to secure a simple NestJS API server using Auth0.

This project offers a working API server that exposes three public endpoints. Each endpoint returns a different type of message: public, protected, and admin.

The goal is to use Auth0 to only allow requests that contain a valid access token in their authorization header to access the protected and admin data. Additionally, only access tokens that contain a `read:admin-messages` permission should access the admin data, which is referred to as [Role-Based Access Control (RBAC)](https://auth0.com/docs/authorization/rbac/).

[Check out the `starter` branch](https://github.com/auth0-developer-hub/api_nestjs_typescript_hello-world/tree/starter) to see a simple example on how to set up a minimal API with NestJS.

[Check out the `basic-authorization` branch](https://github.com/auth0-developer-hub/api_nestjs_typescript_hello-world/tree/basic-authorization) to see specifically how to implement authorization using Auth0.

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
You should have the following variables in the .env file

```bash
PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
```

After that, please install the project dependencies.

```bash
npm install
```

You will need to follow the instructions on the next section (Connect your application to Auth0) to populate the values for AUTH0_AUDIENCE and AUTH0_DOMAIN in your .env file.

### Connect your application to Auth0

Create a free account in Auth0, and log into the dashboard. From this point, follow these steps to set up your API:

- Click on Applications -> APIs on the Dashboard sidebar.

- Click on **Create API**, and fill out the required fields. You can use the following sample data or provide your own:
  - Name: _Hello World API Server_.
  - Identifier: http://my.hello-world.server
  - Signing Algorithm: RS256

- Click on **Create**.

For more information on this part, please check out ["Register APIs"](https://auth0.com/docs/get-started/set-up-apis).

As a next step, let's get the value for `AUTH0_AUDIENCE`

- Click on Applications -> APIs on the Dashboard sidebar, and click on the API you created in the previous step
- Click on the Settings tab
- Get the `Identifier` field's value and use it for the `AUTH0_AUDIENCE` in your `.env` file

Finally, let's get the `AUTH0_DOMAIN` value with the following steps:

- Click on Applications -> APIs on the Dashboard sidebar, and click on the API you created in the previous step
- Click on the Test tab, and then on the cURL tab below if it's not selected
- Copy the value from the `--url` parameter in the sample POST request, not including the `https://` or `/oauth/token` parts (for example, if the `--url` complete value is `https://dev-abcdefg.us.auth0.com/oauth/token`, just copy the `dev-abcdefg.us.auth0.com` part). Use this value for the `AUTH0_DOMAIN` in your `.env` file


### Run the project

Run the project

```bash
npm start
```

## Test the Protected Endpoints

To get the access token to test your secure endpoints:

- Click on Applications -> APIs on the Dashboard sidebar, and click on your API

- Click on the Test tab, and copy the cURL call in the "Sending the token to the API" section.

    ```bash
    curl --request GET \
    --url http://path_to_your_api/ \
    --header 'authorization: Bearer your-access-token'
    ```

Please note that you need to change the `http://path_to_your_api/` with your protected API endpoint path (you can find all the available API endpoints in the next section). Leave the `your-access-token` untouched, since that is the token you will use for authorization. After that, execute the command in a terminal, and you should be able to see your success message.


## Test the Admin Endpoint

The `GET /api/messages/admin` endpoint requires the access token to contain the `read:admin-messages` permission. The best way to simulate that client-server secured request is to use any of the Hello World client demo apps to log in as a user that has that permission.

You can use the Auth0 Dashboard to create an `admin` role and assign it the`read:admin-messages` permission. Then, you can assign the `admin` role to any user that you want to access the `/admin` endpoint.

If you need help doing so, check out the following resources:

- [Create roles](https://auth0.com/docs/authorization/rbac/roles/create-roles)

- [Create permissions](https://auth0.com/docs/get-started/dashboard/add-api-permissions)

- [Add permissions to roles](https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles)

- [Assign roles to users](https://auth0.com/docs/users/assign-roles-to-users)

## API Endpoints

The API server defines the following endpoints:

### ???? Get public message

```bash
GET /api/messages/public
```

#### Response

```bash
Status: 200 OK
```

```json
{
  "text": "The API doesn't require an access token to share this message."
}
```

> ???? Protected Endpoints: These endpoints require the request to include an access token issued by Auth0 in the authorization header.

### ???? Get protected message

```bash
GET /api/messages/protected
```

#### Response

```bash
Status: 200 OK
```

```json
{
  "text": "The API successfully validated your access token."
}
```

### ???? Get admin message

> This endpoint is protected using authorization and RBAC. You need to use a valid Bearer token with the 'read:admin-messages' permissions to be able to test it

```bash
GET /api/messages/admin
```

#### Response

```bash
Status: 200 OK
```

```json
{
  "text": "The API successfully recognized you as an admin."
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
