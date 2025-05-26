import './Button.css';

const Button = ({text, type, onClick}) => {
    return <Button onClick={onClick} className='Button'> {text} </Button>;
};

export default Button;