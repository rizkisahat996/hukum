import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function TemplatePages({ children }) {
    const router = useRouter();
    const [jumbotronTitle, setJumbotronTitle] = useState('');
    const [jumbotronBackground, setJumbotronBackground] = useState('');

    const checkPathName = () => {
        switch (router.pathname) {
            case '/our-people':
                setJumbotronBackground('/images/our-people.jpg');
                setJumbotronTitle('Our People');
                break;
            case '/core-values':
                setJumbotronBackground('/images/core-values.jpg');
                setJumbotronTitle('Core Values');
                break;
            case '/our-services':
                setJumbotronBackground('/images/our-services.jpg');
                setJumbotronTitle('Our Services');
                break;
            case '/clients':
                setJumbotronBackground('/images/clients.jpg');
                setJumbotronTitle('Clients');
                break;
            case '/contact':
                setJumbotronBackground('/images/slide-background.jpg');
                setJumbotronTitle('Contact');
                break;
            default:
                setJumbotronBackground('/images/slide-background.jpg');
                setJumbotronTitle('Our People');
                break;
        }
    }

    useEffect(() => {
        checkPathName();
    }, [router.pathname]);

    return (
        <>
            <div className="jumbotron" style={{ backgroundImage: "url(" + jumbotronBackground + ")" }}>
                <div className="jumbotron-overlay">
                    <div className="jumbotron-overlay-content">
                        <h1 className="jumbotron-title">{jumbotronTitle}</h1>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container py-3">
                    {children}
                </div>
            </div>
        </>
    );
}