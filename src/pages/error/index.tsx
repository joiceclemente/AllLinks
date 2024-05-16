import { Link } from "react-router-dom";

export function Error() {
    return(
        <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
            <h1 className="font-bold text-5xl mb-4">404</h1>
            <p className="italic text-2xl mb-4">Você caiu em página que não existe!</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
                Cique aqui para voltar para home
            </Link>
        </div>
    )
}