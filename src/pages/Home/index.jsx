import React from "react";
import {
  Container,
  Main,
  ContainerTitle,
  Title,
  Explore,
  ContainerAttractions,
  Places,
  ContainerPeoplesSaid,
  PeoplesSaid,
  ContainerSliderSaid,
  ContainerPeoplesSaidTwo,
  EndExperience,
  EndText,
  WithLove,

} from "./styles";

import { Attraction } from "../../components/attractions";
import { attractions } from "../../utils/attractions";
import { CardPeopleSaid } from "../../components/cardPeopleSaid";
import { commentsData, commentsInverseData } from "../../utils/comments";

export function Home() {
  return (
    <Container>
      <Main>
        <ContainerTitle>
          <Title>Pontos <span>turísticos</span> que você deve ir no brasil</Title>
        </ContainerTitle>
      </Main>

      <Explore>Explore</Explore>


      <Places>Lugares incriveis</Places>
      <ContainerAttractions>
        {
          attractions.map((attraction, index) => (
            <Attraction
              key={index}
              city={attraction.city}
              name={attraction.name}
              description={attraction.description}
              imgOrderUrl={attraction.imgOrderUrl}
              imgAttraction={attraction.imgAttraction}
            />
          ))
        }

      </ContainerAttractions>

      <ContainerPeoplesSaid>

        <PeoplesSaid>
          Pessoas disseram:
        </PeoplesSaid>

        <ContainerSliderSaid>
          {
            commentsData.map((item, index) => (
              <CardPeopleSaid
                key={index}
                username={item.namePeople}
                comment={item.comment}
                inverse={false} />
            ))
          }
        </ContainerSliderSaid>

        <ContainerPeoplesSaidTwo>
          {
            commentsInverseData.map((item, index) => (
              <CardPeopleSaid
                key={index}
                username={item.namePeople}
                comment={item.comment}
                inverse={true}
              />
            ))
          }

        </ContainerPeoplesSaidTwo>
      </ContainerPeoplesSaid>

      <EndExperience>
        Você chegou ao fim da experiência!
      </EndExperience>
      <EndText>
        Mas esses são apenas 4 pontos turisticos do nosso Brasil, há muitos outros interessantes e agrádavel tanto quanto os que foram mostrados em meu site, sinta-se a vontade para explorar tudo!
      </EndText>
      <WithLove>
        O site foi feito com muito amor ❤️
      </WithLove>
    </Container>
  )
}