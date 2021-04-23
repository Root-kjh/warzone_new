import mysql from '../db/mysql';
import crypto from 'crypto';
import { userExistError } from '../lib/errors';

export const signin = (username, password) => {

}

export const signup = (username, email, password) => {
    mysql.users.findOne({
        where: {username: username}
    })
    .then(user => {
        if (user==null){
            var userInfo;
            mysql.users.create({
                username: username,
                email: email,
                password: crypto.createHash('sha512').update(password).digest('hex')
            })
            .then(result => {console.log(result.dataValues);userInfo = result.dataValues;});
            return userInfo;
        }
        else{
            throw userExistError();
        }
    });
}