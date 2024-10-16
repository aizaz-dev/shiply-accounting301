// /api/addComment.js
import axios from "axios";

export default async function handler(req, res) {
  const { _id, name, email, comment } = req.body;
  const token =
          "skw8TxfsZIxERAj7pUIfW4Wa20vfZLlAoTWOBsRP9UUx0sZ6kFk2YkNbk02dyRSLqEzC3znPpo2Zn5W9JPYXJXCFRqVZ0s2NXH2ZePiS0q2FvnbJuCjNG8qmyhVowRJMVtA7VOhTKHllhJT6XR1PVRPbuV13Xc400YJGk4uQkVOkSBWxUKbU";

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
