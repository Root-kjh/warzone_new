# warzone_new
koa로 제작한 new warzone

## API Docs

### index

#### Auth
* [signup](#signun)
* [signin](#signin)

#### Users

* [userInfo](#userInfo)
* [updateUserInfo](#updateUserInfo)
* [updatePassword](#updatePassword)
* [withdraw](#withdraw)
* [authProb](#authProb)

#### Probs

* [createProb](#createProb)
* [getProbInfo](#getProbInfo)
* [updateProb](#updateProb)
* [deleteProb](#deleteProb)

#### Rank

* [getUserRank](#getUserRank)

#### signup

* request
```http
POST http://kjh-projects.kor.kr:4100/auth/signup HTTP/1.1
{
    "username": "john",
    "email": "test@gmail.com",
    "password": "test_password"
}
```

* response

```http
HTTP/1.1 201 Created
{
    "username": "john",
    "email": "test@gmail.com"
}
```

```http
HTTP/1.1 400 Bad Request
{
    "message": "exist user"
}
```

```http
HTTP/1.1 400 Bad Request
{
    "message": "failed"
}
```

#### signin

* request

```http
POST http://kjh-projects.kor.kr:4100/auth/signin HTTP/1.1
{
    "username": "john",
    "password": "test_password"
}
```

* response

```http
HTTP/1.1 200 OK
{
    "userId": 10,
    "username": "john",
    "email": "test@gmail.com",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

```http
HTTP/1.1 400 Bad Request
{
    "message": "failed login"
}
```

#### userInfo

* request

```http
GET http://kjh-projects.kor.kr:4100/users/{username} HTTP/1.1
```

* response

```http
HTTP/1.1 200 OK
{
    "username": "john",
    "email": "test@gmail.com",
    "score": 100,
    "rank": 25,
    "solvedProb": [{"id": "mongoIdx", "title": "title", "score": "score"}]
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such user"
}
```


#### updateUserInfo

* request

```http
PUT http://kjh-projects.kor.kr:4100/users/{userId} HTTP/1.1
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
{
    "email": "newemail@gmai.com"
}
```

* response

```http
HTTP/1.1 200 OK
{
    "username": "john",
    "email": "newemail@gmail.com"
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such user"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```

#### updatePassword

* request

```http
PATCH http://kjh-projects.kor.kr:4100/users/{userId} HTTP/1.1
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
{
    "password": "newpassword"
}
```

* response
```http
HTTP/1.1 200 OK
{
    "username": "john"
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such user"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```


#### withdraw

* request

```http
DELETE http://kjh-projects.kor.kr:4100/users/{userId} HTTP/1.1
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

* response
```http
HTTP/1.1 200 OK
{
    "message": "success"
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such user"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```

#### authProb

* request

```http
<<<<<<< HEAD
PATCH http://kjh-projects.kor.kr:4100/warzone/users/{userId}/probs/{probId} HTTP/1.1
=======
POST http://kjh-projects.kor.kr:4100/users/{userId}/props/{propId} HTTP/1.1
>>>>>>> d1a79782fd7c1b18bfeb9db79e4df71bad724a8a
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
{
    "flag": "FLAG{test_Flag}"
}
```

* response
```http
HTTP/1.1 200 OK
{
    "username": "john",
    "score": 125,
    "rank": 20
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such probs"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```
```http
HTTP/1.1 400 Bad Request
{
    "message": "failed"
}
```

#### createProb


* request

```http
<<<<<<< HEAD
POST http://kjh-projects.kor.kr:4100/warzone/probs HTTP/1.1
=======
POST http://kjh-projects.kor.kr:4100/props HTTP/1.1
>>>>>>> d1a79782fd7c1b18bfeb9db79e4df71bad724a8a
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
{
    "title": "test_title",
    "context": "markdown context",
    "score": 20,
    "author": "RootKJH",
    "flag": "FLAG{test_Flag}"
}
```

* response
```http
HTTP/1.1 200 OK
{
    "title": "test_title",
    "context": "markdown context",
    "score": 20,
    "author": "RootKJH",
    "flag": "FLAG{test_Flag}"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```
```http
HTTP/1.1 400 Bad Request
{
    "message": "title exist"
}
```
```http
HTTP/1.1 400 Bad Request
{
    "message": "failed"
}
```

#### getProbInfo


* request

```http
<<<<<<< HEAD
GET http://kjh-projects.kor.kr:4100/warzone/probs/{probId} HTTP/1.1
=======
GET http://kjh-projects.kor.kr:4100/props/{propId} HTTP/1.1
>>>>>>> d1a79782fd7c1b18bfeb9db79e4df71bad724a8a
```

* response
```http
HTTP/1.1 200 OK
{
    "title": "test_title",
    "context": "markdown context",
    "score": 20,
    "author": "RootKJH"
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such probs"
}
```

#### updateProb


* request

```http
<<<<<<< HEAD
PUT http://kjh-projects.kor.kr:4100/warzone/probs/{probId} HTTP/1.1
=======
PUT http://kjh-projects.kor.kr:4100/props/{propId} HTTP/1.1
>>>>>>> d1a79782fd7c1b18bfeb9db79e4df71bad724a8a
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
{
    "title": "test_title",
    "context": "markdown context",
    "score": 20,
    "author": "RootKJH",
    "flag": "FLAG{test_Flag}"
}
```

* response
```http
HTTP/1.1 200 OK
{
    "title": "test_title",
    "context": "markdown context",
    "score": 20,
    "author": "RootKJH",
    "flag": "FLAG{test_Flag}"
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such probs"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```
```http
HTTP/1.1 400 Bad Request
{
    "message": "title exist"
}
```
```http
HTTP/1.1 400 Bad Request
{
    "message": "failed"
}
```

#### deleteProb


* request

```http
<<<<<<< HEAD
DELETE http://kjh-projects.kor.kr:4100/warzone/probs/{probId} HTTP/1.1
=======
DELETE http://kjh-projects.kor.kr:4100/props/{propId} HTTP/1.1
>>>>>>> d1a79782fd7c1b18bfeb9db79e4df71bad724a8a
Authentication: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

* response
```http
HTTP/1.1 200 OK
{
    "message": "success"
}
```
```http
HTTP/1.1 404 Not Found
{
    "message": "no such probs"
}
```
```http
HTTP/1.1 401 Unauthorized
{
    "message": "permission denied"
}
```

#### getUserRank

* request

```http
GET http://kjh-projects.kor.kr:4100/rank HTTP/1.1
```

* response
```http
HTTP/1.1 200 OK
{
    "userList": [
        {"username":"john", "score": 200},
        {"username":"mark", "score": 150},
        {"username":"dean", "score": 100},
    ]
}
```
