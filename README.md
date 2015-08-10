# EuroPython-Next


## Auth 

Obtain the Token 
curl -H "Content-Type: application/json" -X POST -d '{"username":"username","password":"password"}' http://localhost:8000/api-token-auth/

How to use the token
curl -X GET http://127.0.0.1:8000/api/example/ -H 'Authorization: Token yourtoken'

