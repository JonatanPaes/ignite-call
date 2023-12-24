import { ArrowRight } from 'phosphor-react'
import { Button, TextInput } from '@jonatanpaes-ui/react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput prefix="ignite.com/" placeholder="seu-usuario" />

      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
