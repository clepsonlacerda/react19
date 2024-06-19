import { useActionState } from "react"

export function FormState() {

  const submitForm = (prevState, formData) => {
    const name = formData.get("username");

    console.log(prevState)

    if (name.length < 4) {
      return {
        text: "digite um numero mair que 4"
      }
    }

    return {
      text: `bem vindo(a) ${name}`
    }
  }

  const [message, formAction] = useActionState(submitForm, null);

  return (
    <div>
      <br />
      <h1>FormState</h1>

      <form action={formAction}>
        <label >Nome</label>
        <input type="text" name="username" />

        <button type="submit">cadastrar</button>
      </form>

      {message && <h1>{message.text}</h1>}

      <br />
    </div>
  );
}