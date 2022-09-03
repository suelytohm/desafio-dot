export const maskCpf = value =>
  value
    .replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')

export const maskPhoneNumber = value =>
  value
    ?.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
    .replace(/( - \d{4})\d+?$/, '$1') ?? ''

export const maskCep = value =>
  value?.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2')
