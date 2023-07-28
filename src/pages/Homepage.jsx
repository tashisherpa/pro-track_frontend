import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Typewriter from "../components/Typewriter/Typewriter";
import dashboard from "../images/dashboard.png";
import helprequest from "../images/helprequest.png";
import protrack from "../images/protrack.gif";
import lectures from "../images/lectures.png";

function Homepage() {
  return (
    // <div className=" bg-gray-800 flex-col  items-center p-8 pt-20">
    //   <div>
    //     <NavBar />
    //   </div>
    //   <div className="flex  bg-gray-800 h-screen flex-col items-center p-8">

    // <h1 className="text-left font-serif text-white text-4xl font-bold my-8">
    // <Typewriter text = "The help you need to stay on track" delay = {100}/>
    // </h1>
    //   </div>

    //   <div className="space-y-6 text-white ">
    //   <img

    //       src={dashboard}
    //       alt="logo"
    //       className="h-100 w-200"
    //     />
    //     </div>

    //   <footer className="bg-gray-800 sticky py-4 m-10 text-gray-400 text-center">
    //     <div className="container mx-auto">
    //       <p className="text-sm">
    //         © 2023 All rights reserved. Design, Code, and Ship!
    //       </p>
    //     </div>
    //   </footer>
    // </div>
    <div className="bg-gray-700 flex-col items-center p-8 pt-20">
      <NavBar />
      <div className="flex flex-col md:flex-row bg-gray-700 items-center p-8">
        <div className="bg-gray-700 md:w-1/2 p-4">
          <img src={protrack} alt="logo" className="h-100 w-200" />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-left font-serif text-white text-4xl font-bold my-8">
            <Typewriter text="The help you need to stay on track" delay={20} />
          </h1>
          <div className="space-y-6 text-white max-w-3xl">
            <Typewriter
              text="Pro-Track is a cutting-edge educational application designed to bridge the gap between students and teachers, fostering a seamless and interactive learning experience. With a focus on efficiency and ease of use, Pro-Track empowers educational institutions to revolutionize their coursework delivery and communication methods"
              delay={30}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-gray-600 h-screen items-center p-8">
  <div className="relative  md:w-1/2 p-4">
    {/* <img src={dashboard} alt="logo"  className="absolute top-1/2 left-1/2    h-100 w-1500 " /> */}
   <Typewriter text = "jhgg hghg hgf h fgdgfdhjgfh gjkjhgk jhf hf df dhgf gfhgfhjgf hgf hg fg ft fg fghfghgfhgf hgjf hjf  f " delay = {30}/>
    <img
      src={lectures}
      alt="Image 3"
      className="absolute  top-1/2 left-1/2 transform -translate-x-2/20 -translate-y-5/4 h-100 w-1500 "
    />
    
  </div>
  <div className="md:w-1/2 p-4">
    <img src={helprequest} alt="Second Image" className="w-full h-full" />
  </div>
</div>

<div> 
    <button>
         
    </button>

    <button>

    </button>
</div>


      <footer className="bg-gray-800 sticky py-4 m-10 text-gray-400 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            © 2023 All rights reserved. Design, Code, and Ship!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Album() {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <CameraIcon sx={{ mr: 2 }} />
//           <Typography variant="h6" color="inherit" noWrap>
//             Album layout
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//               Album layout
//             </Typography>
//             <Typography variant="h5" align="center" color="text.secondary" paragraph>
//               Something short and leading about the collection below—its contents,
//               the creator, etc. Make it short and sweet, but not too short so folks
//               don&apos;t simply skip over it entirely.
//             </Typography>
//             <Stack
//               sx={{ pt: 4 }}
//               direction="row"
//               spacing={2}
//               justifyContent="center"
//             >
//               <Button variant="contained">Main call to action</Button>
//               <Button variant="outlined">Secondary action</Button>
//             </Stack>
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="div"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random?wallpapers"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//   );
//}
