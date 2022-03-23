function Details({ ...props }) {
  const { text, phoneNumber } = { ...props };
  return (
    <div>
      <h1>{phoneNumber}</h1>
      <h1>{text}</h1>
    </div>
  );
}

export default Details;
