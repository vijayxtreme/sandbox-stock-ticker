export default ({ isOpenModal }) => (
  <div className={`${isOpenModal ? "open" : "close"}`}>I'm the modal</div>
);
