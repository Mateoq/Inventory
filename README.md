# Inventory

This is a simple application built using monorepo structure and yarn workspaces. There are two workspaces:

- @inventory/client: client side using nextjs.
- @inventory/services: REST services using nestjs.

## Set Up
To set up this application:

- First create both **.env** files for the client and services workspace.
- Then run the next command in the root of the project:
```
yarn
```
This will install the dependencies for both workspaces.

## Run the App
To run the app run the next commands from the root of the project:
```
yarn workspace @inventory/services run start:dev

yarn workspace @inventory/client run dev
```

This will initialize both instances of the project.
