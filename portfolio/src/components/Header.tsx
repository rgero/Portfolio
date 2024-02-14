import { Container, Navbar } from "react-bootstrap"

const Header = () => {

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
