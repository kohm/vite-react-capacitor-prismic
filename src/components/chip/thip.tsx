type Props = {
  text: string;
};

function Chip({ text }: Props) {
  return <p>${text}</p>;
}

export default Chip;
