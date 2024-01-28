import React from "react";
import {
    Container,
    Main,
    ContainerTitle,
    Title,
    Explore,
    ContainerAttractions,
    Places,
    NumberAttraction,
    Attraction,
    ContainerPhoto,
    PhotoMain,
    AboutAttraction,
    NameCity,
    NameAttraction,
    TextAboutAttraction,
    ContainerPeoplesSaid,
    PeoplesSaid,
    ContainerSliderSaid,
    CardSaid,
    NamePeople,
    Comment,
    ContainerPeoplesSaidTwo,
    CardSaidTwo,
    EndExperience,
    EndText,
    WithLove,

} from "./styles";


export function Home() {
    return (
        <Container>
            <Main>
                <ContainerTitle>
                    <Title>pontos <span>turísticos</span> que você deve ir no brasil</Title>
                </ContainerTitle>
            </Main>

            <Explore>Explore</Explore>


            <Places>Lugares incriveis</Places>
            <ContainerAttractions>

                <Attraction>
                    <NumberAttraction src="01.svg" alt="imagem do numero da atração"/>
                    <ContainerPhoto>
                        <PhotoMain src="cristo-redentor.jpg" />
                    </ContainerPhoto>
                    <AboutAttraction>
                        <NameCity>Rio de Janeiro</NameCity>
                        <NameAttraction>Cristo Redentor</NameAttraction>
                        <TextAboutAttraction>
                            O Cristo Redentor é uma icônica estátua de Jesus Cristo localizada no topo do morro do Corcovado, na cidade do Rio de Janeiro, Brasil. Construída entre 1922 e 1931, a estátua é um símbolo marcante do país e uma das Sete Maravilhas do Mundo Moderno. Com seus braços abertos, a estátua mede aproximadamente 30 metros de altura e oferece uma vista panorâmica espetacular da cidade e da Baía de Guanabara.
                        </TextAboutAttraction>
                    </AboutAttraction>
                </Attraction>

                <Attraction>
                <NumberAttraction src="02.svg" alt="imagem do numero da atração"/>
                    <ContainerPhoto>
                        <PhotoMain src="paodeacucar.jpg" />
                    </ContainerPhoto>
                    <AboutAttraction>
                        <NameCity>Rio de Janeiro</NameCity>
                        <NameAttraction>Pão de Açucar</NameAttraction>
                        <TextAboutAttraction>
                            O Pão de Açúcar, uma das atrações mais icônicas da cidade do Rio de Janeiro, é uma montanha imponente que oferece uma das vistas mais deslumbrantes da paisagem carioca. Situado na entrada da Baía de Guanabara, o Pão de Açúcar é acessado por um teleférico que leva os visitantes em uma jornada panorâmica incomparável.
                        </TextAboutAttraction>
                    </AboutAttraction>
                </Attraction>

                <Attraction>
                <NumberAttraction src="03.svg" alt="imagem do numero da atração"/>
                    <ContainerPhoto>
                        <PhotoMain src="fozdoiguacu.jpg" />
                    </ContainerPhoto>
                    <AboutAttraction>
                        <NameCity>Foz do Iguaçu</NameCity>
                        <NameAttraction>Cataratas Iguaçu</NameAttraction>
                        <TextAboutAttraction>
                            Foz do Iguaçu, situada na tríplice fronteira entre Brasil, Argentina e Paraguai, é lar de uma das maravilhas naturais mais impressionantes do mundo: as Cataratas do Iguaçu. Este espetáculo majestoso de águas tumultuadas se estende por aproximadamente 2,7 quilômetros ao longo do Rio Iguaçu, formando um total de mais de 270 quedas d'água.
                        </TextAboutAttraction>
                    </AboutAttraction>
                </Attraction>

                <Attraction>
                <NumberAttraction src="04.svg" alt="imagem do numero da atração"/>
                    <ContainerPhoto>
                        <PhotoMain src="museu.jpg" />
                    </ContainerPhoto>
                    <AboutAttraction>
                        <NameCity>São Paulo</NameCity>
                        <NameAttraction>Museu do Ipiranga</NameAttraction>
                        <TextAboutAttraction>
                            O Museu Paulista, popularmente conhecido como Museu do Ipiranga, é um tesouro histórico situado na cidade de São Paulo. Inaugurado em 1895, o museu desempenha um papel fundamental na preservação e exibição da rica história do Brasil.                        </TextAboutAttraction>
                    </AboutAttraction>
                </Attraction>
            </ContainerAttractions>

            <ContainerPeoplesSaid>

                <PeoplesSaid>
                    Pessoas disseram:
                </PeoplesSaid>

                <ContainerSliderSaid>
                    <CardSaid>
                        <NamePeople>
                            @mariaLuiza
                        </NamePeople>
                        <Comment>
                            Eu amei o brasil! que lugar maravilhoso
                        </Comment>
                    </CardSaid>

                    <CardSaid>
                        <NamePeople>
                            @gimenez7
                        </NamePeople>
                        <Comment>
                            O Rio de janeiro é encantador ❤️
                        </Comment>
                    </CardSaid>

                    <CardSaid>
                        <NamePeople>
                            @nazarialucia
                        </NamePeople>
                        <Comment>
                            Salvador tem um clima muito gostoso!
                        </Comment>
                    </CardSaid>

                    <CardSaid>
                        <NamePeople>
                            @l7nnon
                        </NamePeople>
                        <Comment>
                            Que vista do pão de açucar! 🚀
                        </Comment>
                    </CardSaid>

                    <CardSaid>
                        <NamePeople>
                            @anylima
                        </NamePeople>
                        <Comment>
                            Se puderem, visitem esse pais, beijos da turquia
                        </Comment>
                    </CardSaid>

                </ContainerSliderSaid>

                <ContainerPeoplesSaidTwo>
                    <CardSaidTwo>
                        <NamePeople>
                            @xama
                        </NamePeople>
                        <Comment>
                            Venham conhecer a bahia
                        </Comment>
                    </CardSaidTwo>

                    <CardSaidTwo>
                        <NamePeople>
                            @kaykybross
                        </NamePeople>
                        <Comment>
                            O brasil tem muitas maravilhas🔥🚀
                        </Comment>
                    </CardSaidTwo>

                    <CardSaidTwo>
                        <NamePeople>
                            @mayarass
                        </NamePeople>
                        <Comment>
                            adorei o povo brasileiro, saudades 😄
                        </Comment>
                    </CardSaidTwo>

                    <CardSaidTwo>
                        <NamePeople>
                            @miguelsv
                        </NamePeople>
                        <Comment>
                           brasil é tudo de bom ne amores 😍
                        </Comment>
                    </CardSaidTwo>

                    <CardSaidTwo>
                        <NamePeople>
                            @martinha10
                        </NamePeople>
                        <Comment>
                            é um prazer e honra, morar aqui! 🩷
                        </Comment>
                    </CardSaidTwo>

                </ContainerPeoplesSaidTwo>
            </ContainerPeoplesSaid>
            
            <EndExperience>
                Você chegou ao fim da experiência!
            </EndExperience>
            <EndText>
                Mas esses são apenas 4 pontos turisticos do nosso Brasil, há muitos outros interresante e agrádavel tanto quanto os que foram mostrados em meu site, sinta-se avontade para explorar tudo!
            </EndText>
            <WithLove>
                O site foi feito com muito amor ❤️
            </WithLove>
        </Container>
    )
}