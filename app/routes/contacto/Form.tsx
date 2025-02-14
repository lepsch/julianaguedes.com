import React from "react"
import axios, { AxiosError, HttpStatusCode } from "axios"
import styles from "./Form.module.scss"

export function Form() {
  const [sending, setSending] = React.useState(false)
  const [error, setError] = React.useState("")
  const nomeRef = React.useRef<HTMLInputElement>(null)
  const emailRef = React.useRef<HTMLInputElement>(null)
  const telefoneRef = React.useRef<HTMLInputElement>(null)
  const mensagemRef = React.useRef<HTMLTextAreaElement>(null)
  const captchaImgRef = React.useRef<HTMLImageElement>(null)
  const captchaRef = React.useRef<HTMLInputElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      captcha: captchaRef.current!.value,
      email: emailRef.current!.value,
      mensagem: mensagemRef.current!.value,
      nome: nomeRef.current!.value,
      telefone: telefoneRef.current!.value,
    }
    setSending(true)
    setError("")
    try {
      await axios.post("/sendmail.php", data)
      alert("Mensagem enviada com sucesso!")
      captchaRef.current!.value = ""
      emailRef.current!.value = ""
      mensagemRef.current!.value = ""
      nomeRef.current!.value = ""
      telefoneRef.current!.value = ""
      captchaImgRef.current!.src = `/securimage/securimage_show.php?${Math.random()}`
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        switch (error.response.status as HttpStatusCode) {
          case HttpStatusCode.Forbidden:
            setError("Código captcha não corresponde")
            captchaRef.current!.focus()
            break
          default:
            setError("Erro ao enviar mensagem. Por favor, tente mais tarde.")
            break
        }
      }
      throw error
    } finally {
      setSending(false)
    }
  }

  const onInput = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget
    input.setCustomValidity("")
  }

  return (
    <div className={styles["Form"]}>
      <h1 id="send-message" className={styles["title"]}>
        Envia uma mensagem
      </h1>
      {/* eslint-disable-next-line @typescript-eslint/no-floating-promises -- Fire and forget */}
      <form
        className={styles["form"]}
        method="post"
        onSubmit={(event) => {
          onSubmit(event)
        }}
        aria-labelledby="send-message"
      >
        <div className={styles["form-group"]}>
          <label htmlFor="nome">Nome</label>
          <input disabled={sending} id="nome" name="nome" onInput={onInput} ref={nomeRef} required type="text" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input disabled={sending} id="email" name="email" onInput={onInput} ref={emailRef} required type="email" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="telefone">Telefone</label>
          <input
            disabled={sending}
            id="telefone"
            minLength={9}
            name="telefone"
            onInput={onInput}
            ref={telefoneRef}
            required
            type="tel"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            disabled={sending}
            id="mensagem"
            name="mensagem"
            onInput={onInput}
            ref={mensagemRef}
            required
            rows={5}
          />
        </div>
        <div className={styles["form-captcha"]}>
          <div className={styles["captcha-container"]}>
            <img alt="Captcha" id="captcha" ref={captchaImgRef} src="/securimage/securimage_show.php" />
            <button
              disabled={sending}
              onClick={(e) => {
                e.preventDefault()
                captchaImgRef.current!.src = `/securimage/securimage_show.php?${Math.random()}`
                captchaRef.current!.focus()
              }}
            >
              ⟳
            </button>
          </div>
          <input disabled={sending} maxLength={6} name="captcha" ref={captchaRef} required size={10} type="text" />
        </div>
        <button className={styles["button"]} disabled={sending} type="submit">
          Enviar
        </button>
        {error && <p className={styles["error"]}>{error}</p>}
      </form>
    </div>
  )
}
