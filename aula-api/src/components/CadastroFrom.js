'use client'
import React, {useState} from "react";

const CadastroFrom = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //removendo o estado da senha


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email}), //enviando apenas nome e email
            });
            if (response.ok) {
                console.log('Cadastro realizado com sucesso!');
                // aqui voce pode adicionar algum logica de redirecionamento ou feedback ao
                // usuario
            } else {
                console.error('Erro ao cadastrar:', response.status);
                //aqui voce opde adicionar alguma logica de tratamento de erro
            }
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            //aqui voce pode adicionar alfuma logica de tratamento de erro geral
        }
    };
    return (<div className="flex items-center justify-center min-h-sxreen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2x1 font-semibold mb-6 text-gray-800">Cadastro</h2>
                     <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                         <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
                           Nome:
                        </label>
                        <input
                          type="text"
                          id="nome"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                    </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-blod mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {/*removendo o campo de senha */}
            <div className="flex items-center justify=between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded focus:outline-nome focus:shadow=outline"
                    type="submit">
                    cadastrar
                </button>
            </div>

        </form>
    </div>
</div>
) ;

};

export default CadastroFrom;