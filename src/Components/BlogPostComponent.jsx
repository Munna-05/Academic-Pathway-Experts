import { Avatar } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import LongParagraphComponent from "./LongParagraphComponent";
import { VIEW } from "../API";
import AllBlogs from "../Pages/AllBlogs";
import AllBlogCards from "./AllBlogCards";
import parse from 'html-react-parser';
import { Parser } from "./excludedFolder/Parser";


const BlogPostComponent = ({data}) => {
  console.log("🚀 ~ file: BlogPostComponent.jsx:10 ~ BlogPostComponent ~ data:", data)
  const [like, setLike] = useState(false);
  return (
    <div>
      <div className="container mx-auto p-10">
        <img
          src={VIEW+data?.image}
          className="mx-auto w-1/2 h-[50vh] object-cover rounded-lg border-4 border-white shadow-lg shadow-stone-400"
          alt=""
        />
      </div>

      <div className="w-2/3 p-8 mx-auto">
        <h1 className="text-4xl capitalize font-bold">
         {data?.title}
        </h1>
        <p className="mt-6 leading-7 font-semibold w-2/3 mx-auto">
          {data?.description}
        </p>
      </div>

      {/* author section  */}
      <div className=" w-2/3 h-24 flex items-center px-4 justify-between m-4 mx-auto" style={{borderTop:"solid black 0.5px",borderBottom:"solid black 0.5px"}}>
        <div className="flex gap-4 items-center">
          <Avatar />

          <h4>{data?.author?.name}</h4>
        </div>

        <div className="cursor-pointer" onClick={() => setLike(!like)}>
          {!like ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="grey"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              class="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          )}
        </div>
      </div>

      <div className="w-2/3 mx-auto my-12">
        <p className="w-4/5 text-left mx-auto">
          {/* <LongParagraphComponent text={data?.content} /> */}
          {Parser(data)}
       
        </p>
        
      </div>

          
    
      
  

     
      <h1 className="mt-32 mb-12 text-2xl font-bold capitalize">Other Blogs</h1>
          <AllBlogCards main={false}/>
    </div>
  );
};

export default BlogPostComponent;
