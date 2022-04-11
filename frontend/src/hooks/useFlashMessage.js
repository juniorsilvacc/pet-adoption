import events from "../utils/events";

export default function useFlashMessage() {
  function setFlashMessage(msg, type) {
    events.emit("flash", {
      message: msg,
      type: type,
    });
  }

  return { setFlashMessage };
}
