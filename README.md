**MINI-WP**
----------------------------------------

## Endpoint

baseUrl = http:localhost:3000/api
### *Doesn't Require Token*

#### User Routes
| Routes| Method | Request Body | Response Data| Response Error | Description |
|----------------------|--------|-----------------------------|-----------------------------------|--|---------------------------------------------------------------|
| `/users/register`| POST | `{ username, email, password }` | `{ access_token }` | 400 (`{email}` has been registered!) <br>400 (`{email}` is not a valid email!) <br>  (`${username}` has been registered!)|Register a new user|
| `/users/login` | POST | `{ email, password }`| `{ name, access_token }`| 400 (Wrong email/password) |Log in and get an email verification!|
| `/users/googleSignIn` | POST | `{ id_token }` | `{ name, newPass, access_token }` | |Sign in with Google and get a new password! |

### Token is required!

#### Article Routes (`{ headers: { token } }`)
| Routes | Method | Request Body | Response Success | Response Error | Description|
|-----------------------------------|--------|----------------------------------|------------------|---------------------|------------------------------------------------------------------------------|
| `/articles/findAll`| GET | -| `{ data }`| 401(Please Login) <br> 500 (Internal Server Error) | 
| `/articles/createArticle` | POST | `{title,content,userId,imageUrl}`| `${success message}` | 401(Invalid Token) <br> 401(Please Login) <br> 404 (Wrong User)| Create a new Article! |
| `/articles/deleteArticle/:id` | DELETE | -| `{ deleted }`| 401 (Invalid Token)<br> 401 (Please Login) <br> 401 (Unauthorized) <br> 404 (Wrong User) <br> 500 (Internal Server Error) | Delete an Article|
| `/articles/findMyArticles`| GET |  | | 401 (Invalid Token)<br> 401 (Please Login) <br> 404 (Wrong User) <br> 500 (Internal Server Error) | Read an article |
| `/articles/:id` | PATCH| -| `{updated }`| 401 (Invalid Token) <br> 401 (Please login ) <br> 401 Unauthorized <br> 404 (Wrong User) <br> 500 (Internal Server Error) | Updated an article! |