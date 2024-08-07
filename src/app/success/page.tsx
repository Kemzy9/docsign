//success

'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const Success = () => {
  const [portalLoading, setPortalLoading] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState<{
    startDate: string;
    endDate: string;
  } | null>(null);

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const sessionId = urlSearchParams.get('session_id');
  
        if (sessionId) {
          const response = await axios.get(`/api/get-subscription?sessionId=${sessionId}`);
          setSubscriptionData({
            startDate: response.data.startDate.toISOString().slice(0, 10),
            endDate: response.data.endDate.toISOString().slice(0, 10),
          });
        }
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      }
    };
  
    fetchSubscriptionData();
  }, []);

  const handleManageBilling = async () => {
    console.log('Manage Billing button clicked');
    try {
      setPortalLoading(true);
      const response = await axios.post('/api/create-customer-portal-session', {
        customerId: '{{CUSTOMER_ID}}', // Replace with actual customer ID
        returnUrl: ` https://billing.stripe.com/p/login/test_00gcQlcPDc8j1TqfYY`, // Replace with actual return URL
      });
      console.log('Response from API:', response.data);
      window.location.href = response.data.url; // Redirect to customer portal
    } catch (error) {
      console.error('Error creating customer portal session:', error);
      // Handle error
    } finally {
      setPortalLoading(false);
    }
  };
  
  return (
    <div>
      <h1>Success</h1>
      {subscriptionData && (
        <div>
          <p>Your plan starts on: {subscriptionData.startDate}</p>
          <p>Your plan expires on: {subscriptionData.endDate}</p>
        </div>
      )}
      <button onClick={handleManageBilling} disabled={portalLoading}>
        {portalLoading ? 'Loading...' : 'Manage Billing'}
      </button>
    </div>
  );
};

export default Success;
