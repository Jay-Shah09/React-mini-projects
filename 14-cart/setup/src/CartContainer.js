import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const {cart,total,removeAll} = useGlobalContext();

  if(cart.length===0){
    return (
      <div>
        <h2 className="title">your bag</h2>
        <h4 style={{textAlign:"center",marginTop:"60px"}}>your bag is currently empty</h4>
      </div>
    )
  }


  return (
    <section>
      <div className="cart">
        <h2 className="title">your bag</h2>
        <div className="items-container">
          {
            <CartItem/>
          }
        </div>
        <div className="footer"></div>
        <div className="final">
          <p>total</p>
          <p className="price">${total}</p>
        </div>
        <button className="clear-cart" onClick={()=>removeAll()}>clear cart</button>
        <br/>

      </div>
    </section>
  )


























  // if (cart.length === 0) {
  //   return (
  //     <section className='cart'>
  //       {/* cart header */}
  //       <header>
  //         <h2>your bag</h2>
  //         <h4 className='empty-cart'>is currently empty</h4>
  //       </header>
  //     </section>
  //   )
  // }
  // return (
  //   <section className='cart'>
  //     {/* cart header */}
  //     <header>
  //       <h2>your bag</h2>
  //     </header>
  //     {/* cart items */}
  //     <div>
  //       {cart.map((item) => {
  //         return <CartItem key={item.id} {...item} />
  //       })}
  //     </div>
  //     {/* cart footer */}
  //     <footer>
  //       <hr />
  //       <div className='cart-total'>
  //         <h4>
  //           total <span>$0.00</span>
  //         </h4>
  //       </div>
  //       <button
  //         className='btn clear-btn'
  //         onClick={() => console.log('clear cart')}
  //       >
  //         clear cart
  //       </button>
  //     </footer>
  //   </section>
  // )
}

export default CartContainer
