import Footer from "./Footer";
import NavBar from "./NavBar";

export default function PageContent(props: {component: any; page: any}) {
    return (
        <>
            <NavBar />
            <props.component {...props.page} />
            <Footer />
        </>
    )
}