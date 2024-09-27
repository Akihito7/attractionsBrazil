import {
  Container,
  NumberAttraction,
  ContainerPhoto,
  PhotoMain,
  AboutAttraction,
  NameCity,
  NameAttraction,
  TextAboutAttraction,
} from "./styles"

export function Attraction({
  city,
  name,
  description,
  imgOrderUrl,
  imgAttraction,
}) {
  return (
    <Container>
      <NumberAttraction src={imgOrderUrl} alt="imagem do numero da atração" />
      <ContainerPhoto>
        <PhotoMain
          src={imgAttraction}
        />
      </ContainerPhoto>
      <AboutAttraction>
        <NameCity>{city}</NameCity>
        <NameAttraction>{name}</NameAttraction>
        <TextAboutAttraction>
          {description}
        </TextAboutAttraction>
      </AboutAttraction>
    </Container>
  )
}