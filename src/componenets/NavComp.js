import React from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap'

export default function NavComp({setIsAuth}) {

  const boolValue=window.localStorage.getItem("isAuth")

  const signOut = ()=>{
    localStorage.clear()
    setIsAuth(false)
  }



  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Blog It</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/blog">Write</Nav.Link>
            {!boolValue ? <Nav.Link href="/login">Login</Nav.Link> : <Nav.Link href="/" onClick={signOut}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
