import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Aos from 'aos';

export default function Layout({ children }) {
    const router = useRouter();
    const [siteTitle, setSiteTitle] = useState("Kantor Akuntan Publik");
    const [classLink, setClassLink] = useState(
        {
            home: {
                icon: "fa-solid fa-house",
                text: "Home",
                link: "/",
                active: "",
                text_color: "text-custom"
            },
            our_people: {
                icon: "fa-solid fa-address-card",
                text: "Our People",
                link: "our-people",
                active: "",
                text_color: ""
            },
            core_values: {
                icon: "fa-solid fa-book-open",
                text: "Core Values",
                link: "core-values",
                active: "",
                text_color: ""
            },
            our_services: {
                icon: "fa-solid fa-briefcase",
                text: "Our Services",
                link: "our-services",
                active: "",
                text_color: ""
            },
            clients: {
                icon: "fa-solid fa-users",
                text: "Clients",
                link: "clients",
                active: "",
                text_color: ""
            },
            contact: {
                icon: "fa-solid fa-address-book",
                text: "Contact Us",
                link: "contact",
                active: "",
                text_color: ""
            }
        }
    );
    const [scrolled, setScrolled] = useState(false);
    
    const [dataScroll, setDataScroll] = useState(true);

    const checkActiveLink = () => {
        switch (router.pathname) {
            case "/":
                setClassLink(
                    {
                        home: {
                            icon: "fa-solid fa-house",
                            text: "Home",
                            link: "/",
                            active: "active",
                            text_color: "text-custom"
                        },
                        our_people: {
                            icon: "fa-solid fa-address-card",
                            text: "Our People",
                            link: "our-people",
                            active: "",
                            text_color: ""
                        },
                        core_values: {
                            icon: "fa-solid fa-book-open",
                            text: "Core Values",
                            link: "core-values",
                            active: "",
                            text_color: ""
                        },
                        our_services: {
                            icon: "fa-solid fa-briefcase",
                            text: "Our Services",
                            link: "our-services",
                            active: "",
                            text_color: ""
                        },
                        clients: {
                            icon: "fa-solid fa-users",
                            text: "Clients",
                            link: "clients",
                            active: "",
                            text_color: ""
                        },
                        contact: {
                            icon: "fa-solid fa-address-book",
                            text: "Contact Us",
                            link: "contact",
                            active: "",
                            text_color: ""
                        }
                    }
                );
                break;
            case "/our-people":
                setClassLink(
                    {
                        home: {
                            icon: "fa-solid fa-house",
                            text: "Home",
                            link: "/",
                            active: "",
                            text_color: ""
                        },
                        our_people: {
                            icon: "fa-solid fa-address-card",
                            text: "Our People",
                            link: "our-people",
                            active: "active",
                            text_color: "text-custom"
                        },
                        core_values: {
                            icon: "fa-solid fa-book-open",
                            text: "Core Values",
                            link: "core-values",
                            active: "",
                            text_color: ""
                        },
                        our_services: {
                            icon: "fa-solid fa-briefcase",
                            text: "Our Services",
                            link: "our-services",
                            active: "",
                            text_color: ""
                        },
                        clients: {
                            icon: "fa-solid fa-users",
                            text: "Clients",
                            link: "clients",
                            active: "",
                            text_color: ""
                        },
                        contact: {
                            icon: "fa-solid fa-address-book",
                            text: "Contact Us",
                            link: "contact",
                            active: "",
                            text_color: ""
                        }
                    }
                );
                break;
            case "/core-values":
                setClassLink(
                    {
                        home: {
                            icon: "fa-solid fa-house",
                            text: "Home",
                            link: "/",
                            active: "",
                            text_color: ""
                        },
                        our_people: {
                            icon: "fa-solid fa-address-card",
                            text: "Our People",
                            link: "our-people",
                            active: "",
                            text_color: ""
                        },
                        core_values: {
                            icon: "fa-solid fa-book-open",
                            text: "Core Values",
                            link: "core-values",
                            active: "active",
                            text_color: "text-custom"
                        },
                        our_services: {
                            icon: "fa-solid fa-briefcase",
                            text: "Our Services",
                            link: "our-services",
                            active: "",
                            text_color: ""
                        },
                        clients: {
                            icon: "fa-solid fa-users",
                            text: "Clients",
                            link: "clients",
                            active: "",
                            text_color: ""
                        },
                        contact: {
                            icon: "fa-solid fa-address-book",
                            text: "Contact Us",
                            link: "contact",
                            active: "",
                            text_color: ""
                        }
                    }
                );
                break;
            case "/our-services":
                setClassLink(
                    {
                        home: {
                            icon: "fa-solid fa-house",
                            text: "Home",
                            link: "/",
                            active: "",
                            text_color: ""
                        },
                        our_people: {
                            icon: "fa-solid fa-address-card",
                            text: "Our People",
                            link: "our-people",
                            active: "",
                            text_color: ""
                        },
                        core_values: {
                            icon: "fa-solid fa-book-open",
                            text: "Core Values",
                            link: "core-values",
                            active: "",
                            text_color: ""
                        },
                        our_services: {
                            icon: "fa-solid fa-briefcase",
                            text: "Our Services",
                            link: "our-services",
                            active: "active",
                            text_color: "text-custom"
                        },
                        clients: {
                            icon: "fa-solid fa-users",
                            text: "Clients",
                            link: "clients",
                            active: "",
                            text_color: ""
                        },
                        contact: {
                            icon: "fa-solid fa-address-book",
                            text: "Contact Us",
                            link: "contact",
                            active: "",
                            text_color: ""
                        }
                    }
                );
                break;
            case "/clients":
                setClassLink(
                    {
                        home: {
                            icon: "fa-solid fa-house",
                            text: "Home",
                            link: "/",
                            active: "",
                            text_color: ""
                        },
                        our_people: {
                            icon: "fa-solid fa-address-card",
                            text: "Our People",
                            link: "our-people",
                            active: "",
                            text_color: ""
                        },
                        core_values: {
                            icon: "fa-solid fa-book-open",
                            text: "Core Values",
                            link: "core-values",
                            active: "",
                            text_color: ""
                        },
                        our_services: {
                            icon: "fa-solid fa-briefcase",
                            text: "Our Services",
                            link: "our-services",
                            active: "",
                            text_color: ""
                        },
                        clients: {
                            icon: "fa-solid fa-users",
                            text: "Clients",
                            link: "clients",
                            active: "active",
                            text_color: "text-custom"
                        },
                        contact: {
                            icon: "fa-solid fa-address-book",
                            text: "Contact Us",
                            link: "contact",
                            active: "",
                            text_color: ""
                        }
                    }
                );
                break;
            case "/contact":
                setClassLink(
                    {
                        home: {
                            icon: "fa-solid fa-house",
                            text: "Home",
                            link: "/",
                            active: "",
                            text_color: ""
                        },
                        our_people: {
                            icon: "fa-solid fa-address-card",
                            text: "Our People",
                            link: "our-people",
                            active: "",
                            text_color: ""
                        },
                        core_values: {
                            icon: "fa-solid fa-book-open",
                            text: "Core Values",
                            link: "core-values",
                            active: "",
                            text_color: ""
                        },
                        our_services: {
                            icon: "fa-solid fa-briefcase",
                            text: "Our Services",
                            link: "our-services",
                            active: "",
                            text_color: ""
                        },
                        clients: {
                            icon: "fa-solid fa-users",
                            text: "Clients",
                            link: "clients",
                            active: "",
                            text_color: ""
                        },
                        contact: {
                            icon: "fa-solid fa-address-book",
                            text: "Contact Us",
                            link: "contact",
                            active: "active",
                            text_color: "text-custom"
                        }
                    }
                );
                break;
        }
    }

    const handleRedirect = (link) => {
        setDataScroll(true);
        router.push(link);
    }

    const [canvasButton, setCanvasButton] = useState("fa-regular fa-compass text-white");

    const clickCanvasButton = () => {
        if (canvasButton == "fa-regular fa-compass text-white") {
            setCanvasButton("fa-sharp fa-solid fa-compass text-white");
        } else {
            setCanvasButton("fa-regular fa-compass text-white");
        }
        setDataScroll(false);
    }

    const closeCanvas = () => {
        setCanvasButton("fa-regular fa-compass text-white");
        setDataScroll(true);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
        checkActiveLink();
        const scrollNavabar = () => {
            setScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', scrollNavabar);
        return () => window.removeEventListener('scroll', scrollNavabar);
    }, [scrolled]);

    return (
        <div>
            <title>Home</title>
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'bg-dark' : 'bg-transparent'}`}>
                <div className="container-fluid">
                    <button type='button' className="navbar-brand btn" onClick={() => handleRedirect(classLink.home.link)}>
                        <img src="/images/logotimbangan.png" className='p-2 bg-body rounded-circle' alt="Bootstrap" width="40" height="40" />
                    </button>
                    <div className="d-none d-lg-block d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type='button' className={"nav-link " + classLink.home.active + " " + classLink.home.text_color} onClick={() => handleRedirect(classLink.home.link)}>
                                    <i className={classLink.home.icon}></i> {classLink.home.text}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type='button' className={"nav-link " + classLink.our_people.active + " " + classLink.our_people.text_color} onClick={() => handleRedirect(classLink.our_people.link)}>
                                    <i className={classLink.our_people.icon}></i> {classLink.our_people.text}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type='button' className={"nav-link " + classLink.core_values.active + " " + classLink.core_values.text_color} onClick={() => handleRedirect(classLink.core_values.link)}>
                                    <i className={classLink.core_values.icon}></i> {classLink.core_values.text}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type='button' className={"nav-link " + classLink.our_services.active + " " + classLink.our_services.text_color} onClick={() => handleRedirect(classLink.our_services.link)}>
                                    <i className={classLink.our_services.icon}></i> {classLink.our_services.text}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type='button' className={"nav-link " + classLink.clients.active + " " + classLink.clients.text_color} onClick={() => handleRedirect(classLink.clients.link)}>
                                    <i className={classLink.clients.icon}></i> {classLink.clients.text}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className={"nav-link " + classLink.contact.active + " " + classLink.contact.text_color} onClick={() => handleRedirect(classLink.contact.link)}>
                                    <i className={classLink.contact.icon}></i> {classLink.contact.text}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='d-lg-none'>
                        <div className="d-flex">
                            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" onClick={clickCanvasButton}>
                                <i className={canvasButton}></i>
                            </button>
                        </div>
                        <div className="offcanvas offcanvas-start" data-bs-scroll={dataScroll} tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" data-bs-backdrop="static">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Menu</h5>
                                <button type="button" onClick={closeCanvas} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body small">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <button type='button' className={'btn btn-sm ' + classLink.home.text_color} onClick={() => handleRedirect(classLink.home.link)}>
                                            <i className={classLink.home.icon}></i> {classLink.home.text}
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button type='button' className={'btn btn-sm ' + classLink.our_people.text_color} onClick={() => handleRedirect(classLink.our_people.link)}>
                                            <i className={classLink.our_people.icon}></i> {classLink.our_people.text}
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button type='button' className={'btn btn-sm ' + classLink.core_values.text_color} onClick={() => handleRedirect(classLink.core_values.link)}>
                                            <i className={classLink.core_values.icon}></i> {classLink.core_values.text}
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button className={'btn btn-sm ' + classLink.our_services.text_color} onClick={() => handleRedirect(classLink.our_services.link)}>
                                            <i className={classLink.our_services.icon}></i> {classLink.our_services.text}
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button type='button' className={'btn btn-sm ' + classLink.clients.text_color} onClick={() => handleRedirect(classLink.clients.link)}>
                                            <i className={classLink.clients.icon}></i> {classLink.clients.text}
                                        </button>
                                    </li>
                                    <li className="list-group-item">
                                        <button type='button' className={'btn btn-sm ' + classLink.contact.text_color} onClick={() => handleRedirect(classLink.contact.link)}>
                                            <i className={classLink.contact.icon}></i> {classLink.contact.text}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
            <section className="bg-dark text-white">
                <div className="container py-3">
                    <div className="row me-auto">
                        <div className="col-lg-3 col-12">
                            <div className="py-1">
                                <center>
                                    <img className="img-fluid mb-4 bg-body rounded-circle p-2" src="/images/LogoTimbangan.png" width={80} style={{ objectFit: "cover" }} />
                                </center>
                                <h5 className="fw-semibold mb-4">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                </h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-4">
                            <h3 className="d-none d-lg-block fw-semibold text-center">Quick Link</h3>
                            <h6 className="d-lg-none fw-semibold text-center">Quick Link</h6>
                            <ul className="link-light">
                                <li><button className="btn btn-sm text-white" >Home</button></li>
                                <li><button className="btn btn-sm text-white" >About Us</button></li>
                                <li><button className="btn btn-sm text-white" >Our Services</button></li>
                                <li><button className="btn btn-sm text-white" >Our Team</button></li>
                                <li><button className="btn btn-sm text-white" >Contact Us</button></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-4">
                            <h3 className="d-none d-lg-block fw-semibold text-center">Quick Link</h3>
                            <h6 className="d-lg-none fw-semibold text-center">Quick Link</h6>
                            <ul className="link-light">
                                <li><button className="btn btn-sm text-white" >Home</button></li>
                                <li><button className="btn btn-sm text-white" >About Us</button></li>
                                <li><button className="btn btn-sm text-white" >Our Services</button></li>
                                <li><button className="btn btn-sm text-white" >Our Team</button></li>
                                <li><button className="btn btn-sm text-white" >Contact Us</button></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-4">
                            <h3 className="d-none d-lg-block fw-semibold text-center">Quick Link</h3>
                            <h6 className="d-lg-none fw-semibold text-center">Quick Link</h6>
                            <ul className="link-light">
                                <li><button className="btn btn-sm text-white">Home</button></li>
                                <li><button className="btn btn-sm text-white" >About Us</button></li>
                                <li><button className="btn btn-sm text-white" >Our Services</button></li>
                                <li><button className="btn btn-sm text-white" >Our Team</button></li>
                                <li><button className="btn btn-sm text-white" >Contact Us</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}