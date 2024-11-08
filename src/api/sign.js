export async function GET(req, res) {
  const list = [1, 2, 3];
  return res.json({ message: "this is a get request", list }, { status: 200 });
}

export async function POST(req, res) {
  return res.json({ message: "This is a post request" }, { status: 200 });
}

export async function PATCH(req, res) {
  return res.json({ message: "This is a patch request" }, { status: 200 });
}
