import './styles.css';
import { Component } from 'react';
import { carregarPosts } from '../../utils/carregar-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';

class Home extends Component {
  state = {
    posts : [],
    allPosts : [],
    page : 0,
    postsPorPagina : 100
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

  render() {  
    const { posts, page, postsPorPagina, allPosts } = this.state;
    const desabilitarBotao = page + postsPorPagina >= allPosts.length;
   
    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Button
            descricao="Carregar mais posts"
            onClick={this.carregarMaisPosts}
            disabled={desabilitarBotao}
          />
        </div>        
      </section>
    )
  }
}

export default Home;
