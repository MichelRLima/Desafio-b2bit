import b2bit from "../images/b2bit.png"
const ErrorPage = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <img className="w-24 mt-5" src={b2bit} alt="image" />
                <h1>Erro 404!</h1>
            </div>

        </>
    )

}

export default ErrorPage