import './styles.css';
import { Component } from 'react';
import { carregarPosts } from '../../utils/carregar-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import InputSearch from '../../components/InputSearch';

class Home extends Component {
  state = {
    posts : [],
    allPosts : [],
    page : 0,
    postsPorPagina : 5,
    searchValue : '',
  };

  // para montar o componente
  componentDidMount() {   
    this.carregarPosts();
  }

  carregarPosts = async() => {
    const { page, postsPorPagina } = this.state;

    const postsAndPhotos = await carregarPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPorPagina),
      allPosts: postsAndPhotos
    });
  }

  carregarMaisPosts = async() => {
    const {
      page,
      postsPorPagina,
      allPosts,
      posts
    } = this.state;

    const proximaPagina = page + postsPorPagina;

    const proximoPosts = allPosts.slice(proximaPagina, proximaPagina + postsPorPagina);

    posts.push(...proximoPosts);

    this.setState({ posts, page: proximaPagina });
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value });
  }

  render() {  
    const { posts, page, postsPorPagina, allPosts, searchValue } = this.state;

    const desabilitarBotao = page + postsPorPagina >= allPosts.length;

    const postsFiltrados = !!searchValue 
      ? allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      }) : posts;
   
    return (
      <section className='container'>
        
        <div className='search-container'>
          <InputSearch 
            onChange={this.handleChange}
            value={searchValue}
          />
        </div>        

        {postsFiltrados.length > 0 && (
          <Posts posts={postsFiltrados} />
        )}

        {postsFiltrados.length === 0 && (
          <p>Sem dados para exibir!</p>
        )}        

        <div className='button-container'>
          {!searchValue && (
            <Button
              descricao="Carregar mais posts"
              onClick={this.carregarMaisPosts}
              disabled={desabilitarBotao}
            />
          )}          
        </div>        
      </section>
    )
  }
}

export default Home;
