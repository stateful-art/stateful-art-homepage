import {
  Anchor,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Grommet,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
  Tab,
  Tabs,
  Text,
  Tip,
  Header,
} from "grommet";
import {
  Aggregate,
  Attraction,
  Braille,
  CaretDown,
  CaretUp,
  Directions,

} from "grommet-icons";
import React from "react";

const theme = {
  global: {
    font: { family: "Open Sans", size: "18px", height: "20px" },
    background: { color: "#323001" },
  },
};

const CoreValues = () => {
  return (
    <Box alignSelf="center">
      <Tabs size="large">
        <Tab title="projects" size="large">
          <Box pad="medium">
            <Heading size="medium">
              local
              <Anchor
                href="https://en.wikipedia.org/wiki/Fanzine"
                target="_blank"
              >
                {" "}
                zines{" "}
              </Anchor>
            </Heading>
            -- initial smart contracts and thoughts around a collaborative and
            impactful NFT minting + fair marketplace scenario. details
            <Anchor
              href="https://www.interaction-design.org/literature/topics/wicked-problems"
              target="_blank"
            >
              @ github repo.
            </Anchor>{" "}
          </Box>
        </Tab>

        <Tab title="manifest/tl;br" size="large">
          <Box pad="medium">
            <Manifest />
          </Box>
        </Tab>
        <Tab title="design principles" size="large">
          <Box pad="medium">
            <DesignPrinciples />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

const OurSongs = () => {
  return (
    <>
      <Box
        justify="center"
        alignContent="center"
        size="medium"
        direction="column"
      >
        <br></br>
        <MusicAndScience />
        <br></br>
        <Heading size="medium" textAlign="center">
          initial playlist for peace
        </Heading>

        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/tBzlhIYELeM"
          title="rest in peace, Jeff Alexander"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/* Steel Pulse - Handsworth Revolution */}
        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/A3LFvaAD2-Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/7jMlFXouPk8"
          title="hope flows"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          maxWidth="42%"
          maxHeight="100%"
          src="https://www.youtube.com/embed/XRz-_u2tN0c"
          title="say it, yes to good, not to bad. you know what's what, just feel it."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br></br>
      </Box>
    </>
  );
};

// const DefIntro = () => {
//   return (
//     <Paragraph>
//       stateful.art is an open-sourced design-thinking project, initiating an
//       experimental context (artist-in-residence) to tackle{" "}
//       <Anchor
//         href="https://www.interaction-design.org/literature/topics/wicked-problems"
//         target="_blank"
//       >
//         wicked problems
//       </Anchor>{" "}
//       of past, now and the future.
//       <br></br>
//       <br></br>, preparing for civic global resolutions including environmental
//       issues, migrations.
//       <br></br>
//     </Paragraph>
//   );
// };
// const WelcomingIntro = () => {
//   <Box>
//     <Paragraph>
//       Initiate or join artistic and activist communities, clubs and propose your
//       ideas for chang connect cities and maybe vote for global matters all
//       together, in a direct manner.
//     </Paragraph>
//   </Box>;
// };

const Manifest = () => {
  return (
    <>
      <Heading size="medium" alignSelf="center">
        {" "}
        a manifestation from
        <br></br> now and future.
      </Heading>
      {/* <Heading>free-styler</Heading> */}
      <Paragraph size="large">
        <Heading>~ freestyler ~</Heading>
        <strong> stateful</strong>
        <strong>.</strong>
        <strong style={{ color: "red" }}>art</strong> is a design-thinking
        project with questions and concepts to solve
        <Anchor
          href="https://www.interaction-design.org/literature/topics/wicked-problems"
          target="_blank"
        >
          {" "}
          wicked problems{" "}
        </Anchor>
        of past, now and the future.
        <br></br>
        <br></br>
        project initiated and will remain majorly in in the realms of science,
        technology, education, arts and mathematics, so to help STEAM on
        positively inclined expressions of the people and other livings.
        <br></br>
        <br></br>
        <Header></Header>
        in streamlining goodness without going dystopian.
        <br></br>
        <br></br>
        project respect existing power structures that expose capacity and
        intention on serving to all livings.
        <br></br>
        <br></br>
        hopefully that potential paradigm shift on current governing mechanisms
        set in place as their fellow residents experience and enjoy the fair
        distribution of rights.
        <br></br>
        <br></br>
        this umbrella project, for the world. already have developed with
        FOSS/free & open source software in years, we have the capacity to start
        connecting to each individual and organisation in the world.
        <Header>multi-token NFT project: LocalZines</Header>
        <Anchor
          style={{ background: "red" }}
          href="https://en.wikipedia.org/wiki/Fanzine"
          target="_blank"
        >
          zines, or fanzines
        </Anchor>
        are self-made and distributed, sold and mostly without hard cover, comes
        in a few pages, but a total space for freedom and its expressions,
        <br></br>
        <br></br>
        <br></br>a locality and solidarity aware, collective NFT magazine and a
        first contemplation on a round-robin algorithm use in a fair
        marketplace.
        <br></br>
        <br></br>
        in summary, marketplace will let collaborators and communities schedule
        which edition will be on sale next.)
        <br></br>
        <br></br>
        hoping to add more functionality and configuration options with further
        ideating with more artists, locals and organisations
        <br></br>
        <br></br>
        with this one, collaborators' inclusion of other cities, and minting
        them and supply on sale stocks and attach to scheduled periods, unlock
        to a sale when it's turn. cities via dedicating some number of digital
        artworks directly to those communities on minting phase, making them
        owners of some copies from genesis, so to say.
        <br></br>
        <br></br>
        https://eips.ethereum.org/EIPS/eip-1155 it is so far technically
        designed via use of
        <Anchor
          style={{ color: "black", background: "yellow" }}
          href="https://github.com/stateful-art/local-zines"
          target="_blank"
        >
          ERC-1155 multi token standard
        </Anchor>
        for multi-token NFTs. we'll include incentives in forms of smart
        contract functions.
        <br></br> <br></br>
        {/*  */}
        {/*  */}
        {/*  */}
        :/DAAOs initiated @0xhabitat.org -{">"} DAAOs artistic and activist
        movements and residents of cities will be able to interact throug
        interact with them, on Ethereum blockchain. and , transparent and
        generous culture, knowledge
        <br></br>
        <br></br>
        well, they are already out there. we are just motivated to reflect what
        it is.
        <br></br>
        <br></br>
        is a calling all to take action for a worldwide direct democratical
        activities on capacity-making on peaceful resolutions.
        <br></br>
        <br></br>
        through artists, creatives in general, including scientist, and all
        civic-augmented and oriented interactions for global consensus, when
        needed.
        <br></br>
        <br></br>
        consensus between people, ensuring they are not enemies, they want to
        <br></br>
        <br></br>
        as blockchain enabling us as individuals and communities to have a stake
        on cities they reside or remotes that are undeniably, still on this
        planet.
        <br></br> <br></br>
        #bypassAutocracy and then #cancelAutocracy.
        <br></br>
        <br></br>
        <Heading size="small">
          you and the rest, it is our roaster, our reflective metaverse
        </Heading>
        <br></br>
        there exists no silver bullet to tame a violent beast, that have a
        consistent will on creating inequalities and domination for ages.
        <br></br>. projects vote for global matters, as world citizens? on
        direct global voting for global matters.to citizens of cities and
        countries to decide, act and even build and propose better solutions.
        especially at the recent convention, COP26, we have eventually seen what
        is
        <Text weight="bolder" color="red" size="large">
          {" "}
          unsustainable:
        </Text>
        <Text weight="bolder" color="orange" size="large">
          {" "}
          "ignorance".
        </Text>{" "}
        <br></br>
        <br></br>many states having hard time reflecting local and global
        societies' common will, demands, rights and hopes. that's why we want to
        create a hub, where a solid base is given and people choose tech and
        governance/ungovernance modules they'd like to implement. we'll develop
        those with you, all together.
        <br></br>
        <br></br>
        hereby, st.art will be a movemental, umbrella project; residing
        somewhere intersectional and unbounded for the sake of collective
        creativity and ability to timely coordinate and organise. on whereabouts
        of the arts, technology, politics, projects and non-hierarchical,
        pseudo-binding, co-op concepts and imagination for change, we can
        observe a collaboration place for a planetary common wealth and
        realising our potentials as individuals and as human beings. those will
        be illustrative and functional .<br></br>
        <br></br>
        to be co-imaginated, an emancipating space for every individual that
        motivated to be more expressive, hopeful and be welcoming.
        <br></br>
        <br></br>
        isolation of populations, nationalism, a need for exclusivity and
        domination.
        <br></br>
        <br></br>
        as observed, delegation is not the wisest way to make decisions on
        behalf of a whole planet.
        <br></br>
        <br></br>
        no one have asked billions of people how they would respond to globally
        observable, prolonged and procrastinated catastrophies. such as climate
        change, wars, migration, still-armament and many more.
        <Heading>many thanks to collaborated communities in crypto, </Heading>
        <br></br>
        <br></br>
        this project, as-is found the multi-sided support from good fellows in
        the blockchain communities, worldwide.
        <br></br>
        global society, better influenced by experts on respective topics; is to
        decide global matters and show solidarity. directly and not once in x
        years. continuously, as they wanted.
        <br></br>
        <br></br>
        we will help you building locally and globally governable organisations,
        through which people in different cities, can experience having stake on
        commons and build social, financial and environmentally empowering
        capacities with wide community support: that is our on-restoration
        civilisation. starting with those projects create resources for multiple
        locations, so it is to attempt to build an on the go defined phenomenon:
        mutually-inclusive, inter-city zones.) , connected, demand, discovery
        and expression bases.
        <Anchor
          style={{ color: "red" }}
          href="https://en.wikipedia.org/wiki/List_of_global_issues"
          target="_blank"
        >
          {" "}
          and many more..{" "}
        </Anchor>
        <br></br>
        <br></br>
        project makes an open call to anyone in the world, yet as well
        democratically developed countries to initiate those city, country,
        union/alliance - wide voting.
        <br></br>
        we have democracy basically for that reason. to understand and feel we
        are living together.
        <br></br>
        <br></br>
        this project, again as an artwork, does not limit itself.
        <br></br>
        <br></br>
        hopefully, it's candidate to be one of exchange and co-imagination and
        expressing and reflecting a planetary domain of commons and hopes.
        <br></br>
        <br></br>
        encourager, empowerer and enabler of a such restoration.
        <br></br>
        <br></br>
        we'd like to introduce concepts, contexts and collective efforts on
        direct global voting for global matters. to citizens of cities and
        countries to decide, act and even build and propose better solutions.
        <br></br>
        <br></br>
        for that reason, as an exploratory and participatory way, st.art will
        contemplate on connecting residents of cities, having stakes on each
        others' lives.
        <br></br>
        <br></br>
        on collective decision making and co-imagination infrastructure on
        blockchain.
        <br></br>
        <br></br> and doing it in a resilient and undeniable way; with
        blockchain, DAOs, and impact and collaboration NFT minting.
      </Paragraph>
    </>
  );
};

