// import logo from './logo.svg';
// import './App.css';
import { grommet, Button, Box, Grommet, Image, Anchor, Paragraph, ResponsiveContext, Text } from 'grommet';
import { Login, Add, CaretDown, Directions } from 'grommet-icons';
import React from 'react';

const theme = {
  global: {
    font: {family: 'Inconsolata',
           size: '18px',
           height: '20px'
      }
  }
};


const ButtonWithChildren = props => (
  <Button hoverIndicator="orange" onClick={() => {}} {...props}>
    {({ disabled, hover, focus }) => (
      <Box pad="small" direction="row" align="center" gap="small">
   
        {focus ? (
          <Text>opening metamask..</Text>
        ) : (
          <>
          <Image src="https://image.spreadshirtmedia.com/image-server/v1/compositions/T916A2PA3092PT17X268Y8D1017578759FS4082CxFFFFFF/views/1,width=500,height=500,appearanceId=2,backgroundColor=ffffff/metamask-fox-outline-white-mens-premium-tank.jpg"
                margin="6px" width="48x" height="48px"/>
         <Text margin="4px" color={disabled}>connect your wallet</Text>
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

<   Anchor 
            href="https://github.com/stateful-art"
            target="_blank"
            color="white"
            size="small">code</Anchor> | 
    <Anchor 
            href="#"
            target="_blank"
            color="white"
            size="small">manifesto</Anchor> | 
            
    <Anchor href="#"
            target="_blank"
            color="white"
            size="small"
            >blog</Anchor>
  </Box>

  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad='small'
    gap='small'

    //flex={true}
    background='black'>
    <Anchor href="https://twitter.com/_streamerd"
            target="_blank"
            color="white"
            size="small">short paper</Anchor> | 

    <Anchor href="https://instagram.com/streamerd_"
            target="_blank"
            color="white"
            size="small">long paper</Anchor>
 
    

     
  </Box>


  <Box align="center" justify="center" margin="20p">
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
              margin="60px">
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

      <Box> <CaretDown color="yellow"/></Box>
        
      <Paragraph>
       <Anchor 
            href="#"
            // target="_blank"
            color="white">
          building a decentralized future: 
          <br></br> 
          the revolution will be minted.

          </Anchor>
      </Paragraph>  

    
     </Box>
        <Box>.</Box>
        <Box>.</Box>
      
        <Paragraph>
            <ButtonWithChildren/>
        </Paragraph>
        <Box>.</Box>
        <Box>.</Box>
        <Box>.</Box>
        <Box> <CaretDown color="yellow"/></Box>

        <FooterSection/>
     </Box>


     
    </Grommet>
  );
}

export default App;
