import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormPhoto({ setOpen }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({ description: '', photo: null });
  const changeHandler2 = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  }; // Это для картинок
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }; // Это для текста
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(); // мультер без этого не работает
    data.append('description', input.description);
    data.append('photo', input.photo); // Картинка вот
    axios.post(`/api/city/${id}/photos`, data)
      .then(() => navigate(`/${id}/photos`))
      .then(() => setOpen(false));
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={(e) => submitHandler(e, input)}>
        <label className="form-label" htmlFor="photo">
          Фото
          <input
            name="photo" // Обязательно!
            onChange={changeHandler2} // Для картинок
            type="file"
            className="form-control"
            id="photo"
          />

        </label>
        <div className="mb-3">
          <label htmlFor="input" className="form-label">
            Немного деталей
            <input
              value={input.description}
              name="description"
              onChange={changeHandler}
              type="text"
              className="form-control"
              id="exampleInput"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Добавить фото</button>
      </form>
    </div>
  );
}
