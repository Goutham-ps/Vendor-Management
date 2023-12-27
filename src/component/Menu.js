import React, { useState } from 'react';
import { MenuList } from './data/data';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
  };

  const addToCart = (menuItem) => {
    setCart([...cart, menuItem]); // Add selected menu item to the cart
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: '350px', display: 'flex', m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '300px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="body2">Price: ₹{menu.price}</Typography>
                {/* Button to add item to the cart */}
                <Button onClick={() => addToCart(menu)}>Add to Cart</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>  
      
      
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;


// import React, { useState } from 'react';
// import { MenuList } from './data/data';
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
// } from '@mui/material';


// const Menu = () => {
//   const [cart, setCart] = useState([]);
  
//     const addToCart = (menuItem) => {
//       setCart([...cart, menuItem]); // Add selected menu item to the cart
//     };
  
//   return (
//     <div>
//       <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {MenuList.map((menu, index) => (
//           <Card key={index} sx={{ maxWidth: '350px', display: 'flex', m: 2 }}>
//             <CardActionArea>
//               <CardMedia
//                 sx={{ minHeight: '300px' }}
//                 component={'img'}
//                 src={menu.image}
//                 alt={menu.name}
//               />
//               <CardContent>
//                 <Typography variant="h5" gutterBottom component={'div'}>
//                   {menu.name}
//                 </Typography>
//                 <Typography variant="body2">{menu.description}</Typography>
//                 <Typography variant="body2">Price: ₹{menu.price}</Typography>
//                 {/* Button to add item to the cart */}
//                 <Button onClick={() => addToCart(menu)}>Add to Cart</Button>
//                 <Menu addToCart={addToCart} />
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         ))}
//       </Box>
//     </div>
//   );
// };

// export default Menu;