// const DesignPrinciples = () => {
//   return (
//     <>
//       <Heading size="medium" alignSelf="center">
//         {" "}
//         a manifestation from
//         <br></br> now and future.
//       </Heading>
//       {/* <Heading>free-styler</Heading> */}
//       <Paragraph size="large">
//         <strong> stateful</strong>
//         <strong>.</strong>
//         <strong style={{ color: "red" }}>art</strong> is a design-thinking
//         project with questions and concepts to solve
//         <Anchor
//           href="https://www.interaction-design.org/literature/topics/wicked-problems"
//           target="_blank"
//         >
//           {" "}
//           wicked problems{" "}
//         </Anchor>
//         of past, now and the future.
//         <br></br>
//         <br></br>
//         as an emancipating artwork; inviting all to take action for a
//         progressive vision:
//         <br></br>
//         <br></br>
//         #bypassAutocracy and then #cancelAutocracy #rightsForAll #commonsForAll
//         <br></br>
//         <br></br>
//         <Heading size="small">
//           our metaverse, will be a reflection of our real lifes. not an
//           <Anchor
//             href="https://en.wikipedia.org/wiki/Echo_chamber_(media)"
//             target="_blank"
//             color="pink"
//           >
//             <strong> echo chambers </strong>
//           </Anchor>
//           https://en.wikipedia.org/wiki/Echo_chamber_(media) , nor another
//           siloes nor recommends that.{" "}
//         </Heading>
//         <br></br>
//         on direct global voting for global matters.to citizens of cities and
//         countries to decide, act and even build and propose better solutions.
//         especially at the recent convention, COP26, we have eventually seen what
//         is
//         <Text weight="bolder" color="red" size="large">
//           {" "}
//           unsustainable:
//         </Text>
//         <Text weight="bolder" color="orange" size="large">
//           {" "}
//           "ignorance".
//         </Text>{" "}
//         <br></br>
//         <br></br>many states having hard time reflecting local and global
//         societies' common will, demands, rights and hopes.
//         <br></br>
//         <br></br>
//         as observed, delegation is not the wisest way to make decisions on
//         behalf of a whole planet. no one have asked billions of people how they
//         would respond to catastrophies.
//         <br></br>
//         <br></br>
//         project advocates on direct, individual global voting for global
//         matters.
//         <br></br>
//         <br></br>
//         instead of only delegations, project encourages policy makers on
//         experimenting blockchain technology, and in some sense, and as for
//         real-time resident demands and so on. as in decentralised
//         artist-in-residency programs this, as a right, should be given to
//         residents of cities (we'll scale goodness with <strong>
//           {" "}
//           $CAUSE
//         </strong>{" "}
//         abstraction. like $GENREs and $FUSIONs, they are expected to be another
//         token family to reflect real life. there it will be exchange of
//         volunteer work, exchange in projects on recovering our home, planet
//         Earth. cities and countries to decide, act and even build and propose
//         better solutions. for that reason, as an exploratory and participatory
//         way, st.art will contemplate on connecting residents of cities, having
//         stakes on each others' lives. on collective decision making and
//         co-imagination infrastructure on blockchain.
//         <br></br>
//         <br></br> and doing it in a resilient and undeniable way; with
//         blockchain, DAOs, and impact and collaboration NFT minting.
//       </Paragraph>
//     </>
//   );
// };

// const StartManifest = () => {
//   return (
//     <Box justify="center" alignContent="center">
//       <Paragraph size="large">
//         <Accordion>
//           <AccordionPanel
//             // margin="20px"
//             label={

//             }
//           >
//             <Box background="#FFFF99" height="middle" width="large"></Box>
//           </AccordionPanel>
//         </Accordion>
//       </Paragraph>
//     </Box>
//   );
//};

const DesignPrinciples = () => {
  return (
    <>
      <Heading size="medium" alignSelf="center">
        {" "}
      </Heading>
      <Box alignSelf="center" direction="row-responsive">
        <Text size="large">
          <Braille gap="xlarge" />
          <Braille gap="xlarge" /> walls cannot resist creativity.
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> with arts and causes, we unite.
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> populism and exclusivity are tools of
          non-creative personalities.
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> diversity is real. lack of it makes
          solidarity less real.
          <br></br>
          <br></br>
        </Text>

        <Text size="large">
          <Braille gap="xlarge" /> collectively explore, evaluate and develop
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> build tools, not products.
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> stay competitive - cooperative
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> create hubs and connectors, not siloes.
          <br></br>
          <br></br>
          <Braille gap="xlarge" /> use tech to make walls fall.
          <br></br>
          <Braille gap="xlarge" /> extend STEM with arts, to STEAM.
          <br></br>
        </Text>
      </Box>

      <Paragraph size="large">
        {" "}
        “don't get set into one form, adapt it and build your own, and let it
        grow, be like water.
        <br></br>
        empty your mind, be formless, shapeless — like water. Now you put water
        in a cup, it becomes the cup; You put water into a bottle it becomes the
        bottle; You put it in a teapot it becomes the teapot. Now water can flow
        or it can crash. Be water, my friend.”
        <br></br> - Bruce Lee
      </Paragraph>
    </>

    //  <Box background="#FFFF99" height="middle" width="large">
    //           <Paragraph>Build solidarity, not organisations.</Paragraph>

    //           <Paragraph color="black" alignSelf="center" size="medium">
    //             art is intersectional, so our cities. every city has an
    //             identity, and that as well, artistically. connecting abstraction
    //             exist $GENREs, then $CAUSEs and $SKILLs ground between cities to
    //             stand together.
    //           </Paragraph>

    //           <Paragraph color="black" alignSelf="center" size="medium">
    //             there are no user types. there are behaviours, and we find
    //             common ground via audience, resident and artists being our base.
    //           </Paragraph>
    //         </Box>
  );
};

