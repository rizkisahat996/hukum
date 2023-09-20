import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import TemplatePages from "@/components/templatepages";

export default function OurServices() {
    const [content, setContent] = useState(
        {
            title: "Criminal Act Of Corruption",
            description: "Lorem ipsum dol",
            image: "https://picsum.photos/seed/picsum/200/300",
        }
    );

    const [modalDatas, setModalDatas] = useState({
        nama: "",
        jabatan: "",
        pendidikan: "",
        pengalaman: "",
        telepon: "",
        email: "",
        foto: ""
    });

    const [service, setService] = useState(
        [
            {
                title: "Hukum Pidana",
                image: "/images/criminal-law.jpg",
            },
            {
                title: "Hukum Perdata",
                image: "/images/civil-law.jpg",
            },
            {
                title: "Hukum Keluarga",
                image: "/images/family-law.jpg",
            },
            {
                title: "Hukum Korporasi",
                image: "/images/corporate-law.jpg",
            },
            {
                title: "HAKI",
                image: "/images/haki.jpg",
            },
            {
                title: "Hukum Kepalitan",
                image: "/images/bankruptcy-law.jpg",
            },
            {
                title: "Hukum Kesehatan",
                image: "/images/labour-law.jpg",
            },
            {
                title: "Hukum Properti",
                image: "/images/property-law.jpg",
            }
        ]
    );

    const areaOfPractice = {
        criminal_litigation: [
            { type: "Perdata" },
            { type: "Perbuatan Melawan Hukum" },
            { type: "Perceraian" },
            { type: "Tanah" },
            { type: "Wanprestasi" },
            { type: "Permohonan" },
            { type: "Waris" },
            { type: "Perjanjian" },
            { type: "Pembagian Harta" },
            { type: "Perdata Agama (Sengketa Islam)" },
            { type: "Perdata Khusus" },
            { type: "PHI" },
            { type: "Kepalitan" },
            { type: "Perlindungan Kosumen" },
            { type: "Merek" },
            { type: "PARPOL" },
            { type: "Arbitrase" },
            { type: "Persaingan Usaha" },
            { type: "Hak Cipta" },
            { type: "Desain Industri" },
            { type: "Paten" },
            { type: "Pajak" },
            { type: "Tata Usaha Negara" },

        ],
        compliance: [
            { type: "Corporate Compliance to Anti-Corruption" },
            { type: "Bribery" },
            { type: "Money Laundering and Whistleblowing" }
        ],
        other: [
            { title: "Civil and Commercial Litigation" },
            { title: "Domestic and International Arbitration" },
            { title: "State Administrative Proceedings" },
            { title: "Industrial Relations Dispute" },
            { title: "General Corporate Matters" }
        ]
    }

    const handleContent = (link) => {
        switch (link) {
            case "criminal Act Of Corruption":
                setContent({
                    title: "Criminal Act Of Corruption",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Criminal Act Of Money Laundering":
                setContent({
                    title: "Criminal Act Of Money Laundering",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Criminal Act Of General Crimes":
                setContent({
                    title: "Criminal Act Of General Crimes",
                    description:
                        <>
                            <p>
                                General crime refers to a broad category of unlawful activities that encompass various offenses against the law, typically involving acts that are harmful, forbidden, or prohibited by society. It encompasses a wide range of illegal behaviors that may vary in severity, impact, and legal consequences.
                            </p>
                            <p>
                                In general, crimes are actions or omissions that violate established laws and regulations set forth by a governing authority. They can include offenses against persons, property, public order, public safety, and moral values. Examples of general crimes include theft, assault, robbery, burglary, drug offenses, fraud, cybercrime, vandalism, and many others.
                            </p>
                            <p>
                                The motives behind committing crimes can vary greatly. Some individuals may engage in criminal behavior due to personal gain, financial desperation, misguided ideologies, peer pressure, or other underlying factors. Criminal acts can be driven by factors such as greed, anger, revenge, or the desire to exert power over others.
                            </p>
                            <p>
                                The legal consequences for committing a crime depend on the nature and severity of the offense, as well as the jurisdiction in which it occurred. Penalties for crimes can range from fines and probation to imprisonment or even capital punishment in some jurisdictions.
                            </p>
                            <p>
                                Society as a whole relies on laws and law enforcement agencies to maintain order, protect individuals' rights, and deter criminal behavior. Efforts are made to investigate, prevent, and prosecute crimes through the criminal justice system, with the aim of holding offenders accountable and promoting public safety.
                            </p>
                            <p>
                                It is important to remember that engaging in criminal activities can have significant and lasting impacts not only on the victims but also on the perpetrators themselves, their families, and communities. The prevention and reduction of crime require a collaborative effort from law enforcement, legal institutions, social services, educational programs, and the community as a whole.
                            </p>
                            <p>
                                Understanding and addressing general crime is crucial for promoting a just and safe society where individuals can live without fear of victimization and where everyone is held accountable for their actions within the boundaries of the law.
                            </p>
                        </>,
                    image: "/images/general-criminal.jpg",
                });
                break;
            case "Corporate Compliance to Anti-Corruption":
                setContent({
                    title: "Corporate Compliance to Anti-Corruption",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Bribery":
                setContent({
                    title: "Bribery",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Money Laundering and Whistleblowing":
                setContent({
                    title: "Money Laundering and Whistleblowing",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Civil and Commercial Litigation":
                setContent({
                    title: "Civil and Commercial Litigation",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Domestic and International Arbitration":
                setContent({
                    title: "Domestic and International Arbitration",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "State Administrative Proceedings":
                setContent({
                    title: "State Administrative Proceedings",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            case "Industrial Relations Dispute":
                setContent({
                    title: "Industrial Relations Dispute",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
            default:
                setContent({
                    title: "General Corporate Matters",
                    description: "Lorem ipsum dol",
                    image: "https://picsum.photos/seed/picsum/200/300",
                });
                break;
        }

    }

    useEffect(() => {
    }, [content]);

    return (
        <Layout pageTitle="Our Services">
            <TemplatePages>
                <center>
                    <h5 className="text-custom display-6 fw-bolder">Area Of Practice</h5>
                    <h3 className="fw-bold display-5">how We Can Help You</h3>
                    <hr />
                </center>
                <div className="row mt-2">
                    <div className="col-lg-10 col-12">
                        <div className="card mb-3">
                            <img src={content.image} className="card-img-top" style={{ width: "100%", maxHeight: "60vh", objectFit: "cover" }} alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{content.title}</h2>
                                <p className="card-text">
                                    {content.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-12 text-center">
                        <center>
                            <div className="card mb-3" style={{ width: "18rem" }}>
                                <div className="card-header">
                                    Featured
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="dropdown-center">
                                            <button className="btn dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#criminalLitigation" aria-controls="offcanvasExample">
                                                Perdata
                                            </button>
                                            <div className="offcanvas offcanvas-start" tabindex="-1" id="criminalLitigation" aria-labelledby="offcanvasExampleLabel">
                                                <div className="offcanvas-header">
                                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body text-start">
                                                    {areaOfPractice.criminal_litigation.map((item, index) => (
                                                        <div key={index}>
                                                            <button type="button" className="dropdown-item" onClick={() => handleContent(item.type)}>{item.type}</button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#compliance" aria-controls="offcanvasExample">
                                            Compliance
                                        </button>
                                        <div className="offcanvas offcanvas-start" tabindex="-1" id="compliance" aria-labelledby="offcanvasExampleLabel">
                                            <div className="offcanvas-header">
                                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                {areaOfPractice.compliance.map((item, index) => (
                                                    <div key={index}>
                                                        <button type="button" className="dropdown-item" onClick={() => handleContent(item.type)}>{item.type}</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                    {areaOfPractice.other.map((item, index) => (
                                        <li className="list-group-item" key={index}>
                                            <button type="button" className="btn" onClick={() => handleContent(item.title)}> {item.title}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="row mt-2">
                    {service.map((item, index) => (
                        <div className="col-md-3 col-12" key={index}>
                            <div class="card mb-3" style={{ width: "18rem" }}>
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <p class="card-title fw-semi-bold">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TemplatePages>
        </Layout>
    );
}