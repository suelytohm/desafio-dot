import './FormCheckout.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema from './validator'
import { Input } from '../Input'
import { maskCpf, maskPhoneNumber, maskCep } from '../../utils/mask'

export const FormCheckout = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  console.log(errors)
  const handleFormValid = data => {
    console.log('TUDO CERTO', data)
  }

  return (
    <div className="FormCheckout">
      <form id={id} onSubmit={handleSubmit(handleFormValid)}>
        <Input
          placeholder="Nome Completo"
          register={register}
          name="name"
          label="Name"
          error={errors.name?.message}
        />
        <Input
          placeholder="CPF"
          register={register}
          name="cpf"
          label="CPF"
          maxLength={14}
          mask={maskCpf}
          error={errors.cpf?.message}
        />
        <Input
          placeholder="Celular"
          register={register}
          name="celular"
          label="Celular"
          maxLength={15}
          mask={maskPhoneNumber}
          error={errors.celular?.message}
        />
        <Input
          placeholder="E-mail"
          register={register}
          name="email"
          label="E-mail"
          type="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="CEP"
          register={register}
          name="cep"
          label="CEP"
          mask={maskCep}
          maxLength={9}
          error={errors.cep?.message}
        />
        <Input
          placeholder="Endereço"
          register={register}
          name="endereco"
          label="Endereço"
          error={errors.endereco?.message}
        />
        <Input
          placeholder="Cidade"
          register={register}
          name="cidade"
          label="Cidade"
          error={errors.cidade?.message}
        />
        <Input
          placeholder="Estado"
          register={register}
          name="estado"
          label="Estado"
          error={errors.estado?.message}
        />
      </form>
    </div>
  )
}
