import NavBar from "../Components/NavBar";
import {useForm} from '../Hooks/useForm.jsx'
import {url} from '../Utils/url.js'

const Home = () => {
    const {status, name, email, cpf, chave, numero,error, onChave, onNumero, onCpf, onName, onEmail, handleSubmit} = useForm(url);

    const get_error_user = () => {
        return (
            <>
                <div className="fixed right-120 bg-neutral-600 rounded-2xl flex flex-col items-center p-6 top-1/2 gap-2 hover:bg-neutral-700 transition-all duration-200">
                    <h1 className="text-4xl hover:scale-110 transition-all duration-200">🪫</h1>
                    <p className="text-center text-sm text-red-600 uppercase">{error}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="layout">
                <NavBar/>

                <form className="border border-neutral-400 bg-neutral-800/50 rounded-2xl w-100 mx-auto mt-40 p-10 h-fit space-y-6" onSubmit={handleSubmit}>
                    <label className="flex flex-col">
                        <span className="font-bold">Name:</span>
                        <input type="text" placeholder="Digite seu nome: " value={name} onChange={onName} required className="bg-neutral-600 p-2 rounded-2xl border border-transparent hover:bg-neutral-600/50 focus:border-white focus:outline-none transition-colors duration-250"/>
                    </label>

                    <label className="flex flex-col">
                        <span className="font-bold">Email:</span>
                        <input type="email" placeholder="Digite seu email: "value={email} onChange={onEmail}  required className="bg-neutral-600 p-2 rounded-2xl border border-transparent hover:bg-neutral-600/50 focus:border-white focus:outline-none transition-colors duration-250"/>
                    </label>

                    <label className="flex flex-col">
                        <span className="font-bold">Cpf:</span>
                        <input type="text" placeholder="Digite seu cpf: "value={cpf} onChange={onCpf} required className="bg-neutral-600 p-2 rounded-2xl border border-transparent hover:bg-neutral-600/50 focus:border-white focus:outline-none transition-colors duration-250"/>
                    </label>

                    <label className="flex flex-col">
                        <span className="font-bold">Chave</span>
                        <input type="text" placeholder="Digite sua chave: " value={chave} onChange={onChave} required className="bg-neutral-600 p-2 rounded-2xl border border-transparent hover:bg-neutral-600/50 focus:border-white focus:outline-none transition-colors duration-250"/>
                    </label>

                    <label className="flex flex-col">
                        <span className="font-bold">Numero:</span>
                        <input type="text" placeholder="Digite seu numero: "value={numero} onChange={onNumero}  required className="bg-neutral-600 p-2 rounded-2xl border border-transparent hover:bg-neutral-600/50 focus:border-white focus:outline-none transition-colors duration-350" />
                    </label>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-neutral-600 hover:bg-neutral-600/50 p-2 rounded-2xl w-40 transition-colors duration-250 outline-none active:border-white">Enviar</button>
                    </div>

                    <p className={`${status === "Parado" ? "text-red-600" : "text-green-600"} text-center`}>
                        {status}
                    </p>
                </form>

                {error && get_error_user()}
            </section>
        </>
    )
}

export default Home