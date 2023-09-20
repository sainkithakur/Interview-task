import "./App.css";
import { useEffect, useState } from "react";
// import Card from "./Component/Card";
// import axios from "axios";
// import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [formData, setFormData] = useState({});
  const [toodata, setTodoData] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [isPopup, setIsPopUp] = useState();

  // const [data, setData] = useState([]);
  // const [category, setCategory] = useState([]);

  // const [filteredData, setFilterData] = useState([]);

  // const getData = async () => {
  //   await axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setData(res.data));
  // };

  // const getCAtegory = async () => {
  //   await axios
  //     .get("https://fakestoreapi.com/products/categories")
  //     .then((res) => setCategory(res.data));
  // };

  // const handleFilter = (event) => {
  //   let arr = [...data];
  //   let filt = arr.filter((item) => item.category === event.target.value);
  //   if (event.target.value === "") {
  //     setFilterData(arr);
  //   } else {
  //     setFilterData(filt);
  //   }
  // };

  // const handleSearch = (event) => {
  //   let ar = [...data];
  //   let searched = ar.filter((item) =>
  //     item.title.toLowerCase().match(event.target.value.toLowerCase())
  //   );

  //   if (event.target.value === "") {
  //     setFilterData(ar);
  //   } else {
  //     setFilterData(searched);
  //   }
  // };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let arr = [...toodata];
    arr.push(formData);
    localStorage.setItem("data", JSON.stringify(arr));
    setTodoData(arr);
  };

  const handleRemove = (event) => {
    let arr = [...toodata];
    let filterd = arr.filter((item) => item.email !== event.email);
    localStorage.setItem("data", JSON.stringify(filterd));
    setTodoData(filterd);
  };

  // const getProducts = async () => {
  //   let payload = new FormData();
  //   payload.append("Categoryid", "43");
  //   payload.append("tocken", "XMCNBVGDTE734BCU65DW");

  //   const res = await axios.post(
  //     "https://api.vipswallet.com/api/EcommerceServices/ProductViaCategory/",
  //     payload
  //   );
  //   console.log(res.data);
  //   setProducts(res.data.Data);
  // };

  useEffect(() => {
    let arr = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];

    setTodoData(arr);
    // getData();
    // getCAtegory();
    // getProducts();
  }, []);

  return (
    <div className="App">
      {/* Todo Section */}
      <section className="border m-10 p-10">
        <h2 className="my-10 font-semibold underline uppercase text-lg">
          Todo App
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="usrename"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {toodata.map((item) => {
              return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleRemove(item)}>remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* Filteration Section */}
      {/* <section className="border m-10 p-10">
        <h2 className="my-10 font-semibold underline uppercase text-lg">
          Filteration
        </h2>
        <input
          type="search"
          placeholder="enter title"
          onChange={handleSearch}
        />
        <select onChange={handleFilter}>
          <option value="">select category</option>
          {category.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <div className="grid grid-cols-4 gap-10 my-10        ">
          {(filteredData.length === 0 ? data : filteredData).map((item) => {
            return (
              <div className="border rounded flex flex-col gap-2 p-3">
                <span>
                  <span className="font-bold">ID : </span>
                  {item.id}
                </span>
                <span>
                  <span className="font-bold"> Title : </span>
                  {item.title}
                </span>
                <span>
                  {" "}
                  <span className="font-bold">Category : </span> {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </section> */}
    </div>
  );
}

export default App;
