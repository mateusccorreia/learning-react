import { Inter } from "next/font/google";
import Counter from "./components/counter";
import Form from "./components/Form";
import MinhaCaixa from "./components/MinhaCaixa";

export default function Home() {

  return (
    <main>   
      <div>
      <Counter />
      <Form />
      <MinhaCaixa />
      </div>
    </main>
  );
}
