import React, { useEffect, useState } from 'react';
import CookieCard from './CookieCard';
import { getRecommendations } from '../services/recommendationService';

function RecommendationList() {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const recommendations = await getRecommendations();
      setCookies(recommendations);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Recommended Cookies</h2>
      <div>
        {cookies.map(cookie => (
          <CookieCard key={cookie._id} cookie={cookie} />
        ))}
      </div>
    </div>
  );
}

export default RecommendationList;