const MusicAndScience = () => {
  return (
    <Image
      src="./art_flows_in_space_and_time.png"
      width="400px"
      height="300px"
      margin="10px"
      alignSelf="center"
    ></Image>
  );
};

// const BridgingCities = () => {
//   return (
//     <Image
//       src="./bridging_cities_with_arts_and_rights.png"
//       width="400px"
//       height="300px"
//       margin="10px"
//       alignSelf="center"
//     ></Image>
//   );
// };



// const STEAM = () => {
//   return (
//     <>
//       <Box>
//         <Header>will be STEAMing change.</Header>
//         <Image
//           src="https://www.breteaufoundation.org/wp-content/uploads/2021/06/shutterstock_1845520450-scaled-e1622734962453-1536x719.jpg"
//           width="400px"
//           height="300px"
//           margin="10px"
//           alignSelf="center"
//         ></Image>
//       </Box>
//       <Paragraph>
//         Promoting STEAM Education in Latin America Penny Atkinson, Volunteer
//         Writer
//       </Paragraph>
//     </>
//   );
// };

// const CitiesConnViaGenres = () => {
//   return (
//     <Image
//       src="./cities_bridged_by_genres.png"
//       width="400px"
//       height="300px"
//       margin="10px"
//       alignSelf="center"
//     ></Image>
//   );
// };
// const OrganiCities = () => {
//   return (
//     <Box direction="column" alignSelf="center">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#273036"
//           fill-opacity="1"
//           d="M0,96L0,288L72,288L72,32L144,32L144,192L216,192L216,224L288,224L288,0L360,0L360,160L432,160L432,192L504,192L504,256L576,256L576,128L648,128L648,128L720,128L720,320L792,320L792,192L864,192L864,64L936,64L936,192L1008,192L1008,96L1080,96L1080,224L1152,224L1152,160L1224,160L1224,192L1296,192L1296,288L1368,288L1368,96L1440,96L1440,0L1368,0L1368,0L1296,0L1296,0L1224,0L1224,0L1152,0L1152,0L1080,0L1080,0L1008,0L1008,0L936,0L936,0L864,0L864,0L792,0L792,0L720,0L720,0L648,0L648,0L576,0L576,0L504,0L504,0L432,0L432,0L360,0L360,0L288,0L288,0L216,0L216,0L144,0L144,0L72,0L72,0L0,0L0,0Z"
//         ></path>
//       </svg>
//       <Heading size="small" alignSelf="center">
//         come, as you are.
//       </Heading>
//       <Text size="large" alignSelf="center">
//         <Box
//           marginLeft="42px"
//           animation={{
//             type: "pulse",
//             delay: 700,
//             duration: 2400,
//           }}
//         >
//           {" "}
//           <Heading size="small" alignSelf="center">
//             Autonomous
//           </Heading>
//           <Aed size="xlarge" />{" "}
//           <Heading size="small" alignSelf="center">
//             Artistic
//           </Heading>
//         </Box>
//       </Text>{" "}
//       <Heading size="medium" alignSelf="center">
//         {" "}
//         OrganiCities
//       </Heading>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#ffd700"
//           fill-opacity="1"
//           d="M0,96L0,288L72,288L72,32L144,32L144,192L216,192L216,224L288,224L288,0L360,0L360,160L432,160L432,192L504,192L504,256L576,256L576,128L648,128L648,128L720,128L720,320L792,320L792,192L864,192L864,64L936,64L936,192L1008,192L1008,96L1080,96L1080,224L1152,224L1152,160L1224,160L1224,192L1296,192L1296,288L1368,288L1368,96L1440,96L1440,320L1368,320L1368,320L1296,320L1296,320L1224,320L1224,320L1152,320L1152,320L1080,320L1080,320L1008,320L1008,320L936,320L936,320L864,320L864,320L792,320L792,320L720,320L720,320L648,320L648,320L576,320L576,320L504,320L504,320L432,320L432,320L360,320L360,320L288,320L288,320L216,320L216,320L144,320L144,320L72,320L72,320L0,320L0,320Z"
//         ></path>
//       </svg>
//     </Box>
//   );
// };

// const LogoSmall = () => {
//   return (
//     <Box
//       animation={{
//         type: "slideRight",
//         delay: 10,
//         duration: 2000,
//       }}
//     >
//       <Image src="./logo_textual.png" style={{ maxWidth: "20%" }}></Image>
//       {/* <Image
//         style={{maxWidth: "100%"}}
//         // src="./mantra.svg"
//         src="./connecting_cities_with_arts.svg"
//         // src="./stateful-art-top.png"
//         // width="525px"
//         // height="300px"
//         margin="10px"
//       ></Image> */}
//     </Box>
//   );
// };

const LogoBig = () => {
  return (
    <Box
      animation={{
        type: "",
        delay: 10,
        duration: 2000,
      }}
    >
      <Image src="./logo_textual.png" style={{ maxWidth: "20%" }}></Image>
      {/* <Image
        style={{maxWidth: "100%"}}
        // src="./mantra.svg"
        src="./connecting_cities_with_arts.svg"
        // src="./stateful-art-top.png"
        // width="525px"
        // height="300px"
        margin="10px"
      ></Image> */}
    </Box>
  );
};

// const ParticipantsAccordionTheme = {
//   accordion: {
//     heading: {
//       level: 3,
//       margin: { vertical: "20px", horizontal: "24px" },
//     },
//     hover: {
//       heading: {
//         color: "accent-2",
//       },
//     },
//     icons: {
//       collapse: SubtractCircle,
//       expand: AddCircle,
//       color: "orange",
//     },
//     border: undefined,
//     panel: {
//       // border: {
//       //   side: 'horizontal',
//       //   size: 'medium',
//       //   color: '#DADADA',
//       //   style: 'dotted',
//       // },
//     },
//   },
// };

