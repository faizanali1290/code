//?add this extension on vs code "Better Comments"

// ! what is indexDB
// IndexedDB is a web browser-based database system for storing and managing structured data. It provides a way for web applications to store large amounts of data locally in the user's browser, allowing for offline access and improved performance.

// ! Uses Of IndexDB
//* Offline Data Storage
// Caching and Performance Optimization
// Progressive Web Applications (PWAs)

// ! Example of obtaining the IndexedDB object
// const DB=window.indexedDB || window.webkitIndexDB || window.mozIndexDB||window.shimIndexDB||window.msIndexDB
// console.log(DB)

//! what is open

// open method is used to establish a connection to a specific database or to open an existing database connection. const request = indexedDB.open(name, version);

//! what is upgradeneeded
// upgradeneeded is an event in IndexedDB triggered when opening a database with a higher version number or creating a new database.

// ?   if(!ObjectStore.objectStoreNames.contains("db-v5")){} this is used to the collection is contain are not

//! what is createObjectStore

// In IndexedDB, the createObjectStore method is used to create an object store (also known as a collection) within a database. An object store is where you store and retrieve data in IndexedDB.
// ? syntax const objectStore = db.createObjectStore(storeName, options({ keyPath: 'id' )); { keyPath: 'id' }. The keyPath property indicates which property of the objects stored in the object store will serve as the key. the key path is similar to mongoDB _id

//! what is transaction

//if we have want to run querry then run a one   when we perform any operation then can one trasition and the querry can completed the trassation can be completed and the data base can be close


/* //?const tx= db.transaction("user-data","readOnly")
const userData=tx.objectStore('collectionName') here the userData like model in MongoDB 

*/
