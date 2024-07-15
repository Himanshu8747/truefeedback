import {z} from 'zod';


// identifier is just username
export const signInSchema = z.object({
    identifier:z.string(),
    password: z.string(),
})