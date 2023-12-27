// import React from 'react';

// const Cart = ({ cartItems }) => {
//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems && cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>
//               {item.name} - ₹{item.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';

const CartItem = ({ item }) => {
  return (
    <li>
      {item.name} - ₹{item.price}
    </li>
  );
};

export default CartItem;
