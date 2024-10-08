"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toHTML } from "@portabletext/to-html";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import {
  FaLinkedin,
  FaReddit,
  FaRegCommentDots,
  FaTwitter,
} from "react-icons/fa";
import {
  IoCalendarClear,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

// Define a custom serializer to handle various block types
const customSerializer = {
  types: {
    block: ({ children, node }) => {
      switch (node.style) {
        case "h1":
          return <h1>{children.join("")}</h1>;
        case "h2":
          return <h2>{children.join("")}</h2>;
        case "h3":
          return <h3>{children.join("")}</h3>;
        case "blockquote":
          return <blockquote>{children.join("")}</blockquote>;
        case "normal":
        default:
          return <p>{children.join("")}</p>;
      }
    },
    list: ({ children }) => <ul>{children.join("")}</ul>,
    listItem: ({ children }) => <li>{children.join("")}</li>,
    break: () => <br />, // Handle break directly here
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank">
        {children}
      </a>
    ),
    customColor: ({ children, value }) => (
      <span style={{ color: value.color }}>{children}</span>
    ),
  },
  image: ({ asset }) => <img src={asset.url} alt={asset.alt || "Image"} />,
};

// The working addComment function
const addComment = async (commentData) => {
  const { _id, name, email, comment } = commentData;

  try {
    const projectId = "xvqd5hqf";
    const dataset = "production";
    const apiVersion = "2022-03-07";
    const token =
      "sklZ0ib01037CYaCAycl0EHUNsurn3iWzUNTKE92LLg5S7Xgje9zdA7fR2CpNYyW6rYhoBHPPJgiYZ6wSEI96bHNFgcPsqU1oO79QTIo7TzJvkJajI8XoAgwSW3bbMo5U8ZnIk7P6mRHfiCUQXmMJQzbMGKuFjU5K0DtLNSLJRbGYJYW61L0";

    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;

    const result = await axios.post(
      url,
      {
        mutations: [
          {
            create: {
              _type: "comment",
              post: {
                _type: "reference",
                _ref: _id,
              },
              name,
              email,
              comment,
              approved: false,
            },
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { success: true, result };
  } catch (error) {
    console.error("Error submitting comment:", error);
    return { success: false, error };
  }
};

const Page = () => {
  const { slug } = useParams(); // Capture the slug from URL params
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const postId = post?._id; // Ensure post is available before accessing _id

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postId) {
      setErrorMessage("Cannot submit comment: post ID is missing.");
      return;
    }

    const commentData = {
      _id: postId,
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
    };

    const response = await addComment(commentData);

    if (response.success) {
      setSuccessMessage("Comment submitted successfully");
      setErrorMessage("");
      setFormData({ name: "", email: "", comment: "" });
    } else {
      setErrorMessage(
        response.error?.response?.data?.message || "Error submitting comment"
      );
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        _id,
        title,
        slug,
        date,
        content,
        "HeroImage": HeroImage.asset->url
      }`;

      const projectId = "xvqd5hqf";
      const dataset = "production";
      const apiVersion = "2022-03-07";
      const token =
        "sklZ0ib01037CYaCAycl0EHUNsurn3iWzUNTKE92LLg5S7Xgje9zdA7fR2CpNYyW6rYhoBHPPJgiYZ6wSEI96bHNFgcPsqU1oO79QTIo7TzJvkJajI8XoAgwSW3bbMo5U8ZnIk7P6mRHfiCUQXmMJQzbMGKuFjU5K0DtLNSLJRbGYJYW61L0";

      const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(
        query
      )}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.result) {
          setPosts(response.data.result);
          const currentPost = response.data.result.find(
            (p) => p.slug.current === slug
          );
          setPost(currentPost);
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const currentIndex = posts.findIndex((p) => p.slug.current === slug);
  const previousPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  const htmlContent = toHTML(post.content, customSerializer);
  return (
    <div>
      {/* Your existing code for rendering the post */}
      <div className="w-full bg-[#1B4284] h-[220px]"></div>
      <div className="relative w-full p-8 flex flex-row max-lg:flex-col max-lg:p-0">
        <div className="w-[50%] max-lg:w-full">
          <img
            src={post.HeroImage}
            alt="img"
            className="w-full object-cover object-center"
          />
        </div>

        <div className="flex max-lg:hidden w-[53%] absolute left-[45%] py-[50px] max-xl:py-0">
          <div className="w-full flex justify-center px-[30px] flex-col h-[400px] bg-[url('/blog/Depositphotos_67122483_ds-scaled.png')] bg-center bg-cover p-4">
            <h1 className="text-white font-Lato font-[600] text-[50px] max-2xl:text-[40px] max-xl:text-[36px]">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-white cursor-pointer">
              <IoCalendarClear /> {post.date} <FaRegCommentDots />
              {post.comment}
            </div>
          </div>
        </div>

        <div className="w-full hidden max-lg:block">
          <div className="w-full h-[100%] bg-[url('/blog/Depositphotos_67122483_ds-scaled.png')] bg-center bg-cover p-8">
            <h1 className="text-white font-Lato font-[600] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px]">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer">
              <IoCalendarClear /> {post.date} <FaRegCommentDots /> No
              {post.comment}
            </div>
          </div>
        </div>
      </div>

      {/* details */}
      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-md:flex-col gap-4">
          <div className="flex flex-col max-md:flex-row gap-4 m-5 p-5 max-md:p-0 max-md:m-0 max-md:justify-center max-md:items-center max-md:py-4 md:sticky top-2 z-50 h-full">
            <div className="w-[72px] py-2 bg-[#366CDD] flex items-center justify-center hover:bg-[#5582e2] transition-all duration-150 ease-in-out cursor-pointer">
              <MdOutlineFacebook color="white" size={25} />
            </div>
            <div className="w-[72px] py-2 bg-[#00CFFF] flex items-center justify-center hover:bg-[#42d3f3] transition-all duration-150 ease-in-out cursor-pointer">
              <FaTwitter color="white" size={25} />
            </div>
            <div className="w-[72px] py-2 bg-[#009BFF] flex items-center justify-center hover:bg-[#5582e2] transition-all duration-150 ease-in-out cursor-pointer">
              <FaLinkedin color="white" size={25} />
            </div>

            <div className="w-[72px] py-2 bg-[#FF3E00] flex items-center justify-center hover:bg-[#f36f43] transition-all duration-150 ease-in-out cursor-pointer">
              <FaReddit color="white" size={25} />
            </div>
            <div className="w-[72px] py-2 bg-[#00FF54] flex items-center justify-center hover:bg-[#44f37f] transition-all duration-150 ease-in-out cursor-pointer">
              <RiWhatsappLine color="white" size={25} />
            </div>
            <div className="w-[72px] py-2 bg-[#FF3C22] flex items-center justify-center hover:bg-[#f36f43] transition-all duration-150 ease-in-out cursor-pointer">
              <MdEmail color="white" size={25} />
            </div>
          </div>
          <div className="w-full m-5 p-5 max-md:m-0 max-md:p-0">
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="text-Lato font-[400] text-[#7A7A7A] text-[20px]"
            ></div>
            <hr className="mt-[50px]" />
            <div className="p-4 max-md:px-0 max-md:py-2">
              <h1 className="font-[600] font-sans text-[24px] text-[#1B4284] pb-4">
                Leave a Reply
              </h1>
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <form onSubmit={handleSubmit}>
                <textarea
                  placeholder="Your comment here..."
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  className="w-full outline-none border-solid border p-4 rounded-sm"
                  required
                ></textarea>
                <div className="flex flex-row max-md:flex-col gap-2 py-2">
                  <input
                    type="text"
                    placeholder="Name (required)"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-2 outline-none border border-solid rounded-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email (required)"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-2 outline-none border border-solid rounded-sm"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Website"
                    className="w-full p-2 outline-none border border-solid rounded-sm"
                  />
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-[#0091FF] hover:bg-[#27577c] transition-all ease-in-out duration-150 px-4 py-2 font-Lato font-[600] text-[12px] text-white">
                    POST COMMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full max-w-[1200px] mx-auto px-[16px] pb-[100px] flex justify-between">
            {previousPost && (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  router.push(`/resources/blog/${previousPost.slug.current}`)
                }
              >
                <div className="text-[#1B4284]">
                  <IoChevronBackOutline size={30} />
                </div>
                <div className="div">
                  <div className="font-Lato font-[400] text-[20px] text-[#1B4284]">
                    PREVIOUS
                  </div>
                  <div className="font-Lato font-[400] text-[#54595F] text-[14px]">
                    {previousPost.title}
                  </div>
                </div>
              </div>
            )}
            {nextPost && (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  router.push(`/resources/blog/${nextPost.slug.current}`)
                }
              >
                <div className="div">
                  <div className="font-Lato font-[400] text-[20px] text-[#1B4284]">
                    NEXT
                  </div>
                  <div className="font-Lato font-[400] text-[#54595F] text-[14px]">
                    {nextPost.title}
                  </div>
                </div>
                <div className="text-[#1B4284]">
                  <IoChevronForwardOutline size={30} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Page;
