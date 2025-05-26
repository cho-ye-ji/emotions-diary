import './Button.css';

const Button = ({text, type, onClick}) => {
    return <button onClick={onClick} className='Button'> {text} </button>;
};

export default Button;