import './styles.css';

export default function InputSearch({ onChange, value }) {
    return (
        <input 
          type='search' 
          onChange={onChange} 
          value={value}
          className='text-input'
          placeholder='Pesquise'
        />
    )
}