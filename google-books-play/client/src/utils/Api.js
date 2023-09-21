// export const googleBooks = async () => {
//     console.log('hello')
//     try {
//       const getBook = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    
//     const data = await getBook.json();
//     console.log(data);
//     }
  
//   catch (error) {
//     console.log(error);
//   }}
  
export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  };
