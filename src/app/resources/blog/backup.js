"use client"; // Ensure this component runs on the client side
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toHTML } from "@portabletext/to-html";

// Define a custom serializer to handle various block types
const customSerializer = {
  types: {
    block: ({ children, node }) => {
      switch (node.style) {
        case "h1":
          return `<h1>${children}</h1>`;
        case "h2":
          return `<h2>${children}</h2>`;
        case "h3":
          return `<h3>${children}</h3>`;
        case "blockquote":
          return `<blockquote>${children}</blockquote>`;
        default:
          return `<p>${children.join('')}</p>`;
      }
    },
    list: ({ children }) => `<ul>${children.join('')}</ul>`,
    listItem: ({ children }) => `<li>${children.join('')}</li>`,
  },
  marks: {
    link: ({ children, value }) => `<a href="${value.href}" target="_blank">${children}</a>`,
    
    // Handle custom text color
    customColor: ({ children, value }) => {
      return `<span style="color:${value.color}">${children}</span>`;
    },
  },
  image: ({ asset }) => `<img src="${asset.url}" alt="${asset.alt || 'Image'}" />`,
};



const Page = () => {
  const { slug } = useParams(); // Capture the slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        console.log("No slug provided");
        return;
      }

      const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        desc,
        date,
        commit,
        content,
        "HeroImage": HeroImage.asset->url
      }`;

      const projectId = "xvqd5hqf";
      const dataset = "production";
      const apiVersion = "2022-03-07";
      const token =
        "sklZ0ib01037CYaCAycl0EHUNsurn3iWzUNTKE92LLg5S7Xgje9zdA7fR2CpNYyW6rYhoBHPPJgiYZ6wSEI96bHNFgcPsqU1oO79QTIo7TzJvkJajI8XoAgwSW3bbMo5U8ZnIk7P6mRHfiCUQXmMJQzbMGKuFjU5K0DtLNSLJRbGYJYW61L0";

      // Construct the URL for fetching the post from Sanity
      const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(
        query
      )}&$slug="${slug}"`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Sanity Response:", response.data);

        if (response.data.result) {
          setPost(response.data.result); // Set the post data
        } else {
          console.log("No post found for slug:", slug);
          setPost(null); // If no post was found
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  // Convert Portable Text content to HTML using the custom serializer
  const htmlContent = toHTML(post.content, customSerializer);

  return (
    <div className="post-container">
      <div className="w-full bg-[#1B4284] h-[220px]"></div>

      <div className="relative w-full p-8 flex flex-row max-lg:flex-col max-lg:p-0">
        <div className="w-[50%] max-lg:w-full">
          <img
            src={post.HeroImage}
            alt={post.title}
            className="w-full object-cover object-center"
          />
        </div>

        <div className="w-full hidden max-lg:block">
          <div className="w-full h-[100%] bg-[url('/blog/Depositphotos_67122483_ds-scaled.png')] bg-center bg-cover p-8">
            <h1 className="text-white fff font-Lato font-[600] text-[50px]">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-white">
              <span>{post.date}</span> <span>•</span> <span>{post.commit}</span>
            </div>
          </div>
        </div>
      </div>
      

      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-[16px]">
          <div className="m-5 p-5">
            {/* Render HTML directly using dangerouslySetInnerHTML */}
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="text-Lato font-[400] text-[#7A7A7A] text-[20px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