const ArtMovements = (direction) => {
  return (
    <>
      <Box
        alignSelf="center"
        marginTop="20px"
        justify="center"
        // alignContent="center"
        direction="column"
      >
        <Box
          direction="row"
          pad="small"
          gap="small"
          alignSelf="center"
          size="large"
          marginTop="20%"
        >
          <Paragraph alignSelf="center" size="xlarge" textAlign="start">
          at st.art, so far each $GENRE's crypto-community,  initiated on
            <Anchor
              color=""
              background="yellow"
              href="https://0xhabitat.org"
              target="_blank"
            >
              {" "}
              0xhabitat.org
            </Anchor>
            <br></br>
            <br></br>
            a voting module technique, called signalling, is selected initially, so that those calls and artist proposals are always kept open. also multiple proposal can be voted with different weights. 

            <br></br>
            <br></br>
being applied to enhance our culture for democracy and introduce new opportunities. 
            <br></br>
            <br></br>

            
            
            <DiscordButton />
            <br></br> community is quite new, all is just started. feel invited!
          </Paragraph>
         
          <Paragraph alignSelf="center" size="xlarge" textAlign="end">
            stateful.art is a design-thinking project.
            <br></br>
            st.art will provide an imaginable context.
            <br></br>we'll make use of those DAAOs for audience/community
            supported and engaged, crypt
            <Anchor
              href="https://en.wikipedia.org/wiki/Artist-in-residence"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              {" "}
              artists-in-residence
            </Anchor>
            programs, including existing parties as well, for sure.
            <br></br>
            <br></br>
            CabinDAO's
            <Anchor
              href="https://www.creatorcabins.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              creator cabins project{" "}
            </Anchor>
            is a successful crypto-based residency program, empowers artists
            with sustainable cabins and chill atmosphere, somewhere natural in
            Texas, USA. have a look at that project, and imagine in every city
            there are tens of spaces started emerging, as such.
          </Paragraph>
        </Box>

      </Box>
      {/* <Box direction="row"> */}
      <Box direction={{ direction }}>
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "medium" }}
              round="small"
              background="background-front"
              responsive={false}
              // animation={{
              //   type: "jiggle",
              //   delay: 20,
              //   duration: 4000,
              // }}
            >
              <Text weight="bold">Berlin, Hamburg, Istanbul, Los Angeles</Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small" background="light-1">
              <Text size="large" weight="bolder">
                $HIPHOP
              </Text>
            </CardHeader>
            <CardBody pad="small" background="orange">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0xa21629c00a7d9c88ea98673a0b81becd156cfe416920ec6d40b408d1506eb1e4"
                target="_blank"
                color="white"
              >
                <Box animation="zoomOut">
                  <Image
                    src="./hiphop.png"
                    width="120px"
                    height="80px"
                    style={{
                      marginLeft: "20px",
                      marginRight: "36px",
                      marginTop: "12px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 4 cities <Attraction />
              </Text>
            </CardFooter>
          </Card>
        </Tip>

        {/* street art */}
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold">Berlin, Hamburg</Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $STREET
              </Text>
            </CardHeader>
            <CardBody pad="small" background="red">
              <Anchor href="" target="_blank" color="white">
                <Box alignSelf="center">
                  <Image
                    src="./street_art_by_bona.jpeg"
                    width="100%"
                    height="100%"
                    // width="160px"
                    // height="104px"
                    // style={{
                    //   marginLeft: "22px",
                    //   marginRight: "36px",
                    //   marginTop: "2px",
                    // }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 2 cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold" font="large">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $ELECTRO
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x1b84234a852a468cc28f33a1702925d620d347f43ab3809892522e5ffe6362f6"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./electronic_music.png"
                    width="120px"
                    height="104px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "2px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 1 city
              </Text>
              <Attraction />
              {/*
              <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> 
              */}
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                Hamburg
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $PUNK
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./punk.png"
                    width="100px"
                    height="80px"
                    style={{
                      marginLeft: "22px",
                      marginRight: "36px",
                      marginTop: "px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 1 city
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
      </Box>

      <Box
        direction="row"
        alignSelf="center"
        animation={{
          type: "fadeIn",
          delay: 20,
          duration: 1000,
        }}
      >
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold">
                where it'll first start, who knows? well, you do!
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $CUBISM
              </Text>
            </CardHeader>
            <CardBody pad="small" background="red">
              {/* <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
                target="_blank"
                color="white"
              > */}
              <Box alignSelf="center">
                <Image
                  src="./painting_picasso.jpeg"
                  width="92px"
                  height="130px"
                  style={{
                    marginLeft: "22px",
                    marginRight: "22px",
                    marginTop: "2px",
                    marginBottom: "1px",
                  }}
                ></Image>
              </Box>
              {/* </Anchor> */}
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
        {/* come'n join, into the middle with animation. */}
        <Box
          animation={{
            type: "pulse",
            delay: 120,
            duration: 1000,
          }}
        >
          <Tip
            size="large"
            plain
            content={
              <Box
                pad="small"
                gap="small"
                width={{ max: "small" }}
                round="small"
                background="background-front"
                responsive={false}
              >
                <Text textAlign="center" weight="bold">
                  come'n visit discord channel!
                </Text>
                <Text size="small" alignSelf="center" textAlign="center">
                  build approachable, resilient and democratically creative and
                  scalable mechanisms for your cities, towns and neighbourhoods.
                </Text>
              </Box>
            }
            dropProps={{ align: { left: "right" } }}
          >
            <Card
              height="small"
              margin="small"
              width="small"
              background="light-1"
              alignContent="center"
            >
              <CardHeader
                alignSelf="center"
                pad="small"
                background="light-1"
                color="white"
              >
                <Aggregate size="medium" weight="medium"></Aggregate>
              </CardHeader>
              <CardBody background="white">
                <Anchor href="https://discord.gg/eheV9EcudR" target="_blank">
                  <Paragraph textAlign="center">
                    express yourself!
                    <br></br>
                    <br></br> start an artistic crypto-community in a city ;)
                  </Paragraph>
                </Anchor>
              </CardBody>
            </Card>
          </Tip>
        </Box>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold">
                where it'll first start, who knows? well, you do!
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small">
              <Text size="large" weight="bolder">
                $JAZZ
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              {/* <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
                target="_blank"
                color="white"
              > */}
              <Box alignSelf="center">
                <Image
                  src="./jazz.png"
                  width="92px"
                  height="130px"
                  style={{
                    marginLeft: "22px",
                    marginRight: "22px",
                    marginTop: "2px",
                    marginBottom: "1px",
                  }}
                ></Image>
              </Box>
              {/* </Anchor> */}
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
      </Box>
      <Box direction="row" size="large">
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="#FFFF99"
              responsive={false}
              animation={{
                type: "slideLeft",
                delay: 20,
                duration: 1000,
              }}
            >
              <Text size="medium">
                reggae community currently have no city-level treasury.
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader alignSelf="center" pad="small" background="light-1">
              <Text size="large" weight="bolder">
                $REGGAE
              </Text>
            </CardHeader>
            <CardBody background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x594080e1603af01cba9155a6fa6899b833c5549d555c89a2e7d578be33495ff3"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./reggae.jpeg"
                    width="90px"
                    height="76px"
                    style={{
                      marginLeft: "48px",
                      marginRight: "36px",
                      marginTop: "20px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities
              </Text>
              <Attraction />
              {/* <Button icon={<Attraction color="red" />} hoverIndicator />
              <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
            </CardFooter>
          </Card>
        </Tip>
        {/* PUNK     */}

        {/* FOLK */}
        {/* ROCK */}
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                Berlin, Hamburg, Istanbul, Los Angeles
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $ROCK
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor
                href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
                target="_blank"
                color="white"
              >
                <Box>
                  <Image
                    src="./rock.jpeg"
                    maxWidth="10%"
                    maxHeight="10%"
                    style={{
                      // marginLeft: "22px",
                      // marginRight: "36px",
                      marginTop: "0px",
                      marginBottom: "100px",
                    }}
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ 4 cities
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>

        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                @ no cities yet. so start one ;)
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $POLITICAL
              </Text>
            </CardHeader>
            <CardBody pad="small" background="black">
              <Anchor href="" target="_blank" color="white">
                <Box>
                  <Image
                    src="./political_art.png"
                    width="160px"
                    height="100px"
                    style={
                      {
                        // marginLeft: "22px",
                        // marginRight: "36px",
                        // marginTop: "12px",
                      }
                    }
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities yet
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: "small" }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text size="medium" weight="bolder">
                Berlin, Hamburg, Istanbul, Los Angeles
              </Text>
            </Box>
          }
          dropProps={{ align: { left: "right" } }}
        >
          <Card
            height="small"
            margin="small"
            width="small"
            background="light-1"
          >
            <CardHeader
              alignSelf="center"
              pad="small"
              background="light-1"
              color="white"
            >
              <Text size="large" weight="bolder">
                $POP
              </Text>
            </CardHeader>
            <CardBody pad="small" background="purple">
              <Anchor href="" target="_blank" color="white">
                <Box>
                  <Image
                    src="./pop_art.jpeg"
                    width="180px"
                    height="120px"
                    style={
                      {
                        // marginLeft: "22px",
                        // marginRight: "36px",
                        // marginTop: "12px",
                      }
                    }
                  ></Image>
                </Box>
              </Anchor>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Text size="large" weight="bold">
                @ no cities yet
              </Text>

              <Attraction />
            </CardFooter>
          </Card>
        </Tip>
      </Box>
      <Box
        size
        direction="row"
        alignSelf="center"
        animation={{
          type: "slideDown",
          delay: 20,
          duration: 1000,
        }}
      ></Box>
      {/* </Box> */}
    </>
  );
};

