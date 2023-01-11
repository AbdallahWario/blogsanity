"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";


function onPublicAccessOnly(){
    throw new Error('login to access preview')
}

if(!projectId || !dataset){
    throw new Error(
        'missing projectId or dataset. Check your sanity.json or .env'
    )
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
})