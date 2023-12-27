import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const AdminDashboard = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [menuItems, setMenuItems] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {menuItems.map((menuItem, index) => (
          <Card key={index} sx={{ maxWidth: "350px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={menuItem.image}
                alt={menuItem.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menuItem.name}
                </Typography>
                <Typography variant="body2">{menuItem.description}</Typography>
                <Typography variant="body2">
                  Price: ₹{menuItem.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Form to add new menu item */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <form>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            label="Image URL"
            variant="outlined"
            name="image"
            value={newItem.image}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddItem}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          >
            Add Item
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AdminDashboard;
