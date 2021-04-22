import mysql from '../db/mysql';
import crypto from 'crypto';

export const signin = (username, password) => {

}

export const signup = (username, email, password) => {
    mysql.users.findOne({
        where: {username: username}
    })
    .then(user => {
        console.log(user);
        if (user==null){
            mysql.users.create({
                username: username,
                email: email,
                password: crypto.createHash('sha512').update(password).digest('hex')
            })
            .then(result => {return result;});
        }
        else{
            throw {name: "userExistError", message: "user exist"};
        }
    });
}