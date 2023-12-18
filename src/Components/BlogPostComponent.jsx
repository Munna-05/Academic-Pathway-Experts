import { Avatar } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import LongParagraphComponent from "./LongParagraphComponent";
import { VIEW } from "../API";
import AllBlogs from "../Pages/AllBlogs";
import AllBlogCards from "./AllBlogCards";

const BlogPostComponent = ({data}) => {
  const [like, setLike] = useState(false);
  const longText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, voluptate dolorem! Commodi dolore accusamus provident magni voluptas ipsum aliquid dolorem tempora! Temporibus asperiores cumque iure consequatur quisquam dolores autem recusandae inventore debitis natus porro rerum accusamus ut quae eum, culpa modi? Perferendis aliquam quam doloribus quis ipsum a exercitationem rem, iusto quae totam sit asperiores illum voluptas, in aspernatur, qui veritatis dicta consectetur fugiat saepe architecto tenetur. Ex iusto cum doloremque id. Illum nobis, pariatur suscipit, cum nesciunt in impedit eveniet odit vero maxime aliquid sed facere exercitationem corrupti nulla ipsam! Adipisci ipsa quidem, incidunt nulla, tenetur odio earum quos repudiandae, rem voluptate non aliquam provident aliquid! Doloribus ea cumque tenetur ullam eligendi odio rem hic earum adipisci similique sint dolores officiis voluptatibus alias, porro nulla consequuntur at inventore error corporis blanditiis ducimus incidunt fugiat! Architecto eos nesciunt rerum iste culpa ipsum, odio eius sint doloremque deleniti ullam dolorum repudiandae, quae cum, aspernatur officiis! Dolorum dolorem ad, obcaecati sunt nisi consequatur quas. Consequuntur perferendis molestiae repudiandae perspiciatis? Ducimus optio expedita sapiente inventore libero animi vel ab saepe eaque commodi, eos, soluta doloremque iure nihil accusantium harum obcaecati laboriosam incidunt vero? Sapiente provident libero possimus ab sed blanditiis eveniet corrupti rerum, consequatur praesentium veritatis maxime, mollitia exercitationem maiores explicabo officia a, magnam accusamus dignissimos odit ullam. Voluptate culpa maiores omnis possimus sed exercitationem nam, sunt obcaecati necessitatibus, cupiditate debitis, a fugiat odio reprehenderit commodi soluta labore impedit error officiis officia! At sit dolore fugiat exercitationem accusantium quod corrupti ea repellendus architecto, beatae quidem, ipsa fugit quas sint explicabo! Voluptatem saepe laborum consectetur enim illum optio molestiae cumque vero accusantium amet recusandae molestias ab cupiditate dolorum explicabo, suscipit blanditiis eos praesentium expedita rem et ducimus? Quia est molestias nulla, nihil fuga blanditiis vero sequi voluptate odit nam culpa laborum. Voluptate, id similique eum tempora debitis excepturi voluptatibus perferendis quibusdam consequuntur est esse facere, veniam reprehenderit exercitationem voluptates! Itaque nobis, amet eligendi cum vitae ullam quo atque laborum omnis aliquam repellat tenetur possimus voluptatem dolorem excepturi qui. Deleniti quod aspernatur, vero nostrum itaque voluptatem temporibus officia illo suscipit ratione. Consectetur illo deleniti deserunt sapiente ab veritatis ea, at expedita eaque voluptate rem eum nesciunt harum provident. Eaque aut ut totam aspernatur, aliquam reiciendis hic perferendis tempora repellat expedita! Maiores, minima quidem. Impedit porro iure sapiente vitae nemo velit dolor quis quos quaerat culpa deserunt repellat, distinctio minima sit cum quo, repudiandae ipsum provident fugiat consectetur aliquid dolore! Qui ipsum laudantium repudiandae in illum vel maxime ex, debitis molestias ea impedit. Est debitis atque odio repellat tempore pariatur fugit, adipisci nobis optio reprehenderit quisquam illum ratione explicabo. Molestiae dolores consequatur atque quas asperiores repellendus, deleniti hic! Vero tenetur possimus soluta sit et quasi corrupti. Expedita sapiente sequi totam voluptatibus, voluptates id beatae! Harum laboriosam architecto repellat ea minus alias illo eos corrupti pariatur fugiat iure reiciendis corporis, sequi id doloribus numquam, doloremque amet exercitationem magni obcaecati tempora cum sapiente eveniet. Natus reiciendis sint consequatur consequuntur exercitationem provident, animi quas earum nam voluptate vel rem.";
  return (
    <div>
      <div className="container mx-auto p-10">
        <img
          src={VIEW+data?.image}
          className="h-[50vh] mx-auto rounded-lg object-cover shadow-xl"
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
      <div className=" w-2/3 h-24 flex items-center justify-between m-4 border-y mx-auto">
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
        <p className="w-4/5 text-sm mx-auto">
          <LongParagraphComponent text={data?.content} />
        </p>
      </div>
      <h1 className="mt-32 mb-12 text-2xl font-bold capitalize">Other Blogs</h1>
          <AllBlogCards main={false}/>
    </div>
  );
};

export default BlogPostComponent;
