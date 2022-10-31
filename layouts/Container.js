import Footer from '../components/Footer'


function Container({ children }) {
    return (
        <div class="bg-black h-screen">
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Container;