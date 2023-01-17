import logo from './logo.svg';
import './App.css';

const img1 = "https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000"
const img2 = "https://media.istockphoto.com/id/688548038/vector/black-x-mark-icon-cross-symbol.jpg?s=170667a&w=0&k=20&c=sA5U1qZFK7FxYe97R-m7MDDv1rO0eBrAZD1_1-DIiLw="
const data = ["Unlimited Public Projects","Community Access",
"Unlimited Private Projects","Dedicated Phone Support","Monthly Status Reports"]

function SingleCard(props){
    return(
      <div className='fisrtCard'>
          <p className='head1 opacity'>{props.head1}</p>
          <p className='head1'><span id='head2'>${props.val}</span>/month</p>
          <hr/>
          <img src= {props.img1}></img>
          <span style={{fontWeight: props.bold}} className='gap'>{props.data1}</span><br/><br/>
          <img src= {props.img2}></img>
          <span className='gap'>{props.data2}</span><br/><br/>
          <img src= {props.img3}></img>
          <span className='gap'>{data[0]}</span><br/><br/>
          <img src= {props.img4}></img>
          <span className='gap'>{data[1]}</span><br/><br/>
          <img style={{opacity:props.opacity1}} src= {props.img5}></img>
          <span style={{opacity:props.opacity1}} className='gap'>{data[2]}</span><br/><br/>
          <img style={{opacity:props.opacity2}} src= {props.img6}></img>
          <span style={{opacity:props.opacity2}} className='gap'>{data[3]}</span><br/><br/>
          <img style={{opacity:props.opacity3}} src= {props.img7}></img>
          <span style={{opacity:props.opacity3}} className='gap'>{props.data3}</span><br/><br/>
          <img style={{opacity:props.opacity4}} src= {props.img8}></img>
          <span style={{opacity:props.opacity4}} className='gap'>{data[4]}</span><br/><br/>
          <button type="button">BUTTON</button>
      </div>
    )
}

 function App() {
  return (
    <div className="App">
      <SingleCard head1="FREE" val="0" data1="Single User" data2="5GB Storage" data3="Free Subdomain" 
      img1={img1} img2={img1} img3={img1} img4={img1} img5={img2} img6={img2} img7={img2} img8={img2}
      opacity1="0.5" opacity2="0.5" opacity3="0.5" opacity4="0.5"/>

      <SingleCard head1="PLUS" val="9" data1="5 Users" data2="50GB Storage"  data3="Free Subdomain" 
      img1={img1} img2={img1} img3={img1} img4={img1} img5={img1} img6={img1} img7={img1} img8={img2}
      opacity1="1.0" opacity2="1.0" opacity3="1.0" opacity4="0.5" bold="bolder"/>

      <SingleCard head1="PRO" val="49" data1="Unlimited Users" data2="150GB Storage" data3="Unlimited Free Subdomains" 
      img1={img1} img2={img1} img3={img1} img4={img1} img5={img1} img6={img1} img7={img1} img8={img1}
      opacity1="1.0" opacity2="1.0" opacity3="1.0" opacity4="1.0" bold="bolder"/>
    </div>
  );
}

export default App






