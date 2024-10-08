"use client"; // Make sure this component runs on the client side
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "post"]{
          _id,
          title,
          desc,
          date,
          comment,
          slug,
          __updatedAt, // Add this field to get the last updated date
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

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response from Sanity:", response.data); // Log the full response

        if (response.data.result.length > 0) {
          setPosts(response.data.result);
        } else {
          console.error("No posts found for the given query");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[url('/resources/resource-guy.png')] bg-no-repeat bg-cover bg-center w-full ">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-lg:flex-col py-[250px] max-sm:py-[100px]">
          {/* Header content */}
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[100px] bg-[#FFFFFF]">
          <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col h-full cursor-pointer rounded-md shadow-lg hover:shadow-2xl transition-all duration-200 ease-in"
              >
                <img
                  src={item.HeroImage}
                  alt={item.title}
                  className="object-cover object-center w-full rounded-t-md h-[200px] sm:h-[250px] md:h-[300px]"
                />
                <div className="flex-grow p-6">
                  <h1 className="text-[#54595F] font-Roboto font-[600] text-[18px] sm:text-[20px] md:text-[21px] mt-4">
                    {item.title}
                  </h1>
                  <p className="text-[#777777] font-Roboto font-[400] text-[14px] mt-6 md:mt-8">
                    {item.desc}
                  </p>
                  {item.slug && item.slug.current ? (
                    <Link
                      className=""
                      href={`/resources/blog/${item.slug.current}`}
                    >
                      <p className="flex justify-start items-center text-[#1B4284] text-[12px] font-sans font-[500] mt-3 md:mt-8 hover:text-[#3a6097]">
                        READ MORE{" "}
                        <MdKeyboardDoubleArrowRight className="ml-1" />
                      </p>
                    </Link>
                  ) : (
                    <span className="text-[#777]">No slug available</span>
                  )}
                </div>
                <hr />
                <div className="px-6 py-4 text-[#ADADAD] font-sans font-[400] text-[12px] flex items-end">
                  {/* Conditionally render last updated date or created date */}
                  <span>
                    {item.date && !isNaN(Date.parse(item.date))
                      ? new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "No valid date available"}
                  </span>

                  <span className="mx-2">•</span>
                  <span>{item.comment}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 font-sans text-sm">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-4 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              « Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 ${
                  currentPage === index + 1
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="ml-4 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Next »
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
