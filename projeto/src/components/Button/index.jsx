import './styles.css';

export default function Button({ descricao, onClick, disabled}) {
    return (
        <button onClick={onClick} className='button' disabled={disabled}>
            { descricao }
        </button>
    )
}