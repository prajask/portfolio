"use client"

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio/client-component";

export default function AdminPage(){
    return <NextStudio config={config}/>
}