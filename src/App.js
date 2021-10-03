// import logo from './logo.svg';
// import './App.css';
import { Button, Box, Grommet, Image, Anchor, Paragraph, ResponsiveContext, Text } from 'grommet';
import { CaretDown, CaretUp, Directions } from 'grommet-icons';
import React from 'react';
// import { Router } from "react-router";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const theme = {
  global: {
    font: {family: 'Inconsolata',
           size: '18px',
           height: '20px'
      }
  }
};


const MetamaskConnectButton = props => (
  <Button hoverIndicator="red" onClick={() => {}} {...props}>
    {({ disabled, hover, focus }) => (
      <Box pad="small" direction="row" align="center" gap="small">
   
        {focus ? (
          <Text>connecting metamask..</Text>
        ) : (
          <>
          <Image src="https://i.imgur.com/zcBpfGM.png"
                margin="4px" width="32x" height="32px"/>
         <Text margin="8px" color={disabled}>connect</Text>
        </>
        )}
      </Box>
    )}
  </Button>
);

const DiscordButton = props => (
  <Button hoverIndicator="#2C2F33" onClick={() => {}} {...props}>
    {({ disabled, hover, focus }) => (
      <Box pad="small" direction="row" align="center" gap="small">
   
        {focus ? (
          <Text>opening discord..</Text>
        ) : (
          <>
          <Image src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
                 width="42x" height="42px"/>
         <Text margin="6px" color={disabled}>join discord</Text>
        </>
        )}
      </Box>
    )}
  </Button>
);


const FooterSection = () => (
  <>
  <Box direction="column">
  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad='small'
    gap='small'

    //flex={true}
    background='black'>

{/* 
    <Anchor href="#"
                target="_blank"
                color="white">paper</Anchor>|
  */}
    <Anchor href="#"
                target="_blank"
                color="white">manifest0</Anchor>
  </Box>

  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad='small'
    gap='small'

    //flex={true}
    background='black'>
    <Anchor href="https://github.com/stateful-art"
            target="_blank"
            color="white">code </Anchor> | 

    <Anchor href="https://miro.com/app/board/o9J_l3gy0-U=/?invite_link_id=475666759031"
            target="_blank"
            color="white">workspace</Anchor>
 
    

     
  </Box>


  <Box align="center" justify="center" margin="30p">
  <Directions color="red"/>
  <Text size="small"> © all rights left </Text>
  </Box>
  </Box>
  </>
  
  );
  

function App() {
  return (
    <Grommet theme={theme}>
       
     <Box align="center" background="black" justify="end" direction="column">
        <Box direction="column" align="center" background="black">


          <ResponsiveContext.Consumer>
          {size =>
            size === 'small' ? (
              <Image src="./stateful-art-top.png" 
              width="262px" 
              height="150px"
              margin="20px">
            </Image>
            ) : (
              <Image src="./stateful-art-top.png" 
              width="525px" 
              height="300px"
              margin="60px">
      </Image>
            )
          }
        </ResponsiveContext.Consumer>

  
        <Box align="center" alignContent="center" justify="center">
          <Paragraph>
              a 
          </Paragraph> 
          <Paragraph>
             metaverse   
          </Paragraph> 
          <Paragraph>
           for the future.
          </Paragraph> 
          
          <Box justify="center" alignContent="center"> 
             <CaretDown color="green"/>
          </Box>

          <Box justify="center" alignContent="center" align> 
          <Paragraph>
              stateful.art aims to create a context, <br></br>
              where cities have "multi-lateral autonomy" <br></br>
              and empowerment
              
              for a decentralized,  <br></br>
              unstoppable planetary solidarity.
          </Paragraph>
          <Box justify="center" alignContent="center"> 

          <Paragraph>
              NFT royalties of an artwork, <br></br> 
              partially dedicated to empower <br></br>
              cities, activist and artistic movements.
          </Paragraph>
          </Box>
          </Box>

          <Box justify="center" alignContent="center"> 
          
          <Paragraph>
          mutual funds are accumulated <br></br>
          in three types of DAOs:
          </Paragraph>
          </Box>

          <Box direction="row" justify="between" >
          <Paragraph>
          ------<br></br>
          cities<br></br>
          ------
          </Paragraph>
          <Paragraph>
          ----------<br></br>
           {"<>"}causes{"<>"}<br></br>
          ----------
          </Paragraph>

          <Paragraph>          
          -------<br></br>
          genres<br></br>
          -------
          </Paragraph>

          </Box>


          
{/*          

          <Paragraph>
            Roadmap: <br></br>
            -------
          </Paragraph> */}
    
          <Box justify="center" alignContent="center"> 
        <CaretUp color="red"/>
      </Box>
              <Paragraph>        
                the revolution will be minted.
              </Paragraph>

              <Paragraph>        
                <DiscordButton/>
              </Paragraph>
      
      
      
        </Box>
       </Box>
        <Box>.</Box>
        <Box>.</Box>
      
        <Paragraph>        
            <MetamaskConnectButton/>
        </Paragraph>
        <Box>.</Box>
        <Box>.</Box>
        <Box> <CaretDown color="yellow"/></Box>
        <Box>.</Box>

        <Box>.</Box>
        <Box>.</Box>
        <FooterSection/>
     </Box>


     
    </Grommet>
  );
}


// function Manifest() {
//   return <h2>manifest content here</h2>;
// }

// function Roadmap() {
//   return <h2>roadmap content here </h2>;
// }


export default App;