// const GenreCardsVertical = (direction) => {
//   return (
//     <>
//       {/* <Box direction="row"> */}
//       <Box direction={{ direction }}>
//         <Box
//           animation={{
//             type: "pulse",
//             delay: 120,
//             duration: 1000,
//           }}
//         >
//           <Tip
//             plain
//             content={
//               <Box
//                 pad="small"
//                 gap="small"
//                 width={{ max: "medium" }}
//                 round="small"
//                 background="background-front"
//                 responsive={false}
//                 // animation={{
//                 //   type: "jiggle",
//                 //   delay: 20,
//                 //   duration: 4000,
//                 // }}
//               >
//                 <Text weight="bold">
//                   Berlin, Hamburg, Istanbul, Los Angeles
//                 </Text>
//               </Box>
//             }
//             dropProps={{ align: { left: "right" } }}
//           >
//             <Card
//               height="small"
//               margin="small"
//               width="small"
//               background="light-1"
//             >
//               <CardHeader alignSelf="center" pad="small" background="light-1">
//                 <Text size="large" weight="bolder">
//                   $HIPHOP
//                 </Text>
//               </CardHeader>
//               <CardBody pad="small" background="orange">
//                 <Anchor
//                   href="https://0xhabitat.org/app/#habitat-community,0xa21629c00a7d9c88ea98673a0b81becd156cfe416920ec6d40b408d1506eb1e4"
//                   target="_blank"
//                   color="white"
//                 >
//                   <Box animation="zoomOut">
//                     <Image
//                       src="./hiphop.png"
//                       width="120px"
//                       height="80px"
//                       style={{
//                         marginLeft: "20px",
//                         marginRight: "36px",
//                         marginTop: "12px",
//                       }}
//                     ></Image>
//                   </Box>
//                 </Anchor>
//               </CardBody>
//               <CardFooter pad={{ horizontal: "small" }} background="light-2">
//                 <Text size="large" weight="bold">
//                   @ 4 cities <Attraction />
//                 </Text>
//               </CardFooter>
//             </Card>
//           </Tip>
//         </Box>

//         <Tip
//           plain
//           content={
//             <Box
//               pad="small"
//               gap="small"
//               width={{ max: "small" }}
//               round="small"
//               background="background-front"
//               responsive={false}
//             >
//               <Text weight="bold" font="large">
//                 Hamburg
//               </Text>
//             </Box>
//           }
//           dropProps={{ align: { left: "right" } }}
//         >
//           <Card
//             height="small"
//             margin="small"
//             width="small"
//             background="light-1"
//           >
//             <CardHeader alignSelf="center" pad="small">
//               <Text size="large" weight="bolder">
//                 $ELECTRO
//               </Text>
//             </CardHeader>
//             <CardBody pad="small" background="black">
//               <Anchor
//                 href="https://0xhabitat.org/app/#habitat-community,0x1b84234a852a468cc28f33a1702925d620d347f43ab3809892522e5ffe6362f6"
//                 target="_blank"
//                 color="white"
//               >
//                 <Box>
//                   <Image
//                     src="./electronic_music.png"
//                     width="120px"
//                     height="104px"
//                     style={{
//                       marginLeft: "22px",
//                       marginRight: "36px",
//                       marginTop: "2px",
//                     }}
//                   ></Image>
//                 </Box>
//               </Anchor>
//             </CardBody>
//             <CardFooter pad={{ horizontal: "small" }} background="light-2">
//               <Text size="large" weight="bold">
//                 @ 1 city
//               </Text>
//               <Attraction />
//               {/* <Button icon={<Attraction color="red" />} hoverIndicator />
//               <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
//             </CardFooter>
//           </Card>
//         </Tip>
//       </Box>

//       <Box
//         direction="row"
//         alignSelf="center"
//         animation={{
//           type: "fadeIn",
//           delay: 20,
//           duration: 1000,
//         }}
//       >
//         <Tip
//           plain
//           content={
//             <Box
//               pad="small"
//               gap="small"
//               width={{ max: "small" }}
//               round="small"
//               background="background-front"
//               responsive={false}
//             >
//               <Text weight="bold">Berlin, Hamburg</Text>
//             </Box>
//           }
//           dropProps={{ align: { left: "right" } }}
//         >
//           <Card
//             height="small"
//             margin="small"
//             width="small"
//             background="light-1"
//           >
//             <CardHeader alignSelf="center" pad="small">
//               <Text size="large" weight="bolder">
//                 $GRAFFITI
//               </Text>
//             </CardHeader>
//             <CardBody pad="small" background="red">
//               <Anchor
//                 href="https://0xhabitat.org/app/#habitat-community,0x6220750e4877cca63e0d68e41b88188ee4cde9b1afc9a6ce11edd72b1c3f0c9c"
//                 target="_blank"
//                 color="white"
//               >
//                 <Box alignSelf="center">
//                   <Image
//                     src="./graffiti.jpeg"
//                     width="130px"
//                     height="104px"
//                     style={{
//                       marginLeft: "22px",
//                       marginRight: "36px",
//                       marginTop: "2px",
//                     }}
//                   ></Image>
//                 </Box>
//               </Anchor>
//             </CardBody>
//             <CardFooter pad={{ horizontal: "small" }} background="light-2">
//               <Text size="large" weight="bold">
//                 @ 2 cities
//               </Text>
//               <Attraction />
//               {/* <Button icon={<Attraction color="red" />} hoverIndicator />
//               <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
//             </CardFooter>
//           </Card>
//         </Tip>
//       </Box>
//       <Box direction="row">
//         <Tip
//           plain
//           content={
//             <Box
//               pad="small"
//               gap="small"
//               width={{ max: "small" }}
//               round="small"
//               background="#FFFF99"
//               responsive={false}
//               animation={{
//                 type: "slideLeft",
//                 delay: 20,
//                 duration: 1000,
//               }}
//             >
//               <Text size="medium">
//                 reggae community currently have no city-level treasury.
//               </Text>
//             </Box>
//           }
//           dropProps={{ align: { left: "right" } }}
//         >
//           <Card
//             height="small"
//             margin="small"
//             width="small"
//             background="light-1"
//           >
//             <CardHeader alignSelf="center" pad="small" background="light-1">
//               <Text size="large" weight="bolder">
//                 $REGGAE
//               </Text>
//             </CardHeader>
//             <CardBody background="black">
//               <Anchor
//                 href="https://0xhabitat.org/app/#habitat-community,0x594080e1603af01cba9155a6fa6899b833c5549d555c89a2e7d578be33495ff3"
//                 target="_blank"
//                 color="white"
//               >
//                 <Box>
//                   <Image
//                     src="./reggae.jpeg"
//                     width="90px"
//                     height="76px"
//                     style={{
//                       marginLeft: "48px",
//                       marginRight: "36px",
//                       marginTop: "20px",
//                     }}
//                   ></Image>
//                 </Box>
//               </Anchor>
//             </CardBody>
//             <CardFooter pad={{ horizontal: "small" }} background="light-2">
//               <Text size="large" weight="bold">
//                 @ 0 cities
//               </Text>
//               <Attraction />
//               {/* <Button icon={<Attraction color="red" />} hoverIndicator />
//               <Button icon={<ShareOption color="plain" />} hoverIndicator /> */}
//             </CardFooter>
//           </Card>
//         </Tip>
//         {/* PUNK     */}
//         <Tip
//           plain
//           content={
//             <Box
//               pad="small"
//               gap="small"
//               width={{ max: "small" }}
//               round="small"
//               background="background-front"
//               responsive={false}
//             >
//               <Text size="medium" weight="bolder">
//                 Hamburg
//               </Text>
//             </Box>
//           }
//           dropProps={{ align: { left: "right" } }}
//         >
//           <Card
//             height="small"
//             margin="small"
//             width="small"
//             background="light-1"
//           >
//             <CardHeader
//               alignSelf="center"
//               pad="small"
//               background="light-1"
//               color="white"
//             >
//               <Text size="large" weight="bolder">
//                 $PUNK
//               </Text>
//             </CardHeader>
//             <CardBody pad="small" background="purple">
//               <Anchor
//                 href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
//                 target="_blank"
//                 color="white"
//               >
//                 <Box>
//                   <Image
//                     src="./punk.png"
//                     width="100px"
//                     height="60px"
//                     style={{
//                       marginLeft: "22px",
//                       marginRight: "36px",
//                       marginTop: "12px",
//                     }}
//                   ></Image>
//                 </Box>
//               </Anchor>
//             </CardBody>
//             <CardFooter pad={{ horizontal: "small" }} background="light-2">
//               <Text size="large" weight="bold">
//                 @ 1 city
//               </Text>

