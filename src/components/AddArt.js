import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addArt } from "../redux/actions/arts";
import { fetchCategories } from "../redux/actions/categories";
import { fetchUserById } from "../redux/actions/users";

export default function AddArt() {
  const [data, setData] = useState({
    title: "",
    price: 0,
    description: "",
    image_url: "",
    categories: "",
  });
  const { categories } = useSelector((state) => state.categories);
  const { isLoading } = useSelector((state) => state.arts);
  const dispatch = useDispatch();

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onFilePicked = (ev) => {
    const files = ev.target.files[0];
    if (files) {
      // check if any file format
      if (files.name.lastIndexOf(".") <= 0) {
        return;
      }

      const fr = new FileReader();
      fr.readAsDataURL(files);
      fr.addEventListener("load", () => {
        setData({
          ...data,
          image_url: files,
        });
      });
    } else {
      setData({
        ...data,
        image_url: "",
      });
    }
  };

  const saveChanges = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    Object.keys(data).forEach((el) => {
      formData.set(el, data[el]);
    });

    dispatch(addArt(formData));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setData({
        ...data,
        title: "",
        price: 0,
        description: "",
        image_url: "",
        categories: "",
      });
      dispatch(fetchUserById(localStorage.access_token));
    }
  }, [isLoading]);

  return (
    <form className="p-2 mt-2" onSubmit={saveChanges}>
      <h4 className="h5 font-weight-bold mb-3">Upload My Works</h4>
      <div className="form-group ">
        <label className="text-muted">Art Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your Art Title"
          required
          name="title"
          value={data.title}
          onChange={onChange}
        />
      </div>
      <div className="form-group ">
        <label className="text-muted">Price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Your Art Price"
          required
          name="price"
          value={data.price}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Description</label>
        <textarea
          className="form-control"
          rows="2"
          placeholder="Your Art Description"
          name="description"
          value={data.description}
          onChange={onChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="text-muted">Art File</label>
        <input
          type="file"
          className="form-control-file"
          onChange={onFilePicked}
        />
        <small className="form-text text-muted">
          Supported file: .JPEG, .PNG
        </small>
      </div>
      <div className="form-group">
        <label className="text-muted">Category</label>
        <select
          className="form-control"
          name="categories"
          value={data.categories}
          onChange={onChange}
        >
          {categories?.map((category) => {
            return (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            );
          })}
        </select>
      </div>

      <button type="submit" className="btn btn-block btn-primary mb-2">
        Save Changes
      </button>
    </form>
  );
}
