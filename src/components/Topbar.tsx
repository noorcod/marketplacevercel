import Image from "next/image";
import Link from "next/link";
import { Col, Dropdown, Row } from "react-bootstrap";
import { announcement, favourite, user } from "../../public/icons/index";
import style from "./../styles/Topbar.module.css";
import {useEffect,useState} from "react"
const Topbar = () => {
const [removeUser, setremoveUser] = useState(false)

 const Logout = () => {
  if (typeof window !== 'undefined') {

   localStorage.removeItem("accessToken")
   localStorage.removeItem("user")
     } 
       setremoveUser(true)
 }

  const userData:any|string|null=  typeof window !== 'undefined'? JSON.parse(localStorage.getItem("user")as string):""

  const token = typeof window !== 'undefined' ?localStorage.getItem("accessToken"):""
  useEffect(() => {
  
  }, [removeUser])
  return (
    <main className="main">
      <Row className={`py-2 ${style.banner}`}>
        <Col
          className={`d-flex align-items-center px-0 gap-2 ${style.bannerText}`}
        >
          <Image
            className={style.announcement}
            src={announcement}
            alt={"announcement"}
            width={20}
            height={20}
          />
          <span>
            Important notice goes here{" "}
            <Link className="link text-decoration-underline" href="/">
              Know more
            </Link>
          </span>
        </Col>
        <Col
          className={` align-items-center justify-content-end pe-0 gap-3 ${style.rightBanner}`}
        >
          <div className="d-flex align-items-center gap-2">
            <Image src={favourite} alt="favourite" width={15} height={15} />
            <span>
              Saved items(<span className="link">0</span>)
            </span>
          </div>
           <div className="d-flex align-items-center ">
          {token&& <Dropdown className="picon px-0" >
           <Dropdown.Toggle className="px-0" variant="" id="dropdown-basic">
            <Image src={user} alt="user" width={15} height={15} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
        <Dropdown.Item  onClick={Logout} href="#/action-1">
         Logout
          </Dropdown.Item>
       
      </Dropdown.Menu>
            </Dropdown>}
            <span >{userData?.first_name}</span>
            { !token?<a  href="/login">Sign in</a>:""}
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Topbar;
