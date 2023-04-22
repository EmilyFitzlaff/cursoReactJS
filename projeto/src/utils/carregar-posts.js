export const carregarPosts = async() => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts/');

    const fotosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
   
    const [posts, fotos] = await Promise.all([postResponse, fotosResponse]);

    const postsJson = await posts.json();

    const fotosJson = await fotos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: fotosJson[index].url }
    });

    return postsAndPhotos;
}