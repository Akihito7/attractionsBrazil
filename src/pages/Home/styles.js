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

export const Attraction = styled.div`
position: relative;

display: flex;
align-items: center;
justify-content: center;
margin: 15rem 0 2rem;

width:70%;
height: 57rem;
padding: 2rem 4rem;
gap: 20px;

background: linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5));
border: 0.2rem solid #20222e;
border-radius: 100px;


@media screen and (min-width: 486px) and (max-width: 768px) {
  width: 90%;
  padding: 2rem 0;
  gap: 0px;
}


@media screen and (max-width: 485px){
   width: 100%;
   height: auto;
   flex-direction: column;
   border-radius: 50px;
   gap: 40px;
}

`

export const NumberAttraction = styled.img`

position: absolute;
top: -7%;
right: 0;


`
export const ContainerPhoto = styled.div`

width: 50%;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 485px){
   width: 100%;
   justify-content: center;
   padding-top: 2rem;
}


`

export const PhotoMain = styled.img`
width: 90%;
height: 46rem;
border-radius: 50px;


object-fit: cover;

@media screen and (max-width: 485px){
   width: 90%;
   height: 40rem;
}

`

export const AboutAttraction = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
padding: 0 4rem;

@media screen and (max-width: 485px){
   width: 100%;
   padding-bottom: 2rem;
   
}

`

export const NameCity = styled.p`


font-family: "Mark Pro Bold";
font-size: 1.6rem;
color: #8B8B8B;
text-align: justify;


`

export const NameAttraction = styled.h2`

font-family: "Mark Pro Bold";
font-size: 5rem;
color: white;
margin-bottom: 1rem;

@media screen and (min-width: 486px) and (max-width: 768px) {
  font-size: 3rem;

}

@media screen and (max-width: 485px){
   font-size: 3rem;
}

`

export const TextAboutAttraction = styled.p`


font-family: "Mark Pro Bold";
font-size: 1.4rem;
color: white;
text-align: justify;
color: #8B8B8B;

@media screen and (min-width: 486px) and (max-width: 768px) {
  font-size: 1.2rem;

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

export const CardSaid = styled.div`

flex: 0 0 auto;
padding: 2rem;

display: flex;
flex-direction: column;
justify-content: space-evenly;

background-color: #171e2f; 
margin-right: 10px; 
height: 12rem;
border-radius: 10px;
animation: slideAnimation 12s linear infinite;


  @keyframes slideAnimation {
  0%, 100% {
    transform: translateX(100px);
  }

  55%{
    transform: translateX(-650px);
  }

}

@media screen and (max-width: 485px){
  animation: slideAnimation 15s linear infinite;

  @keyframes slideAnimation {
  0%, 100% {
    transform: translateX(100px);
  }

  65%{
    transform: translateX(-1200px);
  }

}
}
    

`

export const NamePeople = styled.p`
font-family: "Mark Pro Bold";
font-size: 1.6rem;
text-transform: lowercase;
color:  #8B8B8B;
text-align: justify;

@media screen and (max-width: 485px){
font-size : 1.2rem ;
}
    

`

export const Comment = styled.p`

font-family: "Mark Pro Bold";
font-size: 1.8rem;
text-transform: lowercase;
color:  white;
text-align: justify;

@media screen and (max-width: 485px){
font-size : 1.4rem ;
}
    

`

export const ContainerPeoplesSaidTwo = styled.div`

margin-top: 3rem;
display: flex;
overflow: hidden;
width: 100vw; 

`

export const CardSaidTwo = styled.div`

flex: 0 0 auto;
padding: 2rem;

display: flex;
flex-direction: column;
justify-content: space-evenly;

background-color: #171e2f;
margin-right: 10px; 
height: 12rem;
border-radius: 10px;
animation: slideAnimationTwo 12s linear infinite;


  @keyframes slideAnimationTwo {
  0%, 100% {
    transform: translateX(-650px);
  }


  55%{
    transform: translateX(100px);
  }

}


@media screen and (max-width: 485px){
animation: slideAnimationTwo 15s linear infinite;

@keyframes slideAnimationTwo {
0%, 100% {
  transform: translateX(-1200px);
}

65%{
  transform: translateX(100px);
}

}
}



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

