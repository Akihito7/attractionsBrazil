import styled from "styled-components";

export const Container = styled.div`

width: 100vw;

text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
scroll-behavior: smooth;

span{
background: linear-gradient(-55deg, #ffffff, #7939da, #ff003d, #59a8ec,#ffffff);
background-size: 400% 100%;
animation: degrade 20s linear infinite;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@keyframes degrade {
  0%{
    background-position-x: 0%;
  }

  100%{
    background-position-x: 400% ;
  }

}
}

`

export const Main = styled.div`

width: 100vw;
`

export const ContainerTitle = styled.div`
width: 100vw;
height: 80vh;
margin-top: 5rem;

display: flex;
align-items: center;
padding: 0rem 10rem;


@media screen and (max-width: 485px){
width: 100vw;
padding: 0 2rem;
height: 50vh;
margin-top: 0;
align-items: end;
}
`

export const Title = styled.h1`

font-family: "Mark Pro Bold";
font-size: 8rem;
color:white;
text-transform: lowercase;
line-height: 7rem;
width: 70rem;


@media screen and (min-width: 486px) and (max-width: 768px) {
  font-size: 7rem;

}



@media screen and (max-width: 485px){
font-family: "Mark Pro Bold";
font-size: 4.2rem;
line-height: 4rem;
}
`

export const Explore = styled.button`

color: gray;
font-family: "Mark Pro Bold";
margin-left: 10rem;
font-size: 1.4rem;


border: 1px solid gray;
background: none;
width: 15rem;
height: 3rem;

@media screen and (max-width: 485px){
   margin: 10rem 0 5rem 2rem;
}
`

export const ContainerAttractions = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
overflow-x: hidden;

`

export const Places = styled.h2`

font-family: "Mark Pro Bold";
font-size: 5rem;
color: white;
text-align: justify;
padding: 20rem 10rem 0 10rem;

background: linear-gradient(-55deg, #ffffff, #59a8ec, #ffffff);
background-size: 400% 100%;
animation: degrade 20s linear infinite;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@keyframes degrade {
  0%{
    background-position-x: 0%;
  }

  100%{
    background-position-x: 400% ;
  }

}


@media screen and (max-width: 485px){
padding:  15rem 2rem 5rem;
font-size: 4rem;
}



`

export const ContainerPeoplesSaid = styled.div`

margin-top: 20rem;
background-color: #050810;
width: 100vw;
height: auto;

padding-bottom: 10rem;

`
export const PeoplesSaid = styled.h2`
font-family: "Mark Pro Bold";
font-size: 5rem;
color: white;
text-align: justify;
padding: 8rem 5rem;

@media screen and (max-width: 485px){
padding: 8rem 2rem;
font-size: 3.6rem;
text-align: left;

}

`

export const ContainerSliderSaid = styled.div`
display: flex;
overflow: hidden;
width: 100vw; 
`

export const ContainerPeoplesSaidTwo = styled.div`

margin-top: 3rem;
display: flex;
overflow: hidden;
width: 100vw; 

`
export const EndExperience = styled.p`


padding: 15rem 10rem 2rem;
font-family: "Mark Pro Bold";
font-size: 4rem;
text-transform: lowercase;
color:  white;
text-align: justify;

@media screen and (max-width: 485px){
  
font-size: 3.6rem;
padding: 15rem 2rem 2rem;
text-align: left;
}

`

export const EndText = styled.p`

padding: 0 10rem;
font-family: "Mark Pro Bold";
font-size: 1.6rem;
text-transform: lowercase;
color: #8B8B8B;
text-align: justify;
width: 80rem;

@media screen and (max-width: 485px){
padding: 0 2rem;
width: auto;
text-align: left;

}

`

export const WithLove = styled.h3`

margin-top: 6rem;
padding: 0 10rem;
font-family: "Mark Pro Bold";
font-size: 3rem;
text-transform: lowercase;
color: white;
text-align: justify;
margin-bottom: 10rem;

@media screen and (max-width: 485px){
padding: 0 2rem;
text-align: left;

}


`

