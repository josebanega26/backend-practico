const db = {
  user: [
    { name: 'test 1', id: 1 },
    { name: 'test 2', id: 2 },
  ],
};

const list = (table) => {
  return db[table];
};
const get = (table, id) => {
  const collection = db[table];
  return collection.find((item) => item.id === id);
};
const upsert = (table, data) => {
  db[table].push(data);
};
const remove = (table, id) => {
  return true;
  //   const collection = db[table];
  //   const newCollection = collection.filter((item) => item.id !== id);
};

module.exports = {
  list,
  get,
  upsert,
  remove,
};
