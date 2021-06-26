import React,{useState} from 'react'
import { useGlobalContext } from './context'
import {FiChevronUp} from 'react-icons/fi'
import {FiChevronDown} from 'react-icons/fi'
import reducer from './reducer'

const CartItem = () => {
  const { cart,removeItem,countIncc,countDecc } = useGlobalContext()
 
  return (
    <article>
     {
        cart.map((item)=>{
          const {id,title,price,img,amount} = item;
          return (
            <div key={id} className="item-container">

              <div className="img-container">
                <img src={img} alt="image"/>
              </div>

              <div className="img-info">
                <h4>{title}</h4>
                <h4>${price}</h4>
                <button className="remove-btn" onClick={()=>removeItem(id)}>remove</button>
              </div>  

              <div className="incc-decc">
                <button className='amount-btn' onClick={()=>countIncc(id)}>
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                  </svg> */}
                  <FiChevronUp/>
                </button>
       
                <p className='amount'>{amount}</p>
       
                <button className='amount-btn' onClick={()=>countDecc(id)}>
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg> */}
                  <FiChevronDown/>
                </button> 
              </div>

            </div>
          );
        })
     }
    </article>
  )
























  // return (
  //   <article className='cart-item'>
  //     <img src={img} alt={title} />
  //     <div>
  //       <h4>{title}</h4>
  //       <h4 className='item-price'>${price}</h4>
  //       {/* remove button */}
  //       <button
  //         className='remove-btn'
  //         onClick={() => console.log('remove item')}
  //       >
  //         remove
  //       </button>
  //     </div>
  //     <div>
  //       {/* increase amount */}
  //       <button className='amount-btn' onClick={() => console.log('increase')}>
  //         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
  //           <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
  //         </svg>
  //       </button>
  //       {/* amount */}
  //       <p className='amount'>{amount}</p>
  //       {/* decrease amount */}
  //       <button className='amount-btn' onClick={() => console.log('decrease')}>
  //         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
  //           <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
  //         </svg>
  //       </button>
  //     </div>
  //   </article>
  // )

}

export default CartItem
