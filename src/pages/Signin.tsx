import { Checkbox } from "../components/checkbox";
import axios from 'axios'
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { TextInput } from "../components/textinput";
import { Text } from "../components/Text";
import { Logo } from "../logo";
import { FormEvent, useState } from "react";

export function Signin() {

    const [isUserSignedIn, setisUserSignedIn] = useState(false)


    const HandleSignin = async (e: FormEvent) => {
        e.preventDefault()
        
        await axios.post('/sessions', {
            email: 'jhonDoe@test.com',
            password: '246116410'
        })

        setisUserSignedIn(true)
    }


  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className="flex flex-col items-center ">
        {isUserSignedIn && <Text>você está logado</Text>}
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={HandleSignin} className=" gap-4 flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className=" font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className=" font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className=" mt-4 ">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400  underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400  underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