//               <Attraction />
//             </CardFooter>
//           </Card>
//         </Tip>
//         {/* FOLK */}
//         {/* ROCK */}
//         <Tip
//           plain
//           content={
//             <Box
//               pad="small"
//               gap="small"
//               width={{ max: "small" }}
//               round="small"
//               background="background-front"
//               responsive={false}
//             >
//               <Text size="medium" weight="bolder">
//                 in 0 cities
//               </Text>
//             </Box>
//           }
//           dropProps={{ align: { left: "right" } }}
//         >
//           <Card
//             height="small"
//             margin="small"
//             width="small"
//             background="light-1"
//           >
//             <CardHeader
//               alignSelf="center"
//               pad="small"
//               background="light-1"
//               color="white"
//             >
//               <Text size="large" weight="bolder">
//                 $ROCK
//               </Text>
//             </CardHeader>
//             <CardBody pad="small" background="purple">
//               <Anchor
//                 href="https://0xhabitat.org/app/#habitat-community,0x58dac8cfce8db55de5ee3b16a27461a41cf074b0f1a04d73661846dfa2dccd95"
//                 target="_blank"
//                 color="white"
//               >
//                 <Box>
//                   <Image
//                     src="./rock_horizontal.png"
//                     width="100px"
//                     height="60px"
//                     style={{
//                       marginLeft: "22px",
//                       marginRight: "36px",
//                       marginTop: "12px",
//                     }}
//                   ></Image>
//                 </Box>
//               </Anchor>
//             </CardBody>
//             <CardFooter pad={{ horizontal: "small" }} background="light-2">
//               <Text size="large" weight="bold">
//                 @ 4 cities
//               </Text>

//               <Attraction />
//             </CardFooter>
//           </Card>
//         </Tip>
//       </Box>
//       <Box
//         size
//         direction="row"
//         alignSelf="center"
//         animation={{
//           type: "slideDown",
//           delay: 20,
//           duration: 1000,
//         }}
//       >
//         <Tip
//           size="large"
//           plain
//           content={
//             <Box
//               pad="small"
//               gap="small"
//               width={{ max: "small" }}
//               round="small"
//               background="background-front"
//               responsive={false}
//             >
//               <Text textAlign="center" weight="bold">
//                 join discord server, we'll show help you on including whichever
//                 DAO platform you'd like to adopt for a new genre you'd bring up.
//               </Text>

//               <Text size="small" alignSelf="center" textAlign="center"></Text>
//             </Box>
//           }
//           dropProps={{ align: { left: "right" } }}
//         >
//           <Card
//             height="small"
//             margin="small"
//             width="small"
//             background="light-1"
//             alignContent="center"
//           >
//             <CardHeader
//               alignSelf="center"
//               pad="small"
//               background="light-1"
//               color="white"
//             >
//               <Aggregate size="large"></Aggregate>
//             </CardHeader>
//             <CardBody pad="small" background="white">
//               <Anchor href="https://discord.gg/eheV9EcudR" target="_blank">
//                 start an artistic community DAO for your city today,
//                 <br></br>
//               </Anchor>
//               <Paragraph textAlign="center">for "real".</Paragraph>
//             </CardBody>
//           </Card>
//         </Tip>
//       </Box>
//       {/* </Box> */}
//     </>
//   );
// };

// const ParticipantsAccordion = ({ animate, multiple, ...rest }) => (
//   <Grommet theme={ParticipantsAccordionTheme}>
//     <ResponsiveContext.Consumer>
//       {(size) =>
//         size === "small" ? (
//           <Box {...rest} pad="large" align="center" justify="center">
//             <Heading size="small">NFT roadmap:</Heading>

//             <Paragraph alignSelf="center" margin="12px">
//               <Text>
//                 initial implementation will cover dedicating resources to
//                 multiple cities {"&"} genres.
//               </Text>
//             </Paragraph>
//             <Paragraph alignSelf="center" margin="12px">
//               <Text>
//                 With a focus on voting for artists that are proposed within
//                 genres of the cities.
//               </Text>
//             </Paragraph>

//             <Paragraph alignSelf="center" margin="12px">
//               <Text>sonn will introduce causes. waitForIt.</Text>
//             </Paragraph>

//             <Accordion animate={animate} multiple>
//               <AccordionPanel
//                 margin="20px"
//                 label={<Text size="medium">artists mint artworks</Text>}
//               >
//                 <Box background="#9a3c3c" height="middle" width="middle">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>Artists initiate the scope of impact.</Text>
//                   </Paragraph>

//                   <Image
//                     src="./a_pseudo_banksy_mint.png"
//                     width="400px"
//                     height="360px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       NFT royalties of an artwork, partially dedicated to
//                       empower cities, through combinations of causes and genres.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="20px"
//                 label={
//                   <Text size="medium"> {"&"} create topics for genres</Text>
//                 }
//               >
//                 <Box background="#9a3c3c" height="middle" width="middle">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       stateful.art treasury on 0xhabitat.org enables artists to
//                       initiate artistic movements as topics.
//                     </Text>
//                     <Image
//                       src="./create_new_community_in_habitat.png"
//                       width="380px"
//                       height="400px"
//                       margin="20px"
//                     ></Image>
//                   </Paragraph>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       They can also include communication channels for those
//                       communities.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="20px"
//                 label={<Text size="medium">audiences vote via signalling</Text>}
//               >
//                 <Box
//                   background="#9a3c3c"
//                   alignSelf="center"
//                   height="middle"
//                   width="middle"
//                   margin="20px"
//                 >
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       members in those cities, that are as well audiences,
//                       artists and residents of those cities; vote on which
//                       artistic projects will get funding and be able to propose
//                       new artists and projects from other cities and genres to
//                       their communities.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./jazz_elise_reggae_hamburg.png"
//                     width="380px"
//                     height="360px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       When there is enough fund collected for those cities,
//                       proposed and voted artists will be entitled for a
//                       financial and community support for a future artist
//                       residency.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               {/* <AccordionPanel
//                     margin="20px"
//                     label={<Text size="medium">collectors help making positive impact</Text>}
//                   >
//                     <Box background="#9a3c3c" alignSelf="center" height="middle" width="medium" margin="20px">
//                       <Paragraph justify="center" margin="12px">
//                         <Text >
//                                 Collectors will be included on artistic movements of those cities and they'll be able to vote on artist residencies too.
//                           </Text>
//                       </Paragraph>

//                     </Box>
//                   </AccordionPanel> */}
//             </Accordion>
//           </Box>
//         ) : (
//           <Box {...rest} pad="large" align="center" justify="center">
//             {/* ASDF */}
//             <ArtfulSpaces />

//             <Accordion animate={animate} multiple>
//               <AccordionPanel
//                 margin="20px"
//                 label={<Text size="medium">artists mint artworks</Text>}
//               >
//                 <Box background="#9a3c3c" height="middle" width="600px">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>they initiate the scope of impact.</Text>
//                     <Text>
//                       {" "}
//                       NFT royalties of an artwork, partially dedicated to
//                       empower cities, through combinations of causes and genres.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./a_pseudo_banksy_mint.png"
//                     width="582px"
//                     height="576px"
//                     margin="22px"
//                     alignSelf="center"
//                   ></Image>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="20px"
//                 label={
//                   <Text size="medium"> {"&"} create topics for genres</Text>
//                 }
//               >
//                 <Box background="#9a3c3c" height="middle" width="large">
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       stateful.art community on 0xhabitat.org, extended via city
//                       treasuries; enables artists to initiate artistic movements
//                       as topics.
//                     </Text>
//                     <Image
//                       src="./create_new_community_in_habitat.png"
//                       width="380px"
//                       height="400px"
//                       margin="20px"
//                     ></Image>
//                   </Paragraph>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       They can also include communication channels for those
//                       communities.
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="10px"
//                 label={<Text size="medium">audiences vote via signalling</Text>}
//               >
//                 <Box
//                   background="#9a3c3c"
//                   alignSelf="center"
//                   height="middle"
//                   width="large"
//                   margin="20px"
//                 >
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       audiences, artists/collectives from those cities propose
//                       new artists and projects to their communities. those
//                       artists and projects might be already residing in those
//                       cities or not.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./jazz_elise_reggae_hamburg.png"
//                     width="692px"
//                     height="576px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       When there is enough fund collected for those cities,
//                       proposed and voted artists will be entitled for a
//                       financial and community support for a future artist
//                       residency.{" "}
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               <AccordionPanel
//                 margin="10px"
//                 label={
//                   <Text size="medium">and .. community-based curation</Text>
//                 }
//               >
//                 <Box
//                   background="#9a3c3c"
//                   alignSelf="center"
//                   height="middle"
//                   width="large"
//                   margin="20px"
//                 >
//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       {" "}
//                       audiences, artists/collectives from those cities propose
//                       new artists and projects to their communities. those
//                       artists and projects might be already residing in those
//                       cities or not.
//                     </Text>
//                   </Paragraph>

//                   <Image
//                     src="./jazz_elise_reggae_hamburg.png"
//                     width="692px"
//                     height="576px"
//                     margin="32px"
//                   ></Image>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>finally</Text>
//                   </Paragraph>

//                   <Paragraph alignSelf="center" margin="12px">
//                     <Text>
//                       When there is enough fund collected for those cities,
//                       proposed and voted artists will be entitled for a
//                       financial and community support for a future artist
//                       residency.{" "}
//                     </Text>
//                   </Paragraph>
//                 </Box>
//               </AccordionPanel>

//               {/* <AccordionPanel
//                     margin="20px"
//                     label={<Text size="medium">collectors help making positive impact</Text>}
//                   >
//                     <Box background="#9a3c3c" alignSelf="center" height="middle" width="medium" margin="20px">
//                       <Paragraph justify="center" margin="12px">
//                         <Text >
//                                 Collectors will be included on artistic movements of those cities and they'll be able to vote on artist residencies too.
//                           </Text>
//                       </Paragraph>

//                     </Box>
//                   </AccordionPanel> */}
//             </Accordion>
//           </Box>
//         )
//       }
//     </ResponsiveContext.Consumer>
//   </Grommet>
// );

const OnTheWall = () => (
  <Grommet>
    {/* <Heading size="medium" textAlign="center">
      {" "}
      a metaversal solidarity, on the walls.
    </Heading> */}

    <Box>
      <Image
        src="./footer_wave_colored_sky.svg"
        maxWidth="100%"
        alt="#87ceeb, aka. sky blue"
      ></Image>
    </Box>

    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <>
            <Heading size="xsmall" textAlign="center">
              {" "}
              a metaversal solidarity, <br></br>
              on the wall"
            </Heading>
          </>
        ) : (
          <>
            <Heading size="medium" textAlign="center">
              {" "}
              a metaversal solidarity, on the walls
            </Heading>
          </>
        )
      }
    </ResponsiveContext.Consumer>

    {/* /////////// */}

    <ResponsiveContext.Consumer>
      {(size) =>
        size === "small" ? (
          <Box direction="column">
            <Box
              animation={{
                type: "slideUp",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./a_pseudo_banksy_mint.png"
                width="464px"
                height="448px"
                margin="32px"
              ></Image>
            </Box>

            {"     "}
            <Anchor
              color="orange"
              alignSelf="center"
              size="medium"
              href="https://en.grafisch-studio.de/product-page/zeichnung-werknummer-799"
              target="_blank"
            >
              a pseudo Banksy piece, anonymously and generously sharing all that
              digital version of the wall atNFT will make
            </Anchor>
            <Box
              animation={{
                type: "slideDown",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./real_metaverse.png"
                width="464px"
                height="448px"
                margin="32px"
              ></Image>
            </Box>
          </Box>
        ) : (
          <Box direction="row">
            <Box
              animation={{
                type: "slideUp",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./a_pseudo_banksy_mint.png"
                width="576px"
                height="558px"
                margin="32px"
              ></Image>
            </Box>
            <Box
              animation={{
                type: "slideDown",
                delay: 20,
                duration: 1000,
              }}
            >
              <Image
                src="./real_metaverse.png"
                width="576px"
                height="558px"
                margin="32px"
              ></Image>
            </Box>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>

    <Box>
      <Image
        src="./footer_wave_colored_orange.svg"
        maxWidth="100%"
        alt="orange"
      ></Image>
    </Box>

    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 320">
      <path
        fill="#ff5500"
        fill-opacity="0.8"
        d="M0,64L96,96L192,128L288,192L384,128L480,64L576,192L672,64L768,288L864,128L960,96L1056,128L1152,64L1248,32L1344,192L1440,288L1440,320L1344,320L1248,320L1152,320L1056,320L960,320L864,320L768,320L672,320L576,320L480,320L384,320L288,320L192,320L96,320L0,320Z"
      ></path>
    </svg> */}
  </Grommet>
);

const DiscordButton = (props) => (
  <Anchor href="https://discord.gg/EXN7Mta2wu" target="_blank" color="black">
    <Box
      tag="footer"
      direction="row"
      justify="center"
      pad="medium"
      gap="medium"
      //flex={true}
      background="#5865F2"
      round="large"
      animation={{
        type: "jiggle",
        delay: 20,
        duration: 1000,
      }}
    >
      <Text size="large" marginTop="20">
        discord
      </Text>
      <Image
        src="https://i.pinimg.com/736x/34/ea/20/34ea20e0747020c021677987211a6353.jpg"
        width="60x"
        height="60px"
      />
    </Box>{" "}
  </Anchor>
);

const FooterSection = () => (
  <>
    <Box direction="column">
      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Box direction="row">
          <Text size="xxlarge">$START platform DAO{" |> "}</Text>
        </Box>

        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          <Image src="habitat_logo.png" width="144px" height="36px"></Image>
        </Anchor>
      </Box>

      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Box direction="row">
          <Text size="xxlarge">$START ERC20 token {" |> "}</Text>
        </Box>

        <Anchor
          href="https://blockscout.com/xdai/mainnet/token/0x51f3eD55d11C806AA014794cDce29ea16619635C/token-transfers"
          target="_blank"
          color="white"
        >
          <Image src="xdai_stable_chain.png" width="144px" height="36px"></Image>
        </Anchor>
      </Box>
  
      <DiscordButton />
      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        margin="medium"
        //flex={true}
        background="#323001"
      >
        <Anchor
          href="https://github.com/stateful-art"
          target="_blank"
          color="white"
        >
          <Text size="large">code</Text>
        </Anchor>
        {"|"}

        <Anchor
          href="https://miro.com/app/board/o9J_l3gy0-U=/"
          target="_blank"
          color="white"
        >
          {/* {"|  "} */}
          <Text size="large">design canvas</Text>
        </Anchor>

        {"|"}

        <Anchor
          href="https://twitter.com/StatefulArt"
          target="_blank"
          color="white"
        >
          {" "}
          <Text size="large">twitter</Text>
        </Anchor>
      </Box>

      <Box align="center" justify="center" margin="30p" background="green">
        <Anchor
          href="https://trello.com/b/DzBmDMd9/statefulart"
          target="_blank"
          color="white"
        >
          {" "}
          <Text size="  large">project evolution</Text>
        </Anchor>
      </Box>

      {/* <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          blog @ substack (soon)
        </Anchor>
      </Box> */}

      <Box align="center" justify="center" margin="30p">
        <Text size="xlarge" margin="20px">
          {" "}
          contact@stateful.art
        </Text>
      </Box>
      <Box align="center" justify="center" margin="30p">
        <Anchor
          href="https://www.youtube.com/watch?v=QnJFhuOWgXg"
          target="_blank"
        >
          <Paragraph size="large"> the revolution will be minted</Paragraph>
        </Anchor>
        <Directions color="red" />

        <Text size="small"> © all rights left </Text>
      </Box>
    </Box>
  </>
);

function App() {
  return (
    <Grommet theme={theme}>
      <Box align="center" background="black" justify="end" direction="column">
        <Box
          direction="column"
          align="center"
          background="black"
          size="large"
          animation={{
            type: "fadeIn",
            delay: 20,
            duration: 4000,
          }}
        >
          {/* top logo here */}

          <Box
            animation={{
              type: "zoomOut",
              delay: 0,
              duration: 16000,
            }}
          >
            <LogoBig />
            {/* <ResponsiveContext.Consumer>
              {(size) => (size === "small" ? <LogoSmall /> : <LogoBig />)}
            </ResponsiveContext.Consumer> */}
          </Box>

          <Image
            src="./Ryn_Shaparenko_worknumber_799.png"
            style={{ maxWidth: "42%" }}
            alt="drawing by Ryn Shaparenko: worknumber 799"
          ></Image>
          {"     "}
          <Anchor
            color="orange"
            alignSelf="center"
            size="medium"
            href="https://en.grafisch-studio.de/product-page/zeichnung-werknummer-799"
            target="_blank"
          >
            Berliner artist Ryn Shaparenko's drawing {"<\\"} worknumber 799
          </Anchor>

          <Box justify="center" alignContent="center" size="large">
            <Heading size="small" alignSelf="center">
              <Box
                direction="row"
                pad="small"
                gap="small"
                alignSelf="center"
                size="large"
                marginTop="20%"
              >
                <Paragraph alignSelf="center" size="Xlarge" textAlign="start">
                
                  <Anchor
                    color=""
                    background="yellow"
                    href="https://en.wikipedia.org/wiki/Post-structuralism"
                    target="_blank"
                  >
                    {" "}
                    post-structural
                  </Anchor>
                  ist & progressive art direction in decentralised governance
                  and tokenomics. <br></br> <br></br> this is our metaverse, this is our restoration.
                </Paragraph>

                <Paragraph alignSelf="center" size="Xlarge" textAlign="end">
                  $START a metaversal revolution with love, peace, and
                  creativity.
                  <br></br>
                  for the 21st century.
                  <Anchor
                    href="https://www.interaction-design.org/literature/topics/wicked-problems"
                    target="_blank"
                  >
                    {" "}
                    everyday {"& "}
                    everywhere.{" "}
                  </Anchor>
                  {/* add soulstorm here */}
                </Paragraph>
              </Box>

              <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Box direction="row">
          <Text size="xxlarge">$START DAO{" |> "}</Text>
        </Box>

        <Anchor
          href="https://0xhabitat.org/app/#habitat-community,0xbb2fe36ba4fb98a3b268a3d7ee872081ad0155376abbbb8cf91d97275ac8ec58"
          target="_blank"
          color="white"
        >
          <Image src="habitat_logo.png" width="200px" height="50px"></Image>
        </Anchor>
      </Box>

      <Box
        tag="footer"
        direction="row"
        justify="center"
        pad="small"
        gap="small"
        //flex={true}
        background="black"
      >
        <Box direction="row">
          <Text size="xxlarge">$START coin {" |> "}</Text>
        </Box>

        <Anchor
          href="https://blockscout.com/xdai/mainnet/token/0x51f3eD55d11C806AA014794cDce29ea16619635C"
          target="_blank"
          color="white"
        >
          <Image src="xdai_stable_chain.png" width="200px" height="50px"></Image>
        </Anchor>
      </Box>
  

              <Box justify="center" alignContent="center" size="large">
                <ArtMovements direction={"row"} />
              </Box>

              <Box justify="center" alignContent="center" size="large">
                <OurSongs />
              </Box>

              <Box justify="center" alignContent="center" size="large">
                <CoreValues />
              </Box>

              <Heading size="medium" alignSelf="center">
                {" "}
                come, as you are{" "}
              </Heading>
              <Box size="large">
                {/* <Paragraph alignSelf="center" size="large" textAlign="center">
                  introducing audiences/residents/citizens side activated and
                  engaged collective governance, and even ungovernance
                  mechanisms to develop uniquely, sovereignly yet still,
                  <Text size="large" background="orange">
                    united in globally network of solidarity.
                  </Text>
                  "
                </Paragraph> */}
              </Box>
              {/* <Box
                background="#323001"
                animation={{
                  type: "pulse",projec
                  delay: 300,
                  duration: 2400,
                }}
              >
                what ; why ; how ; where
              </Box> */}
            </Heading>
          </Box>

          <DiscordButton />
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                fill-opacity="1"
                d="M0,0L90,288L180,224L270,96L360,128L450,224L540,32L630,96L720,256L810,128L900,160L990,192L1080,192L1170,288L1260,128L1350,128L1440,96L1440,320L1350,320L1260,320L1170,320L1080,320L990,320L900,320L810,320L720,320L630,320L540,320L450,320L360,320L270,320L180,320L90,320L0,320Z"
              ></path>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="0.73" d="M0,288L20,266.7C40,245,80,203,120,170.7C160,139,200,117,240,128C280,139,320,181,360,197.3C400,213,440,203,480,208C520,213,560,235,600,256C640,277,680,299,720,272C760,245,800,171,840,160C880,149,920,203,960,234.7C1000,267,1040,277,1080,277.3C1120,277,1160,267,1200,266.7C1240,267,1280,277,1320,240C1360,203,1400,117,1420,74.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                fill-opacity="1"
                d="M0,160L90,288L180,224L270,128L360,224L450,256L540,320L630,32L720,0L810,192L900,160L990,64L1080,320L1170,320L1260,224L1350,128L1440,96L1440,0L1350,0L1260,0L1170,0L1080,0L990,0L900,0L810,0L720,0L630,0L540,0L450,0L360,0L270,0L180,0L90,0L0,0Z"
              ></path>
            </svg> */}
          </Box>

          {/* <Box direction="column">
            <Box
              // tag="footer"
              direction="row"
              justify="center"
              pad="small"
              gap="small"
              //flex={true}
              background="black"
              margin="large"
            ></Box>
          </Box> */}

          <Box justify="center" alignContent="center">
            <CaretUp color="red" />
          </Box>

          {/* <ResponsiveContext.Consumer>
            {(size) => (size === "small" ? <LogoSmall /> : <LogoBig />)}
          </ResponsiveContext.Consumer> */}

          {/* <ResponsiveContext.Consumer>
            {(size) =>
              size === "small" ? (
                <GenreCardsVertical direction={"column"} />
              ) : (
                <ArtMovements direction={"row"} />
              )
            }
          </ResponsiveContext.Consumer> */}

          <Box justify="center" alignContent="center">
            <CaretDown color="yellow" />
            <CaretDown color="yellow" />
            <CaretDown color="yellow" />
          </Box>

          <Heading size="medium">what's next?</Heading>
          <OnTheWall />

          <Box align="center" alignContent="center" justify="center">
            {/* <Image
              src="./cities_bridged_by_genres.png"
              width="360px"
              height="300px"
              margin="20px"
            ></Image>

            <Box justify="center" alignContent="center">
              <CaretDown color="green" />
            </Box>

            <Box direction="row" justify="between"></Box>
            <Box justify="center" alignContent="center">
              <CaretUp color="red" />
            </Box>

            <Image
              src="./cities_bridged_by_causes.png"
              width="360px"
              height="300px"
              margin="20px"
            ></Image>

            <Box justify="center" alignContent="center">
              <CaretDown color="green" />
            </Box> */}

            {/* <ParticipantsAccordion /> */}

            {/* <Box justify="center" alignContent="center">
              <ResponsiveContext.Consumer>
            
                {(size) =>
                  size === "small" ? (
                    <Image
                      src="./impact_oriented_minting_small.png"
                      width="400x"
                      height="360px"
                      margin="10px"
                    ></Image>
                  ) : (
                    <Image
                      src="./impact_oriented_minting_large.png"
                      width="615px"
                      height="480px"
                      margin="40px"
                    ></Image>
                  )
                }
              </ResponsiveContext.Consumer>
            </Box> */}

            {/* <Box justify="center" alignContent="center">
              <CaretDown color="red" />
            </Box>
            <Paragraph>a</Paragraph>
            <Paragraph>metaverse</Paragraph>
            <Paragraph>for the future.</Paragraph>
 */}
            {/* 
<ResponsiveContext.Consumer>
            {(size) =>
              size === "small" ? (
                <Image
                  src="./welcome_to_metaverse_vision.png"
                  width="400px"
                  height="360px"
                  margin="20px"
                ></Image>
              ) : (
                <Image
                  src="./welcome_to_metaverse_vision.png"
                  width="540px"
                  height="480px"
                  margin="60px"
                ></Image>
              )
            }
          </ResponsiveContext.Consumer>             */}
          </Box>
        </Box>

        <Paragraph>{/* <MetamaskConnectButton/> */}</Paragraph>

        <FooterSection />
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
