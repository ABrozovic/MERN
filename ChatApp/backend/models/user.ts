import {model, Schema} from 'mongoose';

interface IUser {
    email: string,
    username: string,
    password: string
}

const userSchema = new Schema<IUser>({
    email: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

const user = model<IUser>('User', userSchema);
export default user;