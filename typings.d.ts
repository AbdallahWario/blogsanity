import { AuthStore } from "sanity";
import { BaseView } from "sanity/desk";
import { Block } from "typescript";

type Base ={
    _craetedAt: string;
    _id:string;
    _rev: string;
    _type: string;
    _updatedAt: string;

};


interface Post extends Base{
    author : Author ;
    body : Block[];
    mainImage: Image;
    slug:Slug;
    title:string;
    description: string;

}

interface Author extends Base{
    bio: Block[];
    image: Image;
    name: string;
    slug: slug;
}

interface image {
    _type:'image';
    _type:"reference"
}
interface Slug{
    _type:"slug",
    current: string;
}

interface Block{
    _key: string;
    _type:"block";
    children:span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Span{
    _key: string;
    _type: "span",
    marks: string[];
    text: string;

}


interface Category extends Base{
    description: string;
    title: string;

}

interface MainImage{
    _type:"Image",
    asset: Reference;
}

interface Title{
    _type:"string",
    current: string;
}