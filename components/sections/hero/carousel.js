import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Link,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function HeroCarousel() {
  const [slider, setSlider] = useState({ Slider: null });

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [

    {
      href: '#',
      title: 'CSUCC Gymnasium',
      text:
        "",
      image:
        'https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80',
     
    },
    {
      href: '#',
      title: 'CSUCC Pool',
      text:
        "",
      image:
        'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'300px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        onClick={() => slider?.slickPrev()}
        transform={'translate(0%, -50%)'}
        zIndex={2}
      >
        <BiLeftArrowAlt size="30px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="30px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Link href={card.href}>
            <Box
              key={index}
              height={'100vh'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              objectFit="cover"
              
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="25%"
                  transform="translate(0, -50%)">
                  <Heading align={'center'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.50">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}