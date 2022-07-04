import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { VK, Instagram, Whatsapp, Telegram } from '../../svg.module'
import './footer.css'

const Footer = () => {

    let date = new Date().getFullYear()
    if(date == 2022) {
        date = ''
    }
    else date = ` - ${date}`

    return (
        <footer className='Footer mt-4'>
            <Container>
                <p className="text-left mt-4 mb-2">Copyright © 2022{date} <b>Hold.com™</b>. Все права защищены.</p>
                <p className="text-left mt-2 mb-2"><b>Hold.com™</b> — часть Hold Holdings Inc., региональный лидера в сфере онлайн-туризма и сопутствующих услуг.</p>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href='!#'><VK/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='!#'><Instagram/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='!#'><Whatsapp/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='!#'><Telegram/></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Link to={false}>Дома и апартаменты</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={false}>Апартаменты/квартиры</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={false}>Курортные отели</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={false}>Гостевые дома</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={false}>Виллы</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={false}>Хостелы</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </footer>
    )
}
export default Footer