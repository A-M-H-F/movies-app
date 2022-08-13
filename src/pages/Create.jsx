import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/css/create.css';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [programType, setProgramType] = useState('series');
  const [releaseYear, setReleaseYear] = useState('2022');
  const [url, setUrl] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      title,
      description,
      programType,
      images: {
        'Poster Art': {
          url,
          width: 1000,
          height: 1500,
        },
      },
      releaseYear,
    };

    fetch('https://amhf-movies.herokuapp.com/movies/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    }).then(() => {
      history.push('/'); // redirect to home page
    });
  };

  return (
    <div className="create">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Movie title:
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
          />
        </label>
        <label htmlFor="ptype">
          Program Type
          <select
            value={programType}
            onChange={(e) => setProgramType(e.target.value)}
            name="ptype"
          >
            <option value="movie">movie</option>
            <option value="series">series</option>
          </select>
        </label>
        <label htmlFor="rdate">
          Release Year
          <input
            className="release-input"
            type="number"
            required
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            max="2022"
            name="rdate"
          />
        </label>
        <label htmlFor="urlL">
          Image URL
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="urlL"
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default Create;
