import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_FRESH_PK
      );
      setSuccess(true);
      setLoading(false);
      form.current.reset();
    } catch (error) {
      setError(true);
      setLoading(false);
      form.current.reset();
      console.log(error);
    }
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contactTitle">Contacto</h1>
      <div className="contactWrapper">
        <div className="contactLeft">
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Nombre" type="text" name="name" required />
            <input placeholder="Correo " type="email" name="email" required />
            <textarea placeholder="Mensaje" rows={7} cols={30} name="message" />
            {loading ? (
              <button className="contactBtn" type="submit">
                <CircularProgress style={{ color: "white" }} size={18} />
              </button>
            ) : (
              <button className="contactBtn" type="submit">
                Enviar
              </button>
            )}
          </form>
        </div>
        <div className="contactRight">
          <p>Mándanos un mensaje para más información y te contactaremos.</p>

          {success && (
            <Stack>
              <Alert
                severity="success"
                variant="filled"
                onClose={() => setSuccess(null)}
              >
                ¡Gracias! Estaremos en contacto pronto.
              </Alert>
            </Stack>
          )}

          {error && (
            <Stack>
              <Alert
                severity="error"
                variant="filled"
                onClose={() => setError(false)}
              >
                Algo ha ido mal. Inténtalo de nuevo, por favor.
              </Alert>
            </Stack>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
