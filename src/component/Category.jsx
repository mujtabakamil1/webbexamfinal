// Rocket.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataByCategory } from '../redux/api';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';

// Import useNavigate to enable navigation
const Rocket = () => {
  // Initialize useDispatch and useNavigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract data from Redux store
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const data = useSelector((state) => state.data.data);

  // Define categories for data fetching
  const categories = [
    'smileys-and-people',
    'animals-and-nature',
    'food-and-drink',
    'travel-and-places',
    'activities',
    'objects',
    'symbols',
    'flags',
  ];

  // Fetch data for the first category initially
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDataByCategory(categories[0]));
    }
  }, [status, dispatch, categories]);

  // Handle button click and trigger data fetching
  const handleButtonClick = (category) => {
    dispatch(fetchDataByCategory(category));
    console.log(data);

    // Use navigate for navigation instead of history.push
    navigate('/groups');
  };

  // Render component
  return (
    <div className="container mt-4">
      {/* Display loading message when data is being fetched */}
      {status === 'loading' && <p>Loading data...</p>}
      
      {/* Display error message when data fetching fails */}
      {status === 'failed' && <p>Error: {error}</p>}

      {/* Render buttons for each category when data fetching is successful */}
      {status === 'succeeded' && (
        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-3">
              {/* Use Link for navigation to the 'Group' page */}
              <Link to="/Group">
                {/* Use Bootstrap Button for styling */}
                <Button variant="pink" block className="custom-btn" onClick={() => handleButtonClick(category)}>
                  {category}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

// Export Rocket component as the default export
export default Rocket;
