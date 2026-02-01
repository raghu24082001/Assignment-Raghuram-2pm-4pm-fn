import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Laptop", price: "$999" },
    { id: 2, name: "Phone", price: "$699" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow
              hover:-translate-y-1 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-indigo-600 font-bold mt-2">
                {product.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
