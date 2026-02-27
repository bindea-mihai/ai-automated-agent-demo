type Product = {
  id: number;
  name: string;
  code: string;
  description: string;
};

async function getProducts(): Promise<Product[]> {
  const apiBaseUrl =
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "http://localhost:5000";

  const response = await fetch(`${apiBaseUrl}/api/Products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load products.");
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Motor Insurance
          </h1>
          <p className="mt-2 text-zinc-600">
            Choose the protection that fits your vehicle and driving needs.
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="mb-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700">
                {product.code}
              </p>
              <h2 className="text-xl font-semibold text-zinc-900">
                {product.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {product.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
