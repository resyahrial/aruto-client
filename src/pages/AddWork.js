import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCategories } from "../redux/actions/categories";

export default function AddWork() {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  //   const [category, setCategory] = useState([]);
  const [category, setCategory] = useState("");
  const categoryDB = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const titleSetter = (e) => {
    setTitle(e.target.value);
  };

  const descriptionSetter = (e) => {
    setDescription(e.target.value);
  };

  const imageSetter = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  //   const categorySetter = (e) => {
  //     let isExist = category.find((cat) => cat === e.target.value);

  //     if (isExist) {
  //       let newCat = [...category];
  //       let deleteCat = newCat.filter((cat) => cat !== e.target.value);
  //       setCategory(deleteCat);
  //     } else {
  //       setCategory([...category, e.target.value]);
  //     }
  //   };

  const categorySetter = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <>
      <section id="add-work">
        <div className="container mt-5 border-radius border">
          <div className="col-lg-12 text-center py-4 bg-title mb-4">
            <h1>Upload My Works</h1>
          </div>
          <div className="col-lg-12">
            <form>
              <div className="form-group px-5">
                <label>Art Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Art Title"
                  value={title}
                  onChange={titleSetter}
                />
              </div>
              <div className="form-group px-5">
                <label>Art Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your Art Description"
                  value={description}
                  onChange={descriptionSetter}
                ></textarea>
              </div>
              <div className="form-group px-5">
                <label>Art File</label>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={imageSetter}
                />
                <small className="form-text text-muted">
                  Supported file: .JPEG, .PNG
                </small>
              </div>
              <div className="form-group px-5 justify-content-center">
                <div>
                  <label>Art Category</label>
                </div>
                <select onChange={categorySetter} className="form-select">
                  <option defaultChecked>Select Category</option>
                  {categoryDB?.map((cat) => {
                    return (
                      <option
                        key={cat._id}
                        defaultValue={cat.title}
                        value={cat.title}
                      >
                        {cat.title}
                      </option>
                    );
                  })}
                </select>
                {/* <div className="form-check form-check-inline">
                  <input
                    onClick={categorySetter}
                    className="form-check-input"
                    type="checkbox"
                    value="Digital Art"
                  />
                  <label className="form-check-label">Digital Art</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={categorySetter}
                    className="form-check-input"
                    type="checkbox"
                    value="Fan Art"
                  />
                  <label className="form-check-label">Fan Art</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={categorySetter}
                    className="form-check-input"
                    type="checkbox"
                    value="Fantasy"
                  />
                  <label className="form-check-label">Fantasy</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onClick={categorySetter}
                    className="form-check-input"
                    type="checkbox"
                    value="Game Art"
                  />
                  <label className="form-check-label">Game Art</label>
                </div> */}
              </div>
              <div className="justify-content-center d-flex">
                <button
                  type="submit"
                  className="btn btn-primary upload-btn-width"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
