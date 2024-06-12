import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(1, "Password is required")
})

export const RegisterSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Email is required"),
    password: z.string().min(6, "Minimum 6 characters required")
})