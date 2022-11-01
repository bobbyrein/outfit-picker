import Footer from '../components/Footer'


function Container({ children }) {
    return (
        <div class="bg-black h-screen text-white">
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Container;