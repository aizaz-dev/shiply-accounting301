export async function GET(req, res) {
  return res.json({ message: "this is a get request" }, { status: 200 });
}

export async function POST(req, res) {
  return res.json({ message: "This is a post request" }, { status: 200 });
}

export async function PATCH(req, res) {
  return res.json({ message: "This is a patch request" }, { status: 200 });
}
