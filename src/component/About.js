import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AboutUs = () => {
  const customTextStyle = {
    fontFamily: 'Chiller',
    fontSize: '24px',
    color: 'black',
    textAlign: 'justify',
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Typography variant="h2" gutterBottom style={{ fontFamily: 'Chiller', fontSize: '36px', color: 'white',backgroundColor:'black' }}>
        About Us
      </Typography>
      <Box my={3}>
        <Typography variant="body1" style={{ fontFamily: 'Chiller', fontSize: '30px', color: 'white' ,backgroundColor:'black'}}>
          Welcome to our restaurant! MELEDOMIA
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom style={{ fontFamily: 'Chiller', fontSize: '40px'}}>
                Company Information
              </Typography>
              <Typography variant="body2" style={customTextStyle}>
              As the market leader in enterprise application software, we’re helping companies of all sizes and in all industries run better by redefining ERP and creating networks of intelligent enterprises that provide transparency, resiliency, and sustainability across supply chains. Our end-to-end suite of applications and services enables our customers to operate profitably, adapt continuously, and make a difference worldwide.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom style={{ fontFamily: 'Chiller', fontSize: '40px'}}>
                Security & Trust
              </Typography>
              <Typography variant="body2" style={customTextStyle}>
              SAP fosters trust through responsible actions in the context of security, privacy, compliance and transparency. We build secure-by-design solutions, help you meet regulatory and compliance requirements, collect and process personal data lawfully, and share information about our processes with anyone who wants to understand how we protect their data.
              </Typography>
              {/* <Typography variant="body2" style={customTextStyle}>
              Customer Experience: Focus on providing exceptional customer service and ensuring a pleasant dining experience for guests. Mention efforts to create a welcoming atmosphere and personalized service.
              </Typography>
              <Typography variant="body2" style={customTextStyle}>
              Continuous Improvement: Express a commitment to continuous improvement, whether it's through menu innovation, service enhancements, or working on to the customer feedback and improve the restaurant management system in monthly basis.
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
        {/* Add more sections as needed */}
      </Grid>
    </Container>
  );
};

export default AboutUs;
