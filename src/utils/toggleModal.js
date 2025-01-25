export default function toggleModal(ref) {
  if (!ref.current) {
    return;
  }
  ref.current.hasAttribute("open")
    ? ref.current.close()
    : ref.current.showModal();
}
