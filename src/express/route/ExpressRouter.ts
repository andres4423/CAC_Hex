import { Router } from "express";

export default interface ExpressRouter{
    router:Router
    routes:()  => void
    root: string

}