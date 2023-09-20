import Layout from "@/components/layout";
import TemplatePages from "@/components/templatepages";

export default function CoreValues() {
    return (
        <Layout pageTitle="Core Values">
            <TemplatePages>
                <div className="ratio ratio-16x9 mb-4">
                    <iframe src="https://www.youtube.com/embed/6V13Vl6CqqY" title="YouTube video" allowFullScreen></iframe>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="fw-bold display-4 text-center">About Us</h4>
                        <p className="card-text">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,

                            and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum
                        </p>
                        <p className="card-text text-center">
                            <img src="/images/sign 1.png" className="p-2" width="200" />
                        </p>
                    </div>
                    <div className="col d-none d-lg-block">
                        <img src="/images/man.png" style={{ width: "100%", height: "80vh", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                </div>
            </TemplatePages>
        </Layout>
    );
}
