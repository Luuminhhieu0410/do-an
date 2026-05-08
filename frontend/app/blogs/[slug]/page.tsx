export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch("http://localhost:5555/abc/123", {
    method: "POST",
    body: JSON.stringify({
      "hehe":"hehe"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(">>>>> BlogPostPage", data);
  return <div>{JSON.stringify(data)}</div>;
}
