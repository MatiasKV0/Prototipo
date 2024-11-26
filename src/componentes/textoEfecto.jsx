import {useTypewriter,Cursor} from 'react-simple-typewriter';

function Texto({palabras}) {
  const [text] = useTypewriter({
  words: palabras,
  loop: true,
  typeSpeed: 170,
  deleteSpeed: 150,
});
  
    return (
        <span>
          {text}
          <Cursor />
        </span>
    );
  }

export default Texto