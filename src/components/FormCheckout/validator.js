import { z } from 'zod'
import { validateCpf } from '../../utils/validate'

const REQUIRED_FIELD = 'Campo Obrigatório'

const schema = z.lazy(() =>
  z.object({
    name: z.string().min(1, REQUIRED_FIELD),
    cpf: z.string().min(1, REQUIRED_FIELD).refine(validateCpf, 'CPF Inválido'),
    celular: z.string().min(1, REQUIRED_FIELD).min(15, 'Celular Inválido'),
    email: z.string().min(1, REQUIRED_FIELD).email('E-mail Inválido'),
    cep: z.string().min(1, REQUIRED_FIELD).min(8, 'CEP inválido'),
    endereco: z.string().min(1, REQUIRED_FIELD),
    cidade: z.string().min(1, REQUIRED_FIELD),
    estado: z.string().min(1, REQUIRED_FIELD),
  }),
)

export default schema
