import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    // next: { revalidate: 10 },\
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsList() {
  const products: Product[] = await getProducts();
  return (
    <div className=" py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products, index) => (
            <tr key={products.id}>
              <td>{index + 1}</td>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td className="flex gap-2">
                <UpdateProduct {...products} />
                <DeleteProduct {...products} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
