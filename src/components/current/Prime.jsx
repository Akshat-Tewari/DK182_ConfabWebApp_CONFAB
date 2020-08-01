import React, {Component} from 'react';
import '../../App.css';
import premium from '../../images/premium.png';
import add from '../../images/add.png';

class Prime extends Component {


	render(){

		return(
			<div className="flex" style={{marginTop:"0vh" , marginBottom:'0vh'}}>
          
          <img src={premium} alt="" style={{width:'50vw'}}/>
          
          <div className="" style={{padding:"0vh 3vw"  , width:'45vw'}}>
            
		      	
            <div className="border-light pv4">
              
             <h2 className="f6 ttu mid-gray  ma3 ml5"><span className="f3 ttu fw8 black">Auto Order</span><br/>hassle free delivery of your regular orders <br/></h2>
              
            <div className="flex">
            <select name="mode of payment" id="payemnt" className="ma3 ml5 w5 no ph2 " style={{ width:'300px',height:'50px'}}>
              <option value="volvo">Rice</option>
              <option value="saab">Cauli Flower</option>
              <option value="opel">Moong Daal</option>
              <option value="audi">Cabbage</option>
              <option value="audi">Lady Finger</option>
              <option value="audi">Tomato</option>
              <option value="audi">Onion</option>
            </select>

              <input type="number"  min="10" max="100" step="1" value="20" className="ba ma3 b--near-black ph2 " style={{ width:'70px',height:'50px'}}/>

            </div>
             

            <div className="flex justify-end mv1 mh5">
              <img src={add} alt="" style={{width:'24px' , height:'24px'}}/>
				      <h3 className="f7 ml2 red ttu">ADD to list </h3>
            </div>
              

            <div className="flex  mv3 mh5">
              <h3 className="f6 mt4 black ttu">Duration (in days) </h3>
              <input type="number"  min="10" max="100" step="1" value="7" className="ba ma3 b--near-black ph2 " style={{ width:'70px',height:'50px'}}/>

            </div>
           
            <select name="mode of payment" id="payemnt" className="mb2 mt3 ml5 w5 no ph2 " style={{ width:'300px',height:'50px'}}>
              <option value="volvo">Cash On Delivery</option>
              <option value="saab">Credit Card</option>
              <option value="opel">Debit Card</option>
              <option value="audi">Net Banking</option>
            </select>
            <br/>
            <button className="bg-black white mv1 ml5 bn f6  tc no" style={{ width:'300px', height:'50px'}}>Checkout</button>
      
            <h3 className="f7 fw5 ml5 gray" style={{}}>Extra 5% OFF on HDFC debit and credit card</h3>
          </div>
          </div>  
			</div>
		);
	}
}


export default Prime;
