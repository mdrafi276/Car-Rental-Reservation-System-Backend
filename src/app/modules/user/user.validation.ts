import { z } from 'zod';

const createSignupSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        email: z.string().email(),
        role: z.enum(['user', 'admin']),
        password: z.string().min(6),
        phone: z.string().min(10),
        address: z.string().min(1),
    })
});

export const userValidation = {
    createSignupSchema
}
