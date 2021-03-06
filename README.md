# PosterShop-Vue
This is mock up online store for buying posters built with Vue JS 2 and Express with Node. This project is for demo purposes only. 

#### Pre-installation

1. Ensure [Node.js  >=6.4](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
2. Register Oauth 2 access to the [Imgur API](https://api.imgur.com/oauth2/addclient).

    Register for OAuth 2 authorization without a callback URL. You can name your application anything you like and you don't need a callback URL. The important thing is that you get a *client ID*. 

#### Installation

1. Change directory into the local clone of the repository

    ```
    cd PosterShop-Vue
    ```

2. Install dependencies

    ```
    npm install
    ```

3. Create a `.env` file by copying the sample

    ```
    cp .env_sample .env
    ```
    
    Or for Windows:
    
    ```
    copy .env_sample .env
    ```
    
    Now edit the *.env* file and replace the `IMGUR_CLIENT_ID` with the client ID provided in the pre-installation
    
4. Start project

    ```
    npm run start
    ```

5. Your site will be available at *localhost:[PORT]* where `PORT` is whatever value is set in your `.env` file.

#### It's not working!

Here are some common mistakes people make, check these before filing an issue:

- `ENOENT: no such file or directory, open '.env'`. You forgot to make a *.env* file. See step 3.
- `EADDRINUSE :::3000`. You already have another application using port 3000. Either end it, or change your port to something else in the *.env* file to resolve the conflict e.g. `3001`
- `Error: Request failed with status code 403`. You didn't create an Imgur API key, or didn't paste it into your *.env* file. See pre-installation step 2.
- Ensure you have a version of Node >= 6.4

```
node -v
```
