import {
  Container, 
  NamePeople,
  Comment,
} from "./style"

export function CardPeopleSaid({ username, comment, inverse }) {
  return (
    <Container inverse={inverse}>
      <NamePeople>
        {username}
      </NamePeople>
      <Comment>
        {comment}
      </Comment>
    </Container>
  )
}