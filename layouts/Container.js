import Footer from '../components/Footer'


function Container({ children }) {
    return (
        <div className="bg-black h-full text-white">
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Container;