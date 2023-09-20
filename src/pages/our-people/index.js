import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import TemplatePages from "@/components/templatepages";

export default function OurPeople() {

    const [navTabActive, setNavTabActive] = useState(
        {
            founder: "active",
            lawyers: "text-white",
            counsels: "text-white"
        }
    )

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items to display per page
    const [modalDatas, setModalDatas] = useState({
        nama: "",
        jabatan: "",
        pendidikan: "",
        pengalaman: "",
        telepon: "",
        email: "",
        foto: ""
    });

    const handleModalData = (nama, jabatan, pendidikan, pengalaman, telepon, email, foto) => {
        setModalDatas(
            {
                nama: nama,
                jabatan: jabatan,
                pendidikan: pendidikan,
                pengalaman: pengalaman,
                telepon: telepon,
                email: email,
                foto: foto
            }
        );
    }

    const [attorneys, setAttorneys] = useState(
        {
            card_title: "Founder",
            data: [
                {
                    name: "Ir. Nelson Simanjuntak, SH., MH.",
                    title: "Managing Partner",
                    image: "/images/nelson.png",
                    pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                    pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                    telepon: "+62 812 6020 000",
                    email: "",
                    whatsapp: "#",
                    twitter: "#",
                    linkedin: "#"
                },
                {
                    name: "Bachtiar Simanjuntak",
                    title: "Managing Partner",
                    image: "/images/our-people/bachtiar.jpg",
                    pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                    pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                    telepon: "+62 812 6020 000",
                    email: "",
                    whatsapp: "#",
                    twitter: "#",
                    linkedin: "#"
                }
            ]
        }
    );

    // Calculate the start and end indexes of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = attorneys.data.slice(indexOfFirstItem, indexOfLastItem);

    // Handle pagination when a new page is selected
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleClickNavTabActive = (navlink) => {
        switch (navlink) {
            case 'founder':
                setNavTabActive(
                    {
                        founder: "active",
                        lawyers: "text-white",
                        counsels: "text-white"
                    }
                );
                setAttorneys(
                    {
                        card_title: "Managing Partners",
                        data: [
                            {
                                name: "Ir. Nelson Simanjuntak, SH., MH.",
                                title: "Managing Partner",
                                image: "/images/nelson.png",
                                pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                                pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                                telepon: "+62 812 6020 000",
                                email: "",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Bachtiar Simanjuntak",
                                title: "Managing Partner",
                                image: "/images/our-people/Bachtiar.jpg",
                                pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                                pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                                telepon: "+62 812 6020 000",
                                email: "",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                        ]
                    }
                );
                break;
            case 'lawyers':
                setNavTabActive(
                    {
                        founder: "text-white",
                        lawyers: "active",
                        counsels: "text-white"
                    }
                );
                setAttorneys(
                    {
                        card_title: "Managing Partners",
                        data: [
                            {
                                name: "Sukri Akbar Samosir, SH., MH.",
                                title: "Associates",
                                image: "/images/our-people/Sukri.png",
                                pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                                pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                                telepon: "+62 812 6020 000",
                                email: "",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Dupuis Sola Scriptura, SH.",
                                title: "Junior Associates",
                                image: "/images/our-people/Dupuis.jpg",
                                pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                                pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                                telepon: "+62 812 6020 000",
                                email: "",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Anthony Lesnussa, S.H.",
                                title: "Associates",
                                image: "/images/our-people/Anthony.png",
                                pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                                pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                                telepon: "+62 812 6020 000",
                                email: "",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Rafsodi Nayogi, SH.",
                                title: "Associates",
                                image: "/images/our-people/Rafsodi.png",
                                pendidikan: "S1 Teknik Sipil, Universitas Sumatera Utara, Medan, Indonesia",
                                pengalaman: "Pengalaman kerja lebih dari 30 tahun di bidang konstruksi dan perkebunan, baik di perusahaan swasta maupun BUMN. Pernah menjabat sebagai Direktur Utama PT. Perkebunan Nusantara III (Persero) dan PT. Perkebunan Nusantara IV (Persero).",
                                telepon: "+62 812 6020 000",
                                email: "",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            }
                        ]
                    }
                );
                break;
            case 'counsels':
                setNavTabActive(
                    {
                        founder: "text-white",
                        lawyers: "text-white",
                        counsels: "active"
                    }
                );
                setAttorneys(
                    {
                        card_title: "Counsels",
                        data: [
                            {
                                name: "Mystogan",
                                title: "Counsel",
                                image: "/images/businessman4.jpg",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Mystogan",
                                title: "Counsel",
                                image: "/images/businessman4.jpg",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Mystogan",
                                title: "Counsel",
                                image: "/images/businessman4.jpg",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            },
                            {
                                name: "Mystogan",
                                title: "Counsel",
                                image: "/images/businessman4.jpg",
                                whatsapp: "#",
                                twitter: "#",
                                linkedin: "#"
                            }
                        ]
                    }
                );
                break;
            default:
                setNavTabActive(
                    {
                        founder: "active",
                        lawyers: "text-white",
                        counsels: "text-white"
                    }
                );
                break;
        }
    }

    useEffect(() => {
    }, [attorneys]);

    return (
        <>
            <Layout>
                <TemplatePages>
                    <div className="card text-center">
                        <div className="card-header gradient-deep-orange-orange">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <button type="button" className={"nav-link fw-bold " + navTabActive.founder} onClick={() => handleClickNavTabActive("founder")}>Founder</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className={"nav-link fw-bold " + navTabActive.lawyers} onClick={() => handleClickNavTabActive("lawyers")}>Managing Partners</button>
                                </li>
                                {/* <li className="nav-item">
                                    <button type="button" className={"nav-link fw-bold " + navTabActive.counsels} onClick={() => handleClickNavTabActive("counsels")}>Associates</button>
                                </li> */}
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{attorneys.card_title}</h5>
                            <div className="py-2">
                                {attorneys.data.length == 1 ? attorneys.data.map((item, index) => (
                                    <button type="button" className="profile-card-2" key={index} data-bs-toggle="modal" data-bs-target="#ourPeopleModal" onClick={() => handleModalData(item.name, item.title, item.pendidikan, item.pengalaman, item.telepon, item.email, item.image)}>
                                        <img src={item.image} className="img img-fluid" />
                                        <div className="profile-name ">{item.name}</div>
                                        <div className="profile-username ">{item.title}</div>
                                        <div className="profile-icons">
                                            <a className="mx-1" href={item.whatsapp}><i className="text-custom fa-brands fa-whatsapp"></i></a>
                                            <a className="mx-1" href={item.twitter}><i className="text-custom fa-brands fa-twitter"></i></a>
                                            <a className="mx-1" href={item.linkedin}><i className="text-custom fa-brands fa-linkedin"></i></a>
                                        </div>
                                    </button>
                                )) :
                                    currentItems.length > itemsPerPage ?
                                        <div className="row">
                                            {attorneys.data.map((item, index) => (
                                                <div className="col-lg-4 col-12" key={index}>
                                                    <button type="button" className="profile-card-2" data-bs-toggle="modal" data-bs-target="#ourPeopleModal" onClick={() => handleModalData(item.name, item.title, item.pendidikan, item.pengalaman, item.telepon, item.email, item.image)}>
                                                        <img src={item.image} className="img img-fluid" />
                                                        <div className="profile-name">{item.name}</div>
                                                        <div className="profile-username ">{item.title}</div>
                                                        <div className="profile-icons">
                                                            <a className="mx-1" href={item.whatsapp}><i className="text-custom fa-brands fa-whatsapp"></i></a>
                                                            <a className="mx-1" href={item.twitter}><i className="text-custom fa-brands fa-twitter"></i></a>
                                                            <a className="mx-1" href={item.linkedin}><i className="text-custom fa-brands fa-linkedin"></i></a>
                                                        </div>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        <div className="row">
                                            {currentItems.map((item, index) => (
                                                <div className="col-lg-4 col-12" key={index}>
                                                    <button type="button" className="btn bg-transparent p-0 profile-card-2" data-bs-toggle="modal" data-bs-target="#ourPeopleModal" onClick={() => handleModalData(item.name, item.title, item.pendidikan, item.pengalaman, item.telepon, item.email, item.image)}>
                                                        <img src={item.image} className="img img-fluid" />
                                                        <div className="profile-name ">{item.name}</div>
                                                        <div className="profile-username ">{item.title}</div>
                                                        <div className="profile-icons">
                                                            <a className="mx-1" href={item.whatsapp}><i className="text-custom fa-brands fa-whatsapp"></i></a>
                                                            <a className="mx-1" href={item.twitter}><i className="text-custom fa-brands fa-twitter"></i></a>
                                                            <a className="mx-1" href={item.linkedin}><i className="text-custom fa-brands fa-linkedin"></i></a>
                                                        </div>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                }
                                <nav aria-label="Page navigation example" className="my-3 text-center">
                                    <center>
                                        <ul className="pagination">
                                            {currentPage > 1 ?
                                                <li className="page-item">
                                                    <button type="button" className="page-link text-custom" onClick={() => handlePageChange(currentPage - 1)}>
                                                        Previous
                                                    </button>
                                                </li>
                                                : null
                                            }
                                            {Array.from({ length: Math.ceil(attorneys.data.length / itemsPerPage) }).map((_, index) => (
                                                <li className="page-item" key={index}>
                                                    <button type="button" className={currentPage === index + 1 ? "page-link text-white gradient-deep-orange-orange" : "page-link text-custom"} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
                                                        {index + 1}
                                                    </button>
                                                </li>
                                            ))}
                                            {currentPage < Math.ceil(attorneys.data.length / itemsPerPage) ?
                                                <li className="page-item">
                                                    <button type="button" className="page-link text-custom" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                                                </li>
                                                : null
                                            }
                                        </ul>
                                    </center>
                                </nav>
                                <div className="modal fade" id="ourPeopleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header gradient-deep-orange-orange text-white">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Profil Singkat</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src={modalDatas.foto} className="img img-fluid rounded-3" style={{maxHeight:"300px"}} />
                                                <div className="profile-name ">{modalDatas.nama}</div>
                                                <div className="profile-username ">{modalDatas.jabatan}</div>
                                                <div className="profile-icons">
                                                    <a className="mx-1" href={modalDatas.whatsapp}><i className="text-custom fa-brands fa-whatsapp"></i></a>
                                                    <a className="mx-1" href={modalDatas.twitter}><i className="text-custom fa-brands fa-twitter"></i></a>
                                                    <a className="mx-1" href={modalDatas.linkedin}><i className="text-custom fa-brands fa-linkedin"></i></a>
                                                </div>
                                                <div className="profile-education">
                                                    <h3 className="fs-5">Pendidikan</h3>
                                                    <p>{modalDatas.pendidikan}</p>
                                                </div>
                                                <div className="profile-experience">
                                                    <h3 className="fs-5">Pengalaman</h3>
                                                    <p>{modalDatas.pengalaman}</p>
                                                </div>
                                                <div className="profile-contact">
                                                    <h3 className="fs-5">Kontak</h3>
                                                    <p>{modalDatas.telepon}</p>
                                                    <p>{modalDatas.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TemplatePages>
            </Layout>
        </>
    )
}
