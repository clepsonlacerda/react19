import { useFormStatus } from "react-dom"

export function FormStatus() {


  async function formAction(formData) {
    await new Promise(resolve => setTimeout(resolve, 2500));

    const text = formData.get("text");

    console.log(text);
  }

  return (
    <div>
      <h1>FormStatus</h1>

      <form action={formAction}>
        <label >Nome</label>
        <input type="text" name="text" />

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "enviando..." : "cadastrar"}
      </button>

      {pending && <span>enviando formulario...</span>}
    </div>
  );
}