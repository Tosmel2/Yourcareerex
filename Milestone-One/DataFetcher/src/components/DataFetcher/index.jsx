import { useState, useEffect } from 'react';
import axios from 'axios';
import ListComponent from '../ListComponent';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="data-container">
      <h1>API Data List</h1>
      <ListComponent 
        items={data} 
        renderItem={(item) => (
          <div className="list-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        )}
      />
    </div>
  );
};

export default DataFetcher;