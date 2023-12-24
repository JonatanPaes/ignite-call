import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import { Button, TextInput } from '@jonatanpaes-ui/react'
import { z } from 'zod'

import { Form } from './styles'

const claimUsernameForm = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameForm>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {}

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        prefix="ignite.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />

      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
