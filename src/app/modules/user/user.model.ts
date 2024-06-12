import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            required: true,
        },
        password: {
            type: String,
            required: true,
            select: 0

        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

//remove password string after saving data
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

export const User = model<TUser>("User", userSchema);