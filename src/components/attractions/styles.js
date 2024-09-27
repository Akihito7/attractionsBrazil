import styled from "styled-components"

export const Container = styled.div`
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