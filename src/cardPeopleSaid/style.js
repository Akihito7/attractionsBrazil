import styled from "styled-components"

export const Container = styled.div`

flex: 0 0 auto;
padding: 2rem;

display: flex;
flex-direction: column;
justify-content: space-evenly;

background-color: #171e2f; 
margin-right: 10px; 
height: 12rem;
border-radius: 10px;
animation: ${({ inverse }) =>
  inverse ? "slideAnimationInverse 12s linear infinite": "slideAnimation 12s linear infinite"};


  @keyframes slideAnimation {
  0%, 100% {
    transform: translateX(100px);
  }

  55%{
    transform: translateX(-650px);
  }

}

@keyframes slideAnimationInverse {
  0%, 100% {
    transform: translateX(-650px);
  }


  55%{
    transform: translateX(100px);
  }

}


@media screen and (max-width: 485px){
  animation: ${({ inverse }) =>
  inverse ? "slideAnimationInverse 12s linear infinite": "slideAnimation 12s linear infinite"};


  @keyframes slideAnimation {
  0%, 100% {
    transform: translateX(100px);
  }

  65%{
    transform: translateX(-1200px);
  }

}

@keyframes slideAnimationInverse { 
0%, 100% {
  transform: translateX(-1200px);
}

65%{
  transform: translateX(100px);
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