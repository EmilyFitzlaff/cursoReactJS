import './styles.css';

export default function PostCard({ cover, title, body, id }) {
    return (
        <div className='post'>
            <img src={cover} alt={title} title={title} />
            <div key={id} className='post-content'>
                <h1>{id} - {title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}
 