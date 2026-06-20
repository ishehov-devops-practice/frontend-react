function App() {
  // Node REST API
  const fetchIncidents = async () => {
    try {
      const response = await fetch('/api/node/incidents');

      const json = await response.json();

      console.log('Node Incidents Data:', json.data);
    } catch (err) {
      console.error('Failed to fetch from Node API', err);
    }
  };

  // Go GraphQL API
  const fetchMetrics = async () => {
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ status }' }),
      });

      const json = await response.json();

      console.log('Go GraphQL Metrics Data:', json.data);
    } catch (err) {
      console.error('Failed to fetch from Go API', err);
    }
  };

  fetchIncidents();
  fetchMetrics();

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>DevOps Sandbox Frontend</h1>
      <p>Status: Static assets successfully compiled and served via TS.</p>
      <p>Test string to test automated deployment</p>
    </div>
  );
}

export default App;
