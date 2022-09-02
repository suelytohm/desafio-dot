import './FormCheckout.css'
export const FormCheckout = () => {
  return (
    <div className="FormCheckout">
      <form>
        <input type="text" name="name" placeholder="Nome Completo" required />
        <input type="text" name="cpf" placeholder="CPF" />
        <input type="text" name="celular" placeholder="Celular" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="text" name="cep" placeholder="CEP" />
        <input type="text" name="endereco" placeholder="Endereço" />
        <input type="text" name="cidade" placeholder="Cidade" />
        <input type="text" name="estado" placeholder="Estado" />
      </form>
    </div>
  )
}
