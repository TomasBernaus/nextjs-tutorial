const { db } = require('@vercel/postgres');

async function dropTables() {
  const client = await db.connect();

  try {
    await client.query('DROP TABLE IF EXISTS revenue, invoices, customers, users CASCADE;');
    console.log('Tables dropped successfully.');
  } catch (error) {
    console.error('Error dropping tables:', error);
    throw error;
  } finally {
    await client.end();
  }
}

dropTables().catch((err) => {
  console.error('An error occurred while dropping tables:', err);
});
