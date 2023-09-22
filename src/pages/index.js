import { useEffect } from "react";
import Layout from "@/components/layout";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Aos from "aos";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function getServerSideProps() {
  try {
    // HTTP request
    const req = await axios.get('https://hukum.belajarduit.com/api/laws');
    const res = req.data.data;

    if (res) {
      return {
        props: {
          posts: res,
        },
      };  
    } else {
      return {
        props: {
          posts: null, // Use null if res is undefined
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: null,
      },
    };
  }
}


export default function Home(props) {
  const { posts } = props;

  // Handle the case where posts is null or undefined in your component
  if (posts === null || posts === undefined) {
    return (
      <div>
        <p>Error loading data</p>
      </div>
    );
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    try {
      const response = await axios.post('https://hukum.belajarduit.com/api/cases', formData);
  
      toast.success('Kasus telah di submit. Silahkan tunggu notifikasi di Whatsapp anda');
  
      // Reset the form or perform any other actions as needed
      event.target.reset();
      
      // Optionally, you can add a delay before refreshing the page
      setTimeout(() => {
        window.location.reload();
      }, 3000); // Refresh after 3 seconds (adjust as needed)
    } catch (error) {
      console.error('Error sending data:', error);
  
      // Show an error notification
      toast.error('Error sending data');
    }
  };
  
  
  const areaOfPractice = [
    {
      title: "Bisnis dan Perdata",
      description: "Kami siap membantu anda dalam menyelesaikan permasalahan hukum bisnis dan perdata anda.",
    },
    {
      title: "Pidana",
      description: "Kami siap membantu anda dalam menyelesaikan permasalahan hukum pidana anda.",
    },
    {
      title: "Keluarga",
      description: "Kami siap membantu anda dalam menyelesaikan permasalahan hukum keluarga anda.",
    },
    {
      title: "Ketenagakerjaan",
      description: "Kami siap membantu anda dalam menyelesaikan permasalahan hukum ketenagakerjaan anda.",
    },
    {
      title: "Korupsi",
      description: "Kami siap membantu anda dalam menyelesaikan permasalahan hukum korupsi anda.",
    },
    {
      title: "Kepailitan",
      description: "Kami siap membantu anda dalam menyelesaikan permasalahan hukum kepailitan anda.",
    }
  ]

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO",
      company: "Company",
      image: "/images/businessman.png",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      name: "John Doe",
      position: "CEO",
      company: "Company",
      image: "/images/businessman2.jpg",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
  ];

  const attorneys = [
    {
      name: "Ir. Nelson Simanjuntak, SH, MH",
      position: "Managing Partner",
      image: "/images/Nelson.png",
    },
    {
      name: "Bachtiar Simanjuntak",
      position: "Managing Partner",
      image: "/images/our-people/Bachtiar.jpg",
    },
    {
      name: "Sukri Akbar Samosir, SH, MH",
      position: "Associate",
      image: "/images/our-people/Sukri.png",
    },
    {
      name: "Dupuis Sola Scriptura, SH",
      position: "Junior Associate",
      image: "/images/our-people/Dupuis.jpg",
    },
    {
      name: "Anthony Lesnusa, SH",
      position: "Associate",
      image: "/images/our-people/Anthony.png",
    },
    {
      name: "Rafsodi Nayogi, SH",
      position: "Associate",
      image: "/images/our-people/Rafsodi.png",
    },
  ]

  const services = [
    {
      title: "Gugat Perdata",
      description: "Daftarkan Kasus Perdata dan Bisnis anda untuk ditangani segera!",
      icon: "fa-solid fa-calendar-check",
    },
    {
      title: "Konsultasi Hukum",
      description: "Kami bersedia memberikan pendapat hukum secara gratis untuk kepentingan anda hari ini juga.",
      icon: "fa-solid fa-calendar-check",
    },
    {
      title: "Tuntutan Pidana",
      description: "Terlibat dalam kasus pidana merupakan permasalahan serius baik anda sebagai Tersangka, Terdakwa, Tersangka, maupun Saksi dimana membutuhkan bantuan profesional dalam penanganannya. Hubungi kami untuk pendampingan hari ini juga.",
      icon: "fa-solid fa-calendar-check",
    },
  ]

  const carouselImages = [
    {
      source: "/images/slide-background2.jpg",
      caption_first: "Untuk Anda Klien Kami",
      caption_second: "Layanan Konsultasi",
      caption_third: "Hubungi kami di 000000000 atau silahkan isi form berikut ini",
      caption_fourth: "Kami akan menghubungi Anda secepatnya untuk membantu Anda menyelesaikan masalah Anda dengan cepat dan efisien. Kami siap membantu Anda. ",
    },
    {
      source: "/images/slide-background2.jpg",
      caption_first: "For Our Client",
      caption_second: "Consultation Service",
      caption_third: "Contact us at 000000000 or fill in the form",
      caption_fourth: "We will contact you as soon as possible to ensure that your cases are handled quickly and efficiently. We are ready to help. ",
    }
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Layout>
    <ToastContainer />
      <div className="d-none d-lg-block">
        <Splide aria-label="My Favorite Images" options={{ heightRatio: 0.49 }}>
          {carouselImages.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image.source} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
            <div className="splide-overlay px-5 py-5 justify-content-center">
              <div className="container splide-overlay-content">
            <div className="row mt-lg-3">
              <div className="col-lg-5 col-12">
                <div className="py-2 splide-overlay-content">
                  <h5 className="text-custom fw-bolder">{image.caption_first}</h5>
                  <h1 className="fw-bold text-white">{image.caption_second}</h1>
                  <h5 className="text-custom fw-bolder">{image.caption_third}</h5>
                  <h6 className="fw-bolder text-white">
                  {image.caption_fourth} 
                  </h6>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <form className="form splide-overlay-content" onSubmit={handleSubmit}>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="name" className="form-control mb-3" name="name" placeholder="Nama Anda" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" id="email" className="form-control mb-3" name="email" placeholder="Email Anda" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="phone" className="form-control mb-3" name="phone" placeholder="Nomor Telepon" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <select id="service" name="service" className="form-control">
                            <option defaultValue="none" disabled="">Jenis Perkara</option>
                            <option value="design">Pidana</option>
                            <option value="development">Perdata</option>
                            <option value="illustration">Kepalitan</option>
                            <option value="branding">Korupsi</option>
                            <option value="video">HAM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <textarea id="case" rows="5" className="form-control" name="case" placeholder="Penjelasan mengenai kasus Anda"></textarea>
                    </div>
                  </div>

                  <div className="form-actions text-center">
                  <button type="submit" className="btn gradient-deep-orange-orange rounded-pill text-white" style={{ width: "12rem" }}>
                    <i className="fa fa-paper-plane"></i> Kirim
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="d-lg-none">
        <Splide aria-label="My Favorite Images" options={{ heightRatio: 0.8 }}>
          {carouselImages.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image.source} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
              <div className="splide-overlay">
              <div className="container pt-5">
            <div className="row mt-lg-3">
              <div className="col-lg-5 col-12">
                <div className="py-2 splide-overlay-content">
                  <h5 className="text-custom fw-bolder">Untuk Anda Klien Kami</h5>
                  <h1 className="fw-bold text-white">Layanan Konsultasi</h1>
                  <h5 className="text-custom fw-bolder">Hubungi kami di 000000000 atau silahkan isi form berikut ini</h5>
                  <h6 className="fw-bolder text-white">
                    Kami akan menghubungi Anda secepatnya untuk membantu Anda menyelesaikan masalah Anda dengan cepat dan efisien. Kami siap membantu Anda. 
                  </h6>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <form className="form splide-overlay-content" onSubmit={handleSubmit}>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="name" className="form-control mb-3" name="name" placeholder="Nama Anda" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" id="email" className="form-control mb-3" name="email" placeholder="Email Anda" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="phone" className="form-control mb-3" name="phone" placeholder="Nomor Telepon" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <select id="service" name="service" className="form-control">
                            <option defaultValue="none" disabled="">Jenis Perkara</option>
                            <option value="design">Pidana</option>
                            <option value="development">Perdata</option>
                            <option value="illustration">Kepalitan</option>
                            <option value="branding">Korupsi</option>
                            <option value="video">HAM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <textarea id="case" rows="5" className="form-control" name="case" placeholder="Penjelasan mengenai kasus Anda"></textarea>
                    </div>
                  </div>

                  <div className="form-actions text-center">
                  <button type="submit" className="btn gradient-deep-orange-orange rounded-pill text-white" style={{ width: "12rem" }}>
                    <i className="fa fa-paper-plane"></i> Kirim
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="jumbotron-modal rounded-top" style={{ backgroundImage: "url('/images/slide-background3.jpg')" }}>
              <div className="jumbotron-overlay-modal-content">
                <div className="jumbotron-overlay-modal text-white">
                  <div className="text-end">
                    <button type="button" className="btn btn-lg" data-bs-dismiss="modal" aria-label="Close">
                      <i className="fa-regular fa-circle-xmark text-white"></i>
                    </button>
                  </div>
                </div>
                <h2 className="text-custom">Book Your</h2>
                <h1 className="fw-bold">Free Consultation</h1>
              </div>
            </div>
            <form className="form p-4" onSubmit={handleSubmit}>
              <div className="form-body">
                <div className="row">

                  <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="name" className="form-control mb-3" name="name" placeholder="Nama Anda" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" id="email" className="form-control mb-3" name="email" placeholder="Email Anda" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="phone" className="form-control mb-3" name="phone" placeholder="Nomor Telepon" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <select id="service" name="service" className="form-control">
                            <option defaultValue="none" disabled="">Jenis Perkara</option>
                            <option value="design">Pidana</option>
                            <option value="development">Perdata</option>
                            <option value="illustration">Kepalitan</option>
                            <option value="branding">Korupsi</option>
                            <option value="video">HAM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <textarea id="case" rows="5" className="form-control" name="case" placeholder="Penjelasan mengenai kasus Anda"></textarea>
                    </div>
              </div>

              <div className="form-actions text-center">
                  <button type="submit" className="btn gradient-deep-orange-orange rounded-pill text-white" style={{ width: "12rem" }}>
                    <i className="fa fa-paper-plane"></i> Kirim
                  </button>
                  </div>
            </form>
          </div>
        </div>
      </div>
      <section className="bg-light">
        <div className="container py-3">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg col-12 mb-2" key={index}>
                <div className="card btn rounded-3 h-100">
                  <div className="card-content">
                    <div className="px-3 py-3">
                      <div className="media">
                        <div className="media-body text-start">
                          <span className="mb-1 text-custom fw-semibold">{service.title}</span>
                          <h5 className="fs-6 fw-semi-bold">{service.description}</h5>
                        </div>
                        <div className="media-right align-self-center gradient-deep-orange-orange rounded-circle">
                          <i className={service.icon + " display-6 p-3 text-white"}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-body">
        <div className="container py-4">
          <div className="card bg-light  rounded-4">
            <div className="card-content pb-2">
              <div className="card-img overlap text-center">
                <img src="/images/our-people/Nelson.png" alt="element 06" style={{ width: 300, objectFit: "cover" }} className="mb-1" data-aos="zoom-out-down" />
              </div>
              <div className="card-body px-5">
                <h4 className="fw-bold display-4 text-center">Mengenai Kami</h4>
                <p className="card-text">
                  Kami Firma Hukum yang bergerak di bidang hukum perdata, pidana, tata usaha negara, dan ketenagakerjaan. Kami berkomitmen untuk memberikan pelayanan hukum yang terbaik bagi klien kami. Kami memiliki pengalaman dalam menangani berbagai kasus hukum baik di tingkat pengadilan maupun di tingkat non litigasi. Kami juga memiliki pengalaman dalam menangani kasus hukum di tingkat banding dan kasasi.
                </p>
                <center>
                  <button type="button" className="btn btn-raised gradient-deep-orange-orange text-white fw-semibold rounded-pill">
                    Selengkapnya
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-3">
          <center>
            <h5 className="text-custom display-6 fw-bolder">Wilayah Praktik</h5>
            <h2 className="fw-bold display-4">Cara Kami Membantu Anda</h2>
            <hr />
          </center>
          <div className="d-none d-lg-block">
            <div className="row" matchheight="card">
              {areaOfPractice.map((item, index) => (
                <div className="col-lg-4 col-12" key={index}>
                  <div className="card rounded-3 mb-4">
                    <div className="card-content">
                      <div className="px-3 py-3">
                        <div className="media">
                          <div className="media-body text-left">
                            <h3 className="mb-1 text-custom fw-bolder">{item.title}</h3>
                            <span className="text-bold">{item.description}</span>
                          </div>
                          <div className="media-right align-self-center rounded">
                            <i className="fa-solid fa-calendar-check display-6 p-3 text-primary-emphasis"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
          <div className="d-lg-none">
            <Splide options={{
              perPage: 1,
            }}>
              {areaOfPractice.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="card rounded-3 mb-4">
                    <div className="card-content">
                      <div className="px-3 py-3">
                        <div className="media">
                          <div className="media-body text-left">
                            <h3 className="mb-1 text-custom fw-bolder">{item.title}</h3>
                            <span className="text-bold">{item.description}</span>
                          </div>
                          <div className="media-right align-self-center rounded">
                            <i className="fa-solid fa-calendar-check display-6 p-3 text-primary-emphasis"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))
              }
            </Splide>
          </div>
        </div>
      </section>
      <section className="bg-body">
        <div className="container py-3">
          <center>
            <h5 className="text-custom display-6 fw-bolder">Ini Merupakan Hasil Terbaik Kami</h5>
            <h2 className="fw-bold display-4">Kasus Terakhir yang Kami Ungkap</h2>
            <hr />
          </center>
          <Splide className="d-none d-lg-block" options={{
            perPage: 3
          }}>
            {
              carouselImages.map((image, index) => {
                return (
                  <SplideSlide key={index} className="row">
                    <div className="col">
                      <div className="card card-inverse border-0 box-shadow-0">
                        <div className="card-content">
                          <img className="card-img img-fluid" src={image.source} alt="Card image" style={{ width: "100%", height: 280, objectFit: "cover" }} />
                          <div className="card-img-overlay overlay-black">
                            <h4 className="card-title">Kasus A</h4>
                            <p className="card-text">Deskripsi</p>
                            <p className="card-text"><small className="text-muted white">Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                )
              }
              )
            }
          </Splide>
          <Splide className="d-lg-none" options={{
            perPage: 1
          }}>
            {
              carouselImages.map((image, index) => {
                return (
                  <SplideSlide key={index} className="row">
                    <div className="col">
                      <div className="card card-inverse border-0 box-shadow-0">
                        <div className="card-content">
                          <img className="card-img img-fluid" src={image.source} alt="Card image" style={{ width: "100%", height: 280, objectFit: "cover" }} />
                          <div className="card-img-overlay overlay-black">
                            <h4 className="card-title">Inverse Text</h4>
                            <p className="card-text">Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups carrot
                              cake topping
                              chupa chups.</p>
                            <p className="card-text"><small className="text-muted white">Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                )
              }
              )
            }
          </Splide>
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-3">
          <center>
            <h5 className="text-custom display-6 fw-bolder">Apa yang Orang Lain Katakan</h5>
            <h2 className="fw-bold display-4">Testimoni Klien</h2>
            <hr />
          </center>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img className="img-fluid" src="/images/businessman.png" />
            </div>
            <div className="col">
              <Splide options={
                {
                  perPage: 1,
                  rewind: true,
                  autoplay: true,
                  interval: 3000,
                  pauseOnHover: false,
                  pauseOnFocus: false,
                  arrows: false,
                }
              }>
                {testimonials.map((item, index) => (
                  <SplideSlide key={index}>
                    <div className="card pt-2 bg-transparent">
                      <div className="media m-3">
                        <div className="media-left text-center mr-2">
                          <img className="media-object img-xl rounded-circle" src={item.image} alt="Generic placeholder image" style={{ objectFit: "cover" }} />
                          <br />
                          <cite title="Source Title">Entrepreneur</cite>
                        </div>
                        <div className="media-body">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{ backgroundImage: "url(/images/slide-background.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="overlay-black">
          <div className="container py-5">
            <div className="row mt-lg-3">
              <div className="col-lg-5 col-12">
                <div className="py-2">
                  <h5 className="text-custom fw-bolder">Untuk Anda Klien Kami</h5>
                  <h1 className="fw-bold text-white">Layanan Konsultasi</h1>
                  <h5 className="text-custom fw-bolder">Hubungi kami di 000000000 atau silahkan isi form berikut ini</h5>
                  <h6 className="fw-bolder text-white">
                    Kami akan menghubungi Anda secepatnya untuk membantu Anda menyelesaikan masalah Anda dengan cepat dan efisien. Kami siap membantu Anda. 
                  </h6>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="name" className="form-control mb-3" name="name" placeholder="Nama Anda" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" id="email" className="form-control mb-3" name="email" placeholder="Email Anda" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" id="phone" className="form-control mb-3" name="phone" placeholder="Nomor Telepon" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <select id="service" name="service" className="form-control">
                            <option defaultValue="none" disabled="">Jenis Perkara</option>
                            <option value="design">Pidana</option>
                            <option value="development">Perdata</option>
                            <option value="illustration">Kepalitan</option>
                            <option value="branding">Korupsi</option>
                            <option value="video">HAM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <textarea id="case" rows="5" className="form-control" name="case" placeholder="Penjelasan mengenai kasus Anda"></textarea>
                    </div>
                  </div>

                  <div className="form-actions text-center">
                  <button type="submit" className="btn gradient-deep-orange-orange rounded-pill text-white" style={{ width: "12rem" }}>
                    <i className="fa fa-paper-plane"></i> Kirim
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-body">
        <div className="container py-3">
          <center className="mt-5">
            <h5 className="text-custom display-6 fw-bolder">Kunjugi Ekspertis Kami</h5>
            <h2 className="fw-bold display-4">Firma Hukum yang Terkualifikasi</h2>
            <hr />
          </center>
          <div className="d-none d-lg-block">
            <Splide options={{
              perPage: 3,
            }}>
              {attorneys.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="profile-card-2">
                    <img src={item.image} className="img img-fluid" />
                    <div className="profile-name">{item.name}</div>
                    <div className="profile-username">{item.position}</div>
                    <div className="profile-icons">
                      <a className="mx-1" href="#"><i className="text-custom fa-brands fa-whatsapp"></i></a>
                      <a className="mx-1" href="#"><i className="text-custom fa-brands fa-twitter"></i></a>
                      <a className="mx-1" href="#"><i className="text-custom fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="d-lg-none">
            <Splide options={{
              perPage: 1,
            }}>
              {attorneys.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="profile-card-2">
                    <img src={item.image} className="img img-fluid" />
                    <div className="profile-name">{item.name}</div>
                    <div className="profile-username">{item.position}</div>
                    <div className="profile-icons">
                      <a className="mx-1" href="#"><i className="text-custom fa-brands fa-whatsapp"></i></a>
                      <a className="mx-1" href="#"><i className="text-custom fa-brands fa-twitter"></i></a>
                      <a className="mx-1" href="#"><i className="text-custom fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="row mt-5">
                <div className="col-6">
                  <div className="card rounded-3 gradient-deep-orange-orange mb-3">
                    <div className="card-body text-white">
                      <center>
                        <span className="display-3 fw-bolder">97%</span>
                        <br />
                        <span className="fw-bolder">Cases Won</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card rounded-3 gradient-deep-orange-orange mb-3">
                    <div className="card-body text-white">
                      <center>
                        <span className="display-3 fw-bolder">97%</span>
                        <br />
                        <span className="fw-bolder">Cases Won</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card rounded-3 gradient-deep-orange-orange mb-3">
                    <div className="card-body text-white">
                      <center>
                        <span className="display-3 fw-bolder">97%</span>
                        <br />
                        <span className="fw-bolder">Cases Won</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card rounded-3 gradient-deep-orange-orange mb-3">
                    <div className="card-body text-white">
                      <center>
                        <span className="display-3 fw-bolder">97%</span>
                        <br />
                        <span className="fw-bolder">Cases Won</span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <img src="/images/lawframe.png" className="img img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-body">
        <div className="container py-3">
          <center>
            <h5 className="warning display-6 fw-bolder text-custom">Blog</h5>
            <h2 className="fw-bold display-4">Berita Terkini</h2>
            <hr />
          </center>
          <div className="d-none d-lg-block">
            <div className="row">
              {posts.map((item, index) => (
                <div className="col-4" key={index}>
                  <div className="profile-card-4 bg-white h-100 mb-3">
                  <img
                      src={item.image ? `https://hukum.belajarduit.com/storage/${item.image}` : `https://source.unsplash.com/1280x720?${item.category.name}`}
                      className="img-4"
                    />    
                    <div className="profile-content">
                      <h5 className="text-bold-500 mb-2">{item.title}</h5>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-circle" src={`https://source.unsplash.com/640x480?${item.category.name}`} width={50} height={50} style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-10">
                          <div className="px-2">
                            <h5 className="fw-bolder">{item.author.name}</h5>
                            <h6 className="fw-semibold">{item.created_at}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-lg-none">
            <Splide options={{
              perPage: 1,
            }}>
              {posts.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="profile-card-4 bg-white h-100">
                  <img
                      src={item.image ? `https://hukum.belajarduit.com/storage/${item.image}` : `https://source.unsplash.com/1280x720?${item.category.name}`}
                      className="img-4"
                    />  
                    <div className="profile-content">
                      <h5 className="text-bold-500 mb-2">{item.title}</h5>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-circle" src={`https://source.unsplash.com/640x480?${item.category.name}`} width={50} height={50} style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-10">
                          <div className="px-2">
                            <h5 className="fw-bolder">{item.author.name}</h5>
                            <h6 className="fw-semibold">{item.created_at}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </section>
    </Layout >
  );
}