import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import TemplatePages from "@/components/templatepages";
import ChartComponent from "@/components/chartcomponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

export default function Clients() {
    const clients = [
        {
            name: "John Doe",
            position: "Criminal Lawyer",
            image: "/images/businessman1.jpg",
            case_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            name: "John Doe",
            position: "Criminal Lawyer",
            image: "/images/businessman2.jpg",
            case_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            name: "John Doe",
            position: "Criminal Lawyer",
            image: "/images/businessman4.jpg",
            case_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            name: "John Doe",
            position: "Criminal Lawyer",
            image: "/images/businessman3.jpg",
            case_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        }
    ]

    const chartData = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            borderWidth: 5,
            label: 'Jumlah Klien 6 Tahun Terakhir',
            data: [12, 19, 27, 30, 30, 31],
            backgroundColor: ['RGB(191, 54, 12)', 'RGB(191, 54, 12)', 'RGB(191, 54, 12)', 'RGB(191, 54, 12)', 'RGB(191, 54, 12)', 'RGB(191, 54, 12)'],
            borderWidth: 1
        }]
    };

    return (
        <Layout>
            <TemplatePages>
                <center>
                    <h5 className="text-custom display-6 fw-bolder">What People Say</h5>
                    <h3 className="fw-bold display-5">Client Testimonia</h3>
                    <hr />
                </center>
                <div className="d-none d-lg-block">
                    <center>
                        <div className="card my-5 mx-3">
                            <ChartComponent chartData={chartData} />
                        </div>
                    </center>
                    <Splide options={{
                        perPage: 3,
                    }}>
                        {clients.map((item, index) => (
                            <SplideSlide key={index}>
                                <div className="card mb-3 mx-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid rounded-start" alt="..." style={{ height: "36vh", objectFit: "cover" }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">
                                                    {item.case_description}
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">
                                                        {item.position}
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
                <div className="d-lg-none">
                    <center>
                        <div className="card my-4" style={{ maxWidth: "18rem" }}>
                            <ChartComponent chartData={chartData} />
                        </div>
                        <Splide options={{
                            perPage: 1,
                        }}>
                            {clients.map((item, index) => (
                                <SplideSlide key={index}>
                                    <div className="card mb-3 mx-3" style={{ maxWidth: "18rem" }}>
                                        <img src={item.image} className="img-fluid rounded-start" alt="..." style={{ height: "36vh", objectFit: "cover", objectPosition: "top" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">
                                                {item.case_description}
                                            </p>
                                            <p className="card-text">
                                                <small className="text-body-secondary">
                                                    {item.position}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </center>
                </div>
            </TemplatePages>
        </Layout>
    );
}