import Image from "next/image";
export default function Compra() {
    return (
        <div className="p-10 md:p-8 bg-blue-900">

            <div className="grid md:grid-cols-3">

                <div className="text-center md:text-left w-full pt-4 pl-9 md:pt-12">
                    <h2 className="text-3xl text-green-200 font-semibold">Valor Promocional</h2>
                    <h3 className="text-4xl font-bold text-lg text-green-100 mt-5">R$ 218<span className="text-sm">,70</span>
                    </h3>
                    <h3 class="text-lg text-green-300 font-semibold">Mensais</h3>
                </div>
                <div className="col-span-2">
                    <h3 className="text-blue-900 text-lg">Métodos de Pgamento:</h3>
                    <div className="">
                        <div className="cursor-pointer bg-gray-900 hover:bg-gray-300 text-blue-300 hover:text-blue-800 font-semibold text-md table p-3 m-1 rounded">
                            <h2>Pix</h2>
                            <div className="bg-white w-50 h-50">
                                <Image
                                    src="/pix.jpeg"
                                    alt=""
                                    width="200"
                                    height="200"
                                />
                            </div>
                        </div>
                        <a href="https://pag.ae/7WxbMVsb2/button" title="Pagar com PagSeguro"  target="_blank" className="cursor-pointer bg-gray-900 hover:bg-gray-300 text-yellow-400 hover:text-blue-800 font-semibold text-md table p-3 m-1 rounded">Pagseguro</a>
                        {/* <div className="mx-auto group bg-gray-900 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-semibold text-md table p-3 m-1 rounded">
                            <h2 className="mb-3 text-blue-300 group-hover:text-gray-700">Transferência Bancária</h2>
                            <h1 className="group-hover:text-gray-700" >Luana Barbosa de Oliveira</h1>
                            <p>
                            <span className="group-hover:text-gray-700">Cnpj:</span> 23.087.250/0001-06<br />
                            <h3 className="group-hover:text-gray-700" >Banco do Brasil</h3>
                            <span className="group-hover:text-gray-700" >Ag :</span> 7012-2
                            <span className="group-hover:text-gray-700" >Conta corrente: </span>7428-4
                            </p>
                            
                        </div> */}
                        <h3 className="text-gray-400 text-sm"><a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511952185072" class="text-green-400 group-hover:text-green-600">Envie o comprovante do depósito pelo whatsapp.</a></h3>
                    </div>
                </div>

            </div>
        </div>    )
}