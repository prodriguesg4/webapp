import { SignInForm } from "./form"
import SignInFeatured from '@/assets/images/sign-in-featured.svg'

export const SignInPage = () => {
    return <div className="w-full h-screen grid grid-cols-2">
        <div className="flex justify-center items-center">
            <SignInForm />
        </div>
        <div className="flex flex-col justify-center items-center bg-teal-50">
            <div className="flex flex-col justify-center items-center mb-10">
                <h1 className="text-3xl font-semibold tracking-tight">Nova era de produtividade e inovação</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-3 text-center">Tecnologia de ponta para conversões de alta qualidade.<br />
                Tudo o que você precisa para qualificar leads e fechar negócios.</p>
            </div>
            <div className="w-2/3">
                <img src={SignInFeatured} alt="" />
            </div>
        </div>
    </div>
}