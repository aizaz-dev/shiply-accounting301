// /api/addComment/page.js
import axios from "axios";

export async function addComment(req, res) {
  const { _id, name, email, comment } = req.body;
  const token =
    "sklZ0ib01037CYaCAycl0EHUNsurn3iWzUNTKE92LLg5S7Xgje9zdA7fR2CpNYyW6rYhoBHPPJgiYZ6wSEI96bHNFgcPsqU1oO79QTIo7TzJvkJajI8XoAgwSW3bbMo5U8ZnIk7P6mRHfiCUQXmMJQzbMGKuFjU5K0DtLNSLJRbGYJYW61L0";

  if (!token) {
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const result = await axios.post(
      `https://xvqd5hqf.api.sanity.io/v2022-03-07/data/mutate/production`,
      {
        mutations: [
          {
            patch: {
              id: _id,
              insert: {
                after: "comments[-1]",
                items: [
                  {
                    _key: `${Math.random().toString(36).substr(2, 9)}`,
                    name,
                    email,
                    comment,
                  },
                ],
              },
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

    res.status(200).json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting comment", error });
  }
}
