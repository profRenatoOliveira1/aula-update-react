import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './NavBar.module.css';

function NavBar() {
    return (
        <>
            <Navbar className={ style.myNavbar } data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" className={ style.myNavbarBrand }>HOME</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/listagem" className={ style.myNavbarBrand }>LISTAGEM</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar