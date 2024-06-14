import { useState, useCallback, useEffect ,useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [Characters, SetCharacters] = useState(true);

  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
 

  const passwordGenerator = useCallback(() => {
    
    let pass = "";
    let str = "";

    if (numberAllowed) str += "0123456789";
    if (Characters) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, Characters, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)[password]

  })
useEffect(()=>{passwordGenerator()

}, [length, numberAllowed,Characters , passwordGenerator])

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-lg rounded-xl px-7 py-6  text-gray-700  'style={{ backgroundColor: '#131D22' }}>
      <h1 className='text-gray-300 text-center font-tiny5-regular text-2xl m-2 '>Password Generator</h1>
      <div className='flex  rounded-lg overflow-hidden  '>
      <input 
      type='text' 
      value={password} 
      className='outline-none rounded-xl w-full py-1 px-3 m-2 bg-gray-300 '
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
        <button  onClick ={copyPasswordToClipboard} className='outline-none rounded-xl shadow-colored text-white  px-3 py-0.5 m-2 shrink-0'style={{ backgroundColor: '#59cd90' }}>copy</button></div>
    
    <div className='flex test-sm gap-x-2 'text-style={{ backgroundColor: '#59cd90' }}>
      <div className='flex   accent-custom-green    items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={12}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}}
        />
        <label className='text-gray-300' > {length}</label>
      </div>
      
      
      
      
      <div className='flex accent-custom-green items-center gap-x-1 '>
      <input 
      className='m-0.5'
      type='checkbox' 
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={()=>{
        setNumberAllowed((prev)=> !prev);
      }}/><label className='text-gray-300'>Numbers</label>
      </div>
      
      
      
      <div className ='flex  accent-custom-green items-center gap-x-1'>
      <input 
      className='m-0.5 '
      type='checkbox' 
      defaultChecked={Characters}
      id="characterInput"
      onChange={()=>{
        SetCharacters((prev)=> !prev);
      }}/><label className='text-gray-300'>Characters</label>
      </div>
      
    </div>
      </div>
    </>
  );
}

export default App;
