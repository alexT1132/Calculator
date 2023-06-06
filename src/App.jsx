import { useState } from 'react'
import './App.css'
import Button from './components/button';
const buttonsClasses = "btn btn-primary w-75";

function App () {
  //let number1= 0;
  

const [operator, setOperator] = useState('');
const [number1, setNumber1] = useState('');
const [clearScreen, setClearScreen] = useState(false);
const [screen, setScreen] = useState('0');



const handleButtonClick = (e) => {
  const {value} = e.target;
  if (value === '.'){
   // if  (screen.indexOf(value) !== -1) return;   esta funcion es otra forma de que el punto solo aprezca una vez 
    if  (screen.includes('.')) return;

  }
  //const {value} = e.target;  esta seria otra forma de escribir la funcion anteriro 
  if (value === 'C'){
    setScreen('0');
    return;
  }
  //console.log(e);
//!===============================================================================
  //console.log({number1});

if (clearScreen){
  setScreen(value);
  //console.log('cambia el screen');
  setScreen(value);
  setClearScreen(false);
  return;
}
 if (screen === '0' && value !== '.'){ // && value !== '.' esta funcion es para que el cero se mantenga antes del puento, cuando este se predione 
   setScreen(value)
  return;
  }else{
  setScreen(`${screen}${value}`) 

 } 
 
}
const handleDelButtonClick = () =>{ /* esta funcion sera para eliminar la un numero */
if (screen.length === 1){
  setScreen('0');
  return;
}else{
  
setScreen(screen.slice(0, -1));
}

}
const handleOperationButtonClick =(e) =>{
setOperator(e.target.value);
setNumber1(screen);
setClearScreen(true);
}

const handleEqualButtonClick = () => {
  const a= +number1;
  const b= +screen;
  switch (operator){
    case '+':
      setScreen((a + b).toString());
      break;
      case '-':
      setScreen((a - b).toString());
      break;
      case '*':
      setScreen((a * b).toString());
      break;
      case '/':
      setScreen((a / b).toString());
      break;
      default:
        break;
  }
}


const buttonsInfo = [
  [{
    classes: buttonsClasses,
    value: 'C',
    handleClick: handleOperationButtonClick,
    style: {},
    rows:1
  },
  {
    classes: buttonsClasses,
    value: '/',
    handleClick: handleOperationButtonClick,
    style: {},
    rows:1
  },
  {
    classes: buttonsClasses,
    value: '*',
    handleClick: handleOperationButtonClick,
    style: {},
    rows:1
  },

  {
    classes: buttonsClasses,
    value:'-',
    handleClick: handleOperationButtonClick,
    style:{},
    rows:1
  }
],
[
  {
    classes: buttonsClasses,
    value:'7',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'8',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'9',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'+',
    handleClick: handleOperationButtonClick,
    style:{height:"80px"},
    rows:2
  },
],
[
  {
    classes: buttonsClasses,
    value:'4',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'5',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'6',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },

],
[
  {
    classes: buttonsClasses,
    value:'1',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'2',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'3',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'=',
    handleClick: handleEqualButtonClick,
    style:{height: "80px"},
    rows:2
  },

],
[
  {
    classes: buttonsClasses,
    value:'DEL',
    handleClick: handleDelButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'0',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
  {
    classes: buttonsClasses,
    value:'.',
    handleClick: handleButtonClick,
    style:{},
    rows:1
  },
],
]


/*const handleButtonClick8 = () => {
  if (screen === '0'){
    
    setScreen(8)

  }else{
    setScreen(`${screen}8`) 

  } 

}
const handleButtonClick7 = () => {
  if (screen === '0'){
    
    setScreen(7)

  }else{
    setScreen(`${screen}7`) 

  } 

}*/


  return (
    <div className='app'>
    <h1 > Calculator</h1>
    <table >

      {/*first row*/}

     <tr>
      <td colSpan={4} style={{
        border:"1px solid black",
        textAlign: "end"}}> 
      <h2>{screen}</h2>
      
      </td>
      
      </tr>  
      {/*Second row*/}
     {
      buttonsInfo.map((row)=>{
        return(
          <tr>
            {
              row.map((cell)=>{
                return(
                  <td rowSpan={cell.rows}>
                    <Button
                    classes={cell.classes}
                    value={cell.value}
                    handleClick={cell.handleClick}
                    style={cell.style}
                    />


                  </td>
                )
              })
            }
          </tr>
        )
      })
     }         
    </table>
    </div>
  )
}

export default App