import Layout from "@/components/layout";
import TemplatePages from "@/components/templatepages";

export default function Contact() {
    return (
        <Layout pageTitle="Contact">
            <TemplatePages>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <center>
                            <h5 className="text-custom display-6 fw-bolder">Meet Our Experts</h5>
                            <h3 className="fw-bold display-5">Contact Us</h3>
                            <hr />
                        </center>
                        <form className="form mb-3">
                            <div className="form-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control mb-3" name="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control mb-3" name="email" placeholder="Your Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="phone" className="form-control mb-3" name="phone" placeholder="Your Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <select id="service" name="service" className="form-control">
                                                <option defaultValue="none" disabled="">Service</option>
                                                <option value="design">design</option>
                                                <option value="development">development</option>
                                                <option value="illustration">illustration</option>
                                                <option value="branding">branding</option>
                                                <option value="video">video</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <textarea id="case" rows="5" className="form-control" name="case" placeholder="Case Description..."></textarea>
                                </div>
                            </div>

                            <div className="form-actions text-center">
                                <button type="button" className="btn gradient-deep-orange-orange rounded-pill text-white">
                                    Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="ratio ratio-16x9 mb-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1265103522846!2d106.856443!3d-6.3776659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec78fecb59a1%3A0xb109f24beb21ebf1!2sJl.%20Kramat%20Benda%20Raya%20Blok%20Benda%204%20No.15%2C%20RT.5%2FRW.27%2C%20Bakti%20Jaya%2C%20Kec.%20Sukmajaya%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016416!5e0!3m2!1sid!2sid!4v1683473962414!5m2!1sid!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="d-none d-lg-block">
                            <div className="row text-center">
                                <div className="col-4">
                                    <a className="btn gradient-deep-orange-orange text-white rounded-pill">
                                        <i className="fa-brands fa-linkedin"></i> Linkedin
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a className="btn gradient-deep-orange-orange text-white rounded-pill">
                                        <i className="fa-brands fa-whatsapp"></i> Whatsapp
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a className="btn gradient-deep-orange-orange text-white rounded-pill">
                                        <i className="fa-regular fa-envelope"></i> E-mail
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-lg-none">
                            <div className="row text-center">
                                <div className="col-4">
                                    <a className="btn gradient-deep-orange-orange text-white rounded-circle">
                                        <i className="fa-brands fa-linkedin p-2"></i>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a className="btn gradient-deep-orange-orange text-white rounded-circle">
                                        <i className="fa-brands fa-whatsapp p-2"></i>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a className="btn gradient-deep-orange-orange text-white rounded-circle">
                                        <i className="fa-regular fa-envelope p-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TemplatePages>
        </Layout>
    );
}